import { useState } from 'react';
import useInput from './hooks/useInput';


const App = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeName] = useInput("");


  return (
    <>
      <pre>
      {
        JSON.stringify({email, password, name}, null, 2)
      }
      </pre>

      <input type="email" value={email} onChange={onChangeEmail}/>
      <input type="password" value={password} onChange={onChangePassword}/>
      <input type="text" value={name} onChange={onChangeName}/>
      <input type="date"/>
    </>
  )
}
export default App;