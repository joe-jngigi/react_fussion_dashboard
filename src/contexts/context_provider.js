import React, {useContext, createContext, useState} from "react";

const StateContext = React.createContext();

// This will be the state of the different mini-apps that are clicked to be opened or closed
const intialState = {
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

    return(
        <StateContext.Provider
        // Whatever values that are passed trhough here, they are passed to any of the components in our 
        // entire application
        value={
            // Pass as objects
            // Key: value ; in this case we will put only one since they are the same
            // test: 'test'
            {activeMenu, setActiveMenu,}
        }
        >
        {/* Here, children are returned => whatever you wrap in your context, eg a component will be displayed
        (returned) */}
        {children}
        </StateContext.Provider>
)}

// A function that returns the call to useContext, but we pass in what content we want to use
export const useStateContext = () => useContext(StateContext)