import React from 'react'
import  { useState } from 'react'



function ComponentImagen({imagen,img_sisebuto,rey_incognito,ataulfo}) {
const [Imagine1,setImagine1]=useState(rey_incognito)

const CambiarImagen = () => {
  if (Imagine1 === rey_incognito) {
    setImagine1(ataulfo);
  } else {
    setImagine1(rey_incognito);
  }
}

  return (
    <>
    <div className='flex bg-[#99a8f9] rounded' > 
         <img src={imagen} alt="Ervigio" className='' />
         <img src={Imagine1} alt="Ervigio" className='' />
         <img src={img_sisebuto} alt="Ervigio" className='' />


    </div>
        <button className='border-[2px] border-[#020208] rounded p-2 py-2 bg-[#c02bae]' onClick={CambiarImagen}>Cambiar imagen</button>
    
    </>
  )
}

export default ComponentImagen
