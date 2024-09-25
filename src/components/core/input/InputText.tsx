import { ComponentProps, ForwardedRef, forwardRef } from "react";
import classes from "./input-text.module.css";
import { cls } from "../../../helpers/cls";

type InputTextProps = Omit<ComponentProps<"input">, "type">;

export const InputText = forwardRef(
  (
    { className, ...props }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        type="text"
        className={cls(classes["input-text"], className)}
        ref={ref}
        {...props}
      />
    );
  },
);
