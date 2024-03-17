import React, { useRef, useState } from 'react'

function BtnComponent() {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputPizarra = useRef(null);
  const [texto, setTexto] = useState(0);
  
  const handleSuma=()=>{

    const valor1 = inputRef1.current.value;
    const valor2 = inputRef2.current.value;

    const suma= parseInt(valor1) + parseInt(valor2) 
    setTexto(suma);
    inputPizarra.current.value = `${suma}`
    

  }

  return (
    <>
    <div className='flex  '>

          <button className='border-[2px] border-black py-3 px-3' onClick={handleSuma}>Suma</button>

          <input type="text" className='border-[2px] rounded border-[gray] w-[70px]' ref={inputRef1} />+
          <input type="text" className='border-[2px] rounded border-[gray] w-[70px]' ref={inputRef2} />=
          <textarea name="pizarra" ref={inputPizarra} className='flex  justify-center w-[130px]  border border-[green] rounded   resize-none' value={texto}></textarea>


          
    </div>
    <div className='flex justify-center bg-[#d7d3f8] rounded'>
      <form action="">
          <label htmlFor="">Name:</label>   <input type="text" className='border-[2px] rounded border-[gray] w-[70px]' />
          <label htmlFor="">Email</label>   <input type="email" className='border-[2px] rounded border-[gray] w-[70px]' />
          <label htmlFor=""> telf</label>   <input type="number" className='border-[2px] rounded border-[gray] w-[70px]' />
          <button className='border-[2px] border-black py-1 px-3 rounded'>Enviar</button>
      </form>
    </div>
    </>
  )
}

export default BtnComponent