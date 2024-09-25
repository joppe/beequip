import { ComponentProps } from "react";
import classes from "./support-text.module.css";
import { cls } from "../../../helpers/cls";

type SupportTextProps = ComponentProps<"p">;

export function SupportText({
  children,
  className,
  ...props
}: SupportTextProps) {
  return (
    <p className={cls(classes["support-text"], className)} {...props}>
      {children}
    </p>
  );
}
