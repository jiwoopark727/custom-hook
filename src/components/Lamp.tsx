import b_on from "../assets/images/b_on.png"
import b_off from "../assets/images/b_off.png"
import { useState } from 'react'
import '../css/lamp.css'

const Lamp = () => {
  const [isLamp, setIsLamp] = useState(false);
  return (
    <>
      <img 
      src={isLamp ? b_on : b_off} 
      alt="전구이미지" 
      className='cursor-pointer'
      onClick={()=>setIsLamp((isLamp)=>!isLamp)}
      />
    </>
  )
}
export default Lamp;