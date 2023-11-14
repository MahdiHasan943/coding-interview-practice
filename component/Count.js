'use client'
import { counterContext } from '@/context/CountContext'
import React, { useContext } from 'react'

export const Count = () => {
    const { count } = useContext(counterContext)
    console.log(count,'from contest component')
  return (
    <div>Count</div>
  )
}
