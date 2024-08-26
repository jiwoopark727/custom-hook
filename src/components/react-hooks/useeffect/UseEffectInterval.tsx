import { useEffect } from 'react';

const UseEffectInterval = () => {
  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("interval");
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  }, [])
  return (
    <>
      <div>UseEffectInterval Component</div>
    </>
  )
}
export default UseEffectInterval;