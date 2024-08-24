import C from './C'

const B = () => {
  console.log("B rendering")
  return (
    <>
      <div>B Component</div>
      <C></C>
    </>
  )
}
export default B;