import { useState } from "react";

const useInputState = (defaulValue = null) => {
  const [value, setValue] = useState(defaulValue);

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  // return [value, handleChange];
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return{
    value,
    onChange
  }
};

export default useInputState;
