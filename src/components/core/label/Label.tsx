import { ComponentProps } from "react";
import classes from "./label.module.css";
import { cls } from "../../../helpers/cls";

type LabelProps = ComponentProps<"label">;

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={cls(classes.label, className)} {...props}>
      {children}
    </label>
  );
}
