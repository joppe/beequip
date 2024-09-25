import { ComponentProps } from "react";
import classes from "./form-field.module.css";
import { cls } from "../../../helpers/cls";

type FormFieldProps = ComponentProps<"div">;

export function FormField({ children, className, ...props }: FormFieldProps) {
  return (
    <div className={cls(classes["form-field"], className)} {...props}>
      {children}
    </div>
  );
}
