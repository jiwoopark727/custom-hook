import D from './D'
const C = () => {
  console.log("C rendering")
  return (
    <>
      <div>C Component</div>
      <D></D>
    </>
  )
}
export default C;