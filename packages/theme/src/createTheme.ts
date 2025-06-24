import { deepMerge } from "@quen-ui/helpers";
import type { TDeepPartial } from "@quen-ui/helpers";
import type { IQuenUITheme } from "./theme/types";
import { QuenUILightTheme } from "./theme/lightTheme";

export const createTheme = (
  newTheme: TDeepPartial<IQuenUITheme>,
  defaultTheme: IQuenUITheme = QuenUILightTheme
) => {
  return deepMerge(defaultTheme, newTheme);
};
