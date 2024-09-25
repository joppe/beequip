import { ComponentProps } from "react";
import classes from "./aside.module.css";
import { cls } from "../../../helpers/cls";

type AsideProps = ComponentProps<"aside">;

export function Aside({ children, className, ...props }: AsideProps) {
  return (
    <aside className={cls(classes.aside, className)} {...props}>
      {children}
    </aside>
  );
}
