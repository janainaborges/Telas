import React from "react";
import { ButtonProps } from "../../types/button.types";
import { StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  button,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      button={button}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
