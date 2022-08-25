import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {MdOutlineDashboard, MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'
const Sidebar = () => {
  // Know menu is active => from the context
  // replace
  const {activeMenu,setActiveMenu } = useStateContext()

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md m-2 rounded-lg text-black'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md rounded-lg text-gray-700 dark:text-gray-200 hover:bg-light-gray dark:hover:text-black m-2'
  return (
    // md => medium device which means min-width = 768px
    <div className='ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto'>

      {
        activeMenu && (
          <>
          <div className="flex justify-between items-center">
            
            {/* Dashboard btn */}
            <Link to='/' className='items-center gap-3 ml-3 mt-4 flex text-xl tracking-tight font-extrabold text-slate-900 dark:text-white'
            onClick={() => setActiveMenu(false)}>
              <MdOutlineDashboard/><span>Dashboard</span>
            </Link>

            {/* Cancel button */}
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button className='text-xl p-3 rounded-full hover:bg-light-gray mt-4 block md:hidden'
              onClick={() =>
                // Add a callback function
                setActiveMenu((prevactiveMenu) =>
                // !activeMenu
                prevactiveMenu)
              }
              >
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>

            {/* Menu Items */}
            <div className="mt-10">
              {
                links.map((item) =>(
                  <div key={item.title}>
                    <p className="uppercase text-gray-400 m-3 mt-4">
                      {item.title}
                    </p>
                    {item.links.map((link) => (
                      // is active is given by using the NavLink by react-router-dom
                      <NavLink className={({isActive}) => isActive ? activeLink : normalLink}
                      to={`/${link.name}`} key ={link.name}
                      onClick = {() =>{

                      }}
                      >
                      {console.log(link.name)}
                      <span className='text-green-700'>{link.icon}</span>
                      <span className='capitalize'>{link.name}</span>
                      </NavLink>
                    ))}                    
                  </div>
                ))
              }
            </div>
          </>
        )
      }
      
    </div>
  )
}

export default Sidebar