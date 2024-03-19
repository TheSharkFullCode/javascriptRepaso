import React, { useState } from 'react'

function ComponetButtons({count,setCount}) {
  const [clave,setClave]=useState(0)




  return (
    <div className='flex '> 

        <button type="button" onClick={()=>{setCount(prev=>prev +=1)}} className='border-[2px] border-[#020208] rounded p-2 py-2 bg-[cyan]'>  suma1  </button>
        <button type="button" onClick={()=>{setCount(prev=>prev -=1)}} className='border-[2px] border-[#010105] rounded p-2 py-2 bg-[teal]'>  resta1  </button>

        <h1 className='text-5xl border-[2px] border-black' > {count} </h1>

    </div>
  )
}

export default ComponetButtons