import { ComponentProps } from "react";
import classes from "./main.module.css";
import { cls } from "../../../helpers/cls";

type MainProps = ComponentProps<"main">;

export function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cls(classes.main, className)} {...props}>
      {children}
    </main>
  );
}
