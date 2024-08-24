import B from './B'

const A = () => {
  console.log("A rendering")
  return (
    <>
      <div>A Component</div>
      <B></B>
    </>
  )
}
export default A;