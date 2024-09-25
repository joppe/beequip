type ClassName = string | null | undefined;

export function cls(...classes: ClassName[]): string {
  return classes
    .filter((cls) => cls !== null && cls !== undefined && cls !== "")
    .join(" ");
}
