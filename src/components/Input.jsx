import React from "react";

function Input({ type, placeholder, value, onChange, style }) {
  return (
    <>
      <label
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "14px",
          color: "#333",
        }}
      >
        {placeholder}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
