import ColorBox from './components/ColorBox'
import Lamp from './components/Lamp';
import Auth from './auth/Auth';
import Woostagram from './example/Woostagram';
import UseRef from './components/react-hooks/UseRef';
import A from './sample/A'
import { useState } from 'react';
import Travel from './components/Travel';

const App = () => {
  const [text, setText] = useState("");
  return (
    <>
      {/* <Lamp></Lamp>
      <ColorBox></ColorBox>
      <Auth></Auth> */}
      <Woostagram></Woostagram>
      {/* <UseRef></UseRef>
      <Travel></Travel> */}

    </>
  )
}
export default App;