import { IQuenUITheme } from "./theme/types";

const toCssVarName = (path: string[]) => `--quen-ui-${path.join("-")}`;

const extractVars = (obj: any, path: string[] = []): [string, string][] => {
  return Object.entries(obj).flatMap(([key, value]) => {
    const currentPath = [...path, key];
    if (typeof value === "object" && value !== null) {
      return extractVars(value, currentPath);
    }
    return [[toCssVarName(currentPath), value]] as [string, string][];
  });
};

export const getVariables = (theme: IQuenUITheme): [string, string][] => {
  const entries: [string, string][] = [];

  // Простые поля
  entries.push(["--quen-ui-font-family", theme.fontFamily]);
  entries.push(["--quen-ui-text-color", theme.textColor]);
  entries.push(["--quen-ui-color-body", theme.colorBody]);
  entries.push(["--quen-ui-primary-color", theme.primaryColor]);

  // Объекты
  entries.push(...extractVars(theme.colors, ["color"]));
  entries.push(...extractVars(theme.control, ["control"]));
  entries.push(...extractVars(theme.space, ["space"]));
  if (theme.fonts) {
    entries.push(...extractVars(theme.fonts, ["fonts"]));
  }

  return entries;
}

export const injectCssVarsFromTheme = (
  theme: IQuenUITheme,
  root: HTMLElement = document.documentElement
) => {

  for (const [key, value] of getVariables(theme)) {
    root.style.setProperty(key, value);
  }
};
