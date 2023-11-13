'use client'
import React, { createContext, useState } from 'react'

export const counterContext=createContext({})
const CountContext = ({children}) => {
    const [count,setCount]=useState(1)
    
    return (
        <counterContext.Provider value={{ count, setCount }}>
            {children}
        
            </counterContext.Provider>

  )
}

export default CountContext