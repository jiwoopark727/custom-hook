import { useEffect, useLayoutEffect, useState } from 'react';

const UseLayoutEffect = () => {
  const[ count, setCount ] = useState(0);
  // 의도적으로 컴포넌트 부하 상황 시뮬레이션을 위해
  const now = performance.now();
  while(performance.now() - now < 1000){}

  useLayoutEffect(()=>{
    if(count === 10) setCount(0);
    console.log('useLayoutefferfct')
  }, [count]);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={()=>setCount(10)}>클릭</button>
      <button onClick={()=>alert('클릭')}>클릭</button>
    </>
  )
}
export default UseLayoutEffect;