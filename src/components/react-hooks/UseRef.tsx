import { useRef, useState } from 'react';

const UseRef = () => {
  console.log("UseRect rendering")
  const count = useRef(0);
  const [numberArr, setNumberArr] = useState<number[]>([]);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h1>UseRef: {count.current}</h1>
      <h1>UseState: {count2}</h1>
      <button onClick={()=>{
        count.current += 1;
        // setNumberArr((numberArr)=>[...numberArr, count.current]);
      }}>UseRef 증가</button>
      <button onClick={()=>{
        setCount2((count2)=>count2+1)
      }}>UseState 증가</button>
    </>
  )
}
export default UseRef;