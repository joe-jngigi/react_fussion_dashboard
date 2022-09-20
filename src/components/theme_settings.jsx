import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/context_provider'

const ThemeSettings = () => {
  const {setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext()
  return (
    <div className='w-screen bg-half-transparent fixed nav-item top-0 right-0'>
      <div className="bg-white float-right h-screen dark:text-gray-200 w-400 dark:[#484B52]">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
          type='button'
          onClick={() =>setThemeSettings(false)}
          style = {{color: 'rgb(153,171,180)', borderRadius: '50%'}}
          className = 'text-2xl hover:drop-shadow-xl hover:bg-light-gray'> <MdOutlineCancel/></button>
        </div>

        {/* Theme Options */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className='font-semibold text-lg'>Theme Options</p>

          {/* LIGHT */}
          <div className="mt-4">
            <input type="radio" id='light' name='theme' value='Light' className='cursor-pointer'
            onChange={setMode}
            checked = {currentMode === 'Light'}/>
            <label htmlFor="light" className='ml-2 text-md cursor-pointer'>Light</label>
          </div>

          {/* DARK */}
          <div className="mt-4">
            <input type="radio" id='dark' name='theme' value='Dark' className='cursor-pointer'
            onChange={setMode}
            checked = {currentMode === 'Dark'}/>
            <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>Dark</label>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className="flex gap-3 ">
            {themeColors.map((item, index) =>
            <TooltipComponent key={index} position='TopCenter' content={item.name}>
              <div className="relative mt-2 flex gap-5 items-center cursor-pointer">
                <button
                className='h-10 w-10 rounded-full cursor-pointer'
                style={{backgroundColor: item.color}}
                onClick = {() => setColor(item.color)}>
                  <BsCheck className={`ml-2 text-2xl text-white 
                  ${item.color === currentColor ? 'block' : 'hidden'}`}/>
                </button>
                {/* item.color === currentColor */}

              </div>

            </TooltipComponent>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
