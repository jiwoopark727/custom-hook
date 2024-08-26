import { useEffect, useState } from 'react';


const useEffectCount = () => {
  // 생명 주기를 체크할 때는 useEffect를 사용한다

  const [count, setCount] = useState(0);

  useEffect(()=>{
    // 이자리에 보통 api 호출 코드를 넣음
    console.log('UseEffect Component Created')
    return () => {
      console.log('UseEffectCont Component Destroyed')
    }
  }, [])

  useEffect(()=>{
    console.log('UseEffectCont Component Updated')
    console.log('count: ', count);
    return ()=> {
      console.log('UseEffectCont Component Updated Destroyed')
    }
  }, [count])
  return (
    <>
      <div>useEffectCount Component: {count}</div>
      <button onClick={()=>setCount((count)=> count + 1)}>증가</button>
    </>
  )
}
export default useEffectCount;