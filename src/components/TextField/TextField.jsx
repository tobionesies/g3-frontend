import React from "react";
import * as s from "./style";

const TextField = ({ value, onChange, type, placeholder,  }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <s.TextFieldDiv>
      <s.TextInput
        type={!type ? "text" : type}
        value={value}
        onChange={handleChange}
        placeholder={!placeholder ? "" : placeholder}
      />
    </s.TextFieldDiv>
  );
};

export default TextField;
