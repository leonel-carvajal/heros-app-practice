import {useState} from 'react';

const useForm = (initialState={}) => {
  const [formValues, seTformValues] = useState(initialState);
  const reset = ()=>{
    seTformValues(initialState)
  }
  const handleInputChange=({target})=>{
    seTformValues({
      ...formValues,
      [target.name]:target.value
    });
  }
  return[formValues,handleInputChange,reset]
}

export default useForm;
