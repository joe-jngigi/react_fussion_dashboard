import React from 'react'

// It enables navigation between views from different components in a React
// application, allows the browser URL to be changed, and keeps the UI in 
// sync with the URL.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Administrator, Kanban, Orders, Employees, Editor, Customers, ColorPicker,
Calendar, Area, Bar, ColorMapping,Financial, Line, Pie, Pyramid, Stacked} from './pages';
import './App.css';

import { useStateContext } from './contexts/context_provider';
const App = () => {
  //In the context_provider, the statevalue for active menu is 'true'
  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext()
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
          <TooltipComponent content="Settings" position='Top' >
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
            style={{background: currentColor, borderRadius: '50%'}}
            onClick = {() => setThemeSettings(true)}>
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>

        {/* In this, it checks the state of the menu using the if statement */}
        {/* (condition) ? statement :(else) statement */}
        {
          //If sidebar is activeMenu, then sidebar === true value, hence it is open, else, it will be closed
          activeMenu ?(
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>
          ) :(
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar/>
            </div>
          )
        }

        
        <div className={
          `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
          ${ activeMenu ? 'md:ml-72': 'flex-2'}`}>
        
          {/* navigation bar code  */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar/>
          </div>

          {/* this will be main routing to different pages */}
          <div>
            {themeSettings && <ThemeSettings/>}
            <Routes>
              {/* Dashboard */}
              <Route path='/' element = {<Administrator/>}/>
              <Route path='/Administrator' element = {<Administrator/>}/>

              {/* Pages */}
              <Route path='/orders' element = {<Orders/>}/>
              <Route path='/employees' element = {<Employees/>}/>
              <Route path='/customers' element = {<Customers/>}/>

              {/* Apps */}
              <Route path='/calendar' element = {<Calendar/>}/>
              <Route path='/kanban' element = {<Kanban/>}/>
              <Route path='/editor' element = {<Editor/>}/>
              <Route path='/Color_Picker' element = {<ColorPicker/>}/>

              {/* Charts */}
              <Route path='/line' element = {<Line/>}/>
              <Route path='/area' element = {<Area/>}/>
              <Route path='/bar' element = {<Bar/>}/>
              <Route path='/pie' element = {<Pie/>}/>
              <Route path='/financial' element = {<Financial/>}/>
              <Route path='/color_mapping' element = {<ColorMapping/>}/>
              <Route path='/pyramid' element = {<Pyramid/>}/>
              <Route path='/stacked' element = {<Stacked/>}/>
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
