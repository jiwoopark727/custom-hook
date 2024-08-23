import { useState } from 'react';

type UseCheckboxReturn = [boolean, ()=>void, ()=>void]
function useCheckbox(initialValue: boolean): UseCheckboxReturn{
  const [checked, setChecked] = useState(initialValue);

  const handleChange = () => {
    setChecked((checked) => !checked);
  }
  const reset = () => {
    setChecked(false);
  }
  return [ checked, handleChange, reset]
}
export default useCheckbox;