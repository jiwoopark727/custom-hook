import { useState } from 'react';
import '../index.css'

const ColorBox = () => {
  const [color, setColor] = useState("white");
  return (
    <>
      <div className="item-middle">
        {/* <pre>{JSON.stringify(color, null, 2)}</pre> */}
        <div className="flex flex-col">
          <div style={{backgroundColor: color}} className='w-40 h-40 border border-slate-500'></div>
          <input type="text"  className="border border-slate-500 w-40 mt-2" onChange={(e)=>{setColor(e.target.value)}} />
        </div>
      </div>
    </>
  );
};
export default ColorBox;