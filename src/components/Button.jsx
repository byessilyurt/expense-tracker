import React from "react";

function Button({ type, text, onClick, style, className }) {
  return (
    <>
      <button type={type} onClick={onClick} style={style} className={className}>
        {text}
      </button>
    </>
  );
}

export default Button;
