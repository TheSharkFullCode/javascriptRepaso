import React, { useRef, useState } from 'react'

function BtnComponent() {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputPizarra = useRef(null);
  const [texto, setTexto] = useState(0);
  // --------------------------------------

  const Data1 = useRef(null)
  const Data2 = useRef(null)
  const Datapizarra = useRef(null)
  const [printValue,setPrintValue]= useState(0);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const saveData1 = Data1.current.value;
    const saveData2 = Data2.current.value; 

    if (saveData1 === '' || saveData2 === '') {
        Datapizarra.current.value = 'Campos vacíos, introduce una contraseña válida';
    } else if (saveData1 === saveData2) {
        Datapizarra.current.value = 'Las contraseñas son correctas';
    } else {
        Datapizarra.current.value = 'Las contraseñas son incorrectas';
    }

    setPrintValue(Datapizarra.current);
}
  // ---------------------------------------------------


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
    <div className='flex justify-center bg-[#d7d3f8] rounded items-center h-[150px]'>
      <form action="" onSubmit={handleSubmit}>
        <div className='bg-[#27b25c] rounded flex gap-3' >

          <label htmlFor="">Password</label>   <input type="password" className='border-[2px] rounded border-[gray] w-[70px]' ref={Data1}/>
          <label htmlFor="">RepeatPass</label>   <input type="password" className='border-[2px] rounded border-[gray] w-[70px]' ref={Data2} />
          {/* <label htmlFor=""> telf</label>   <input type="number" className='border-[2px] rounded border-[gray] w-[70px]' />  */}

          <div>

            <textarea name="" id="" className='w-[134px] rounded resize-none  h-123px' ref={Datapizarra} ></textarea>
          </div>
          <button className='border-[2px] border-black py-1 px-3   rounded' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default BtnComponent