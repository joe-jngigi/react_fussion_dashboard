import React, { useEffect } from 'react'

// It enables navigation between views from different components in a React
// application, allows the browser URL to be changed, and keeps the UI in 
// sync with the URL.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar,Sidebar,Footer,ThemeSettings } from './components';
import { Administrator, Kanban, Orders, Employees, Editor, Customers, ColorPicker,
Calendar, Area, Bar, ColorMapping,Financial, Line, Pie, Pyramid, Stacked} from './pages';
import './App.css';

const App = () => {
  //
  const activeMenu = true
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
          <TooltipComponent content="Settings" position='Top' >
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
            style={{background:'blue', borderRadius: '50%'}}>
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>

        {/* In this, it checks the state of the menu using the if statement */}
        {/* (condition) ? statement :(else) statement */}
        {
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

        {/* navigation bar code  */}
        <div className={
          `'dark:bg-main-bg bg-main-bg min-h-screen w-full
          ${ activeMenu ? 'md:ml-72': 'flex-2'}`
        }>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar/>
          </div>
        </div>

        {/* this will be main routing to different pages */}
        <div>
          <Routes>
            {/* Dashboard */}
            <Route path='/' element = {<Administrator/>}/>
            <Route path='/admin_main' element = {<Administrator/>}/>

            {/* Pages */}
            <Route path='/orders' element = {<Orders/>}/>
            <Route path='/employees' element = {<Employees/>}/>
            <Route path='/customers' element = {<Customers/>}/>

            {/* Apps */}
            <Route path='/calendar' element = {<Calendar/>}/>
            <Route path='/kanban' element = {<Kanban/>}/>
            <Route path='/editor' element = {<Editor/>}/>
            <Route path='/color_picker' element = {<ColorPicker/>}/>

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
      </BrowserRouter>
    </div>
  )
}

export default App
