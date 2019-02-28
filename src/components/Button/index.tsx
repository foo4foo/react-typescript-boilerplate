import React, { ReactNode } from "react";

interface Props {
  onClick: () => void,
  children?: ReactNode,
  title?: string
}

const Button = ({ onClick, children, title }: Props) => (
  <button onClick={onClick}>
    {children || <p>{title}</p>}
  </button>
)

Button.defaultProps = {
  title: 'Click me'
}

export default Button
