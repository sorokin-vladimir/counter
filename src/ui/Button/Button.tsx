import { ComponentChildren } from "preact";
import classes from './style.module.css';

type ButtonProps = {
  onClick?: () => void;
  children?: ComponentChildren;
  disabled?: boolean;
};

export function Button({ onClick, disabled, children } : ButtonProps) {
  return <button disabled={disabled} class={classes.button} onClick={onClick}>{children ?? 'button'}</button>
}
