import React from "react";

function Input({ type, placeholder, value, onChange, style, name, onKeyDown }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        name={name}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default Input;
