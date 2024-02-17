import React, {useContext, useState} from "react";

const StateContext = React.createContext();

// This will be the state of the different mini-apps that are clicked to be opened or closed
const initialState = {
    chat: false,
    cart: false,
    userprofile: false,
    notification: false,
}

// The context provider is an arrow function that returns the StateContext.Provider
export const ContextProvider = ({children}) =>{
    // Our applications logic
    // So this state will be passed to the value in statecontext.provider
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initialState)

    const handleClick = (clicked) =>{
        //setisClicked(clicked)
        setisClicked({...initialState, [clicked]:true})
    }

    const [screenSize, setscreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false)
    }

    const [themeSettings, setThemeSettings] = useState(false)
    return(
        <StateContext.Provider
        // Whatever values that are passed trhough here, they are passed to any of the components in our 
        // entire application
        value={
            // Pass as objects
            // Key: value ; in this case we will put only one since they are the same
            // test: 'test'
            {activeMenu, setActiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize,
            setColor, setMode, currentMode, currentColor, setThemeSettings, themeSettings}
        }
        >
        {/* Here, children are returned => whatever you wrap in your context, eg a component will be displayed
        (returned) */}
        {children}
        </StateContext.Provider>
)}

// A function that returns the call to useContext, but we pass in what content we want to use
export const useStateContext = () => useContext(StateContext)
