'use client'
import { Count } from '@/component/Count';
import Form from '@/component/forReducer/Form';
import Reducer from '@/component/forReducer/Reducer';
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  // const [color, setColor] = useState('')
  // console.log(color);

//   const [post, setPost] = useState([]);
// console.log(post);
//   useEffect(() => {
//     fetch('https://server-side-kohl.vercel.app/api/v1/category')
//       .then(res => res.json())
//     .then(data=>setPost(data?.data))
//   },[])

//   const [count, setCount] = useState(9)
//   const handlePOst = () => {

//     setCount(count -1)
    
//   }
// console.log(post.slice(count));
//   const newP = post.slice(count)
  
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
];
const [country, setCountry] = useState(0);
  
useEffect(() => {
  console.log(country[0]);
  console.log(country[1]);
  
}, [country]);

  return (
    
    <main className='  w-full mx-auto py-8 px-6 sm:px-16'>
      {/* <div>
      <div style={{ backgroundColor: color, height: '400px', width: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}></div>
        <input onChange={(e) => setColor(e.target.value)} name={color} className='my-4 border border-sky-500 w-full py-3 px-8' type="text" />
      </div> */}
      {/* <div className="flex items-center  gap-8">
        <button onClick={handlePOst} className='bg-sky-300 text-white py-3 px-4 rounded-lg'>Post </button>
        <p>Total Post : {newP.length}</p>
      </div>

      <div className="grid grid-cols-1 py-8  sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newP?.map(p => <div className="">
          <p>{p?.name
}</p>
          <img className='w-[230px] h-[280px] rounded-md' src={p?.imageUrl} alt="" />
        </div> 
        )
          
       }

        </div> */}

      {/* <Count/> */}
      {/* just for simple reducer count  */}
      {/* <Reducer/> */}
      {/* form with useReducer */}
      {/* <Form/> */}
      {/*  select for showing country and cities start1*/}
      <div className="flex justify-center gap-4">
      <select  value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry([e.target.value]);
        }}  className='border  border-black p-3 px-4' name="" id="">
        {
          countries.map((c,index)=>(<option key={index}  className='border  border-black p-3 px-4' value={index}>{c.name
          
          }</option>
            
          )
            )
        }
        
        </select>
        <select  className='border  border-black p-3 px-4' name="" id="">
        {countries[country] &&
          countries[country].cities.map((item, index) => {
            return <option value={index}>{item}</option>;
          })}
        </select>
     </div>
      {/*  select for showing country and cities end */}



    </main>
  )
}
