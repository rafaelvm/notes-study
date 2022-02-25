import React from "react";

// type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ labelDescription, ...rest }) {
  return <button {...rest}>{labelDescription}</button>;
}

export default Button;
