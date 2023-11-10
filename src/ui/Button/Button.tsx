import { ComponentChildren } from "preact";

type ButtonProps = {
  onClick?: () => void;
  children?: ComponentChildren;
};

export function Button({ onClick, children } : ButtonProps) {
  return <button onClick={onClick}>{children ?? 'button'}</button>
}
