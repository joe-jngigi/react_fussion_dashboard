import React from 'react'

const Button = ({color, bgColor, text, size,borderRadius}) => {
  return (
    <button className={`text-${size} p-3 hover:drop-shadow-xl`} type = 'button' style={{background:bgColor, color, borderRadius}}>
      {text}
    </button>
  )
}

export default Button