import React, { useState } from 'react'
import atanagildo from "../../../public/reyes/rey_atanagildo.png";
import ervigio from "../../../public/reyes/rey_ervigio.png";

function MyComponentUseSatta() {
    const [img1,setImg1]=useState(atanagildo);
    const [colorIndex,setColorIndex]= useState('')
    const colors =['blue','yellow','pink','black','darkred','cyan','white','orange'];

    const handleImg=()=>{
        

        setImg1(img1 === atanagildo ? ervigio : atanagildo);

        const CurrentColor = Math.floor(Math.random()*colors.length);
        setColorIndex(CurrentColor);

      }
      
      const IndexColor = colors[colorIndex];

  return (
    
    <div className='flex ' style={{backgroundColor:IndexColor}}>
      
      <button className='border-[2px] rounded p-3' onClick={handleImg} > Cambiar imagen</button>

        <div className=''>

            <img src={img1}  alt="" />
        </div>
    </div>
  )
}

export default MyComponentUseSatta
