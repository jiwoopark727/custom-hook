import { useState } from 'react';
import UseEffectCount from './useEffectCount';
import UseEffectInterval from './UseEffectInterval';

const useEffect = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
          <button onClick={()=>setDisplay((display)=> !display)}>
        토글{" "}
      </button>
      <div>useEffect Component</div>
      <UseEffectCount></UseEffectCount>
      {display && <UseEffectInterval/>}
      
    </>
  )
}
export default useEffect;