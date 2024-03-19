import { useState } from 'react'
import './App.css'
import rey_Ervigio from "../public/reyes/rey_ervigio.png";
import sisebuto from "../public/reyes/rey_sisebuto.png";
import Incognito from "../public/reyes/rey_incognito.png";
import atanagildo from "../public/reyes/rey_atanagildo.png";
import ataulfo from "../public/reyes/rey_ataulfo.png";


import ComponentImagen from './component/ComponentImagen'
import ComponetButtons from './component/componetbotones/ComponetButtons';
import BtnComponent from './component/btncomponent/BtnComponent';
import MyComponentUseSatta from './component/btncomponent/MyComponentUseSatta';


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className='bg-[#f0b71ac5] rounded'>
        <span className='text-5xl'>Oscar danilo Cerda Rodriguez</span>
      </div>
      <div> 
        <ComponentImagen  imagen={rey_Ervigio} img_sisebuto={sisebuto} rey_incognito={Incognito} ataulfo={ataulfo}/>
        <ComponetButtons count={count} setCount={setCount} rey1={atanagildo} />
        <BtnComponent/>
        <MyComponentUseSatta/>
      </div>
      
    </>
  )
}

export default App
