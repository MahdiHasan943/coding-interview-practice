import React, { useReducer } from 'react'

const Reducer = () => {
    const initialState = 0;
    const reducer = (state, action) => {

        if (action.type === 'Increment') {
            
            return state + action.payload
        }
        else if (action.type === 'Decrement') {
    return   state - 1;
        }

     }
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <div>
          
          <div className="w-fulll text-white mx-auto
           sm:flex justify-center gap-8 items-center  sm:w-[400px] h-[250px] bg-slate-500 rounded-md shadow-indigo-300">
          <button onClick={()=>dispatch({type:"Increment" ,payload:5})} className='py-3 px-6 rounded-md bg-sky-300 '>Increment</button>
          <p>{state}</p>
          <button onClick={()=>dispatch({type:"Decrement"})} className='py-3 px-6 rounded-md bg-sky-300'>Decrement</button>
           </div>
    </div>
  )
}

export default Reducer