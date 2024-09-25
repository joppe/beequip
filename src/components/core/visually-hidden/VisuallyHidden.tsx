import { ReactNode } from "react";
import classes from "./visually-hidden.module.css";

type VisuallyHiddenProps = {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
};

export function VisuallyHidden({ tag, children }: VisuallyHiddenProps) {
  const Tag = tag;

  return <Tag className={classes["visually-hidden"]}>{children}</Tag>;
}
