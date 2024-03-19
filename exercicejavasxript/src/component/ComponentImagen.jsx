import React from 'react'

function ComponentImagen({imagen,img_sisebuto,rey_incognito}) {
  return (
    <div className='flex bg-[#99a8f9] rounded' > 
         <img src={imagen} alt="Ervigio" className='' />
         <img src={rey_incognito} alt="Ervigio" className='' />
         <img src={img_sisebuto} alt="Ervigio" className='' />
    </div>
    
  )
}

export default ComponentImagen
