import React, { useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import avatar from '../data/avatar.jpg'

import {Cart, Chat, Notification, UserProfile} from '.'

import { useStateContext } from "../contexts/context_provider"

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setisclicked, handleClick, screenSize, setscreenSize } = useStateContext();
  // console.log(isClicked)
  // console.log(setisclicked)
  // console.log(handleClick)
  // Accepts a callback function and a dependecy array
  useEffect(() =>{
    const handleResize = () => setscreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize();

    return() => window.removeEventListener('resize', handleResize)
  },[])

  useEffect(() =>{
    if (screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize ])
  return (
    <div className="flex justify-between p-2 md:mx-6 relative ">
      {/* pass the props */}
      {/* CLOSE SIDEBAR BUTTON */}
      <NavButton title='Menu' color='blue' icon={<AiOutlineMenu/>} 
      // callback function
      customFun={() => setActiveMenu(
        // Another callback function
        (prevActiveMenu) => !prevActiveMenu)}
      />

      {/* NAVIGATE DIFFERENT MINI_APP ACTIONS AND PROFILE INFORMATION */}
      <div className="flex">
          <NavButton title='Cart' color='blue' icon={<FiShoppingCart/>}
            customFun={() => handleClick('cart')}
          />
          <NavButton title='Chat' dotColor='#03C9D7' color='blue' icon={<BsChatLeft/>}
            customFun={() => handleClick('chat')}
          />
          <NavButton title='Notifications' dotColor='#03C9D7' color='blue' icon={<RiNotification3Line/>} 
            customFun={() => handleClick('notification')}
          />

          {/* USER PROFILE */}
          <TooltipComponent content='Profile' position="BottomCenter">
            <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userprofile')}
          >
              <img src={avatar} alt="User profile" className="rounded-full h-8  w-8" />
              <p className="text-gray-400 text-14">
                <span className="">Hi, </span>{' '}
                <span className="font-bold ml-1 text-bo">Joe_J</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14"/>
            </div>
          </TooltipComponent>

          {isClicked.chat && <Chat/>}
          {console.log(isClicked.chat)}
          {isClicked.cart && <Cart/>}
          {console.log(isClicked.cart)}
          {isClicked.userprofile && <UserProfile/>}
          {console.log(isClicked.userprofile)}
          {isClicked.notification && <Notification />}
          {console.log(isClicked.notification)}
      </div>
    </div>
  )
}

// There will be different buttons in the menu
const NavButton = ({title, customFun, icon, color, dotColor}) => (
  //The component is like a function, so data is passed from the parent (props)
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFun} color ={{color}}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" 
      style={{background:dotColor}}
      />
      {icon}
    </button>
  </TooltipComponent>
)

export default Navbar
