import React from "react";

interface ButtonProps {
  children: React.ReactNode,
  click: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({ click, children }) => {
  return (
    <button onClick={click}>
      {children}
    </button>
  )
}
