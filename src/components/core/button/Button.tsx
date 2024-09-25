import { ComponentProps } from "react";
import classes from "./button.module.css";
import { cls } from "../../../helpers/cls";

type ButtonProps = ComponentProps<"button">;

export function Button({
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button className={cls(classes.button, className)} type={type} {...props}>
      {children}
    </button>
  );
}
