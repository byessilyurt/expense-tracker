import React from "react";

function Input({ type, placeholder, value, onChange, style }) {
  console.log(style);
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
      />
    </>
  );
}

export default Input;
