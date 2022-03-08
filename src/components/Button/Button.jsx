import React from "react";
import { ButtonContainer } from "./styles.jsx";

// type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ labelDescription, ...rest }) {
  return <ButtonContainer {...rest}>{labelDescription}</ButtonContainer>;
}

export default Button;
