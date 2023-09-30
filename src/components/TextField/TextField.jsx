import React from 'react'
import * as s from './style'


const TextField = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <s.TextFieldDiv>
        <s.TextInput type="text" value={value} onChange={handleChange}/>
    </s.TextFieldDiv>
     
  )
}

export default TextField
