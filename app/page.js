'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  // const [color, setColor] = useState('')
  // console.log(color);

  const [post, setPost] = useState([]);
// console.log(post);
  useEffect(() => {
    fetch('https://server-side-kohl.vercel.app/api/v1/category')
      .then(res => res.json())
    .then(data=>setPost(data?.data))
  },[])

  const [count, setCount] = useState(9)
  const handlePOst = () => {

    setCount(count -1)
    
  }
console.log(post.slice(count));
const newP=post.slice(count)

  return (
    <main className='  w-full mx-auto py-8 px-6 sm:px-16'>
      {/* <div>
      <div style={{ backgroundColor: color, height: '400px', width: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}></div>
        <input onChange={(e) => setColor(e.target.value)} name={color} className='my-4 border border-sky-500 w-full py-3 px-8' type="text" />
      </div> */}
      <div className="flex items-center  gap-8">
        <button onClick={handlePOst} className='bg-sky-300 text-white py-3 px-4 rounded-lg'>increament</button>
        <p>{newP.length}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newP?.map(p =><div className="">ddd</div> 
        )
          
       }

        </div>


    </main>
  )
}
