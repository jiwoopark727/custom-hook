function useReset(...resets: (()=>void)[]) {
  return ()=>{
    resets.forEach((reset) => reset());
  }
}

export default useReset;