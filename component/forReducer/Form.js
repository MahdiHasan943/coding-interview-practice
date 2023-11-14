'use client'
import React, { useReducer } from 'react'

const Form = () => {

    const initialState = {
        firstName:"",
        lastName: "",
        email: "",
        gender: "",
        education: "",
        quantity: 0,
        feedback:"",
        term:false

        
    }
    const reducer = (state, action) => {
        
        console.log(state,'from reducer');
        switch(action.type){
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            case "Increment":
                return{
                    ...state,
                    quantity: state.quantity + 1
            }
            case "Decrement": return {
                    ...state,
                    quantity: state.quantity - 1
    
            };
            case "Toggle": return {
                ...state,
                term: !state.term

            };
            
            default:
                return state
        }
        
     
    }
    const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
      event.preventDefault();
      console.log(state);
  };

  return (
    <div className='h-screen flex justify-center items-center overflow-auto'>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'
        onSubmit={submit}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='firstName'>
            First Name
          </label>
          <input
                      type='text'
                      className='border border-black rounded-md py-2 px-2'
            name='firstName'
            id='firstName'
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='lastName'>
            Last Name
          </label>
                  <input
                                            className='border border-black rounded-md py-2 px-2'

            type='text'
            name='lastName'
            id='lastName'
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='email'>
            Email
          </label>
          <input
                      type='email'
                      className='border border-black rounded-md py-2 px-2'

            name='email'
            id='email'
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className='flex  flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Gender</h1>
          <div className='flex gap-3'>
            <div className=''>
              <input

                type='radio'
                id='male'
                name='gender'
                value='male'
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label className='ml-2 text-lg' for='male'>
                Male
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label className='ml-2 text-lg' for='female'>
                Female
              </label>
            </div>
            <div>
              <input
                type='radio'
                              id='other'
                              
                name='gender'
                value='other'
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label className='ml-2 text-lg' for='other'>
                Other
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' for='education'>
            Education
          </label>
          <select
            name='education'
                      id='education'
                      className='border  border-black rounded-md py-2 px-2'

            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value='SSC'>SSC</option>
            <option value='HSC'>HSC</option>
            <option value='underGrad'>Under Graduate</option>
            <option value='graduate'>Graduate</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3'>Number of PCs</label>
          <div className='flex justify-between items-center gap-2 '>
            <button onClick={()=>dispatch({type:"Decrement"})} className='bg-indigo-500 text-lg text-white rounded h-10 w-10 '>
              -
            </button>
            <div className='border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300'>
                          <span className='text-lg'>{state.quantity}</span>
            </div>
            <button onClick={()=>dispatch({type:"Increment"})} className='bg-indigo-500 text-lg text-white rounded h-10 w-10'>
              +
            </button>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' for='feedback'>
            Feedback
          </label>
                  <textarea
                                                          className='border  border-black rounded-md py-4 px-2'

            name='feedback'
            id='feedback'
            cols='30'
            rows='4'
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          ></textarea>
        </div>

        <div className='flex justify-between items-center w-full'>
          <div className='flex  w-full max-w-xs'>
            <input
              className='mr-3'
              type='checkbox'
              name='term'
              id='terms'
              onClick={() => dispatch({ type: "Toggle" })}
              />
            <label for='terms'>I agree to terms and conditions</label>
          </div>
                  <button
                      className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                      type='submit'
                      disabled={!state.term}
                  >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form