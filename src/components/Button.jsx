import React from "react";

function Button({ type, text, onClick, style }) {
  return (
    <>
      <button type={type} onClick={onClick} style={style}>
        {text}
      </button>
    </>
  );
}

export default Button;
