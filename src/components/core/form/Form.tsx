import { ComponentProps } from "react";
import classes from "./form.module.css";
import { VisuallyHidden } from "../visually-hidden/VisuallyHidden";
import { cls } from "../../../helpers/cls";

type FormProps = ComponentProps<"form"> & {
  title: string;
};

export function Form({ children, className, title, ...props }: FormProps) {
  return (
    <form className={cls(classes.form, className)} {...props}>
      <fieldset className={classes.fieldset}>
        <VisuallyHidden tag="legend">{title}</VisuallyHidden>
        {children}
      </fieldset>
    </form>
  );
}
