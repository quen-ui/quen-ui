import { deepMerge } from "@quen-ui/helpers";
import type { TDeepPartial } from "@quen-ui/helpers";
import type { IQuenUITheme } from "./theme/types";
import { QuenUILightTheme } from "./theme/lightTheme";
import { generateComponentTokens } from "./componentTokens";
import { generateCommonColorTokens } from "./colors/generateCommonColorTokens";

export const createTheme = (
  newTheme: TDeepPartial<IQuenUITheme>,
  defaultTheme: IQuenUITheme = QuenUILightTheme
): IQuenUITheme => {
  const mergedTheme = deepMerge(defaultTheme, newTheme);
  const commonColorTokens = generateCommonColorTokens(mergedTheme);
  const componentTokens = generateComponentTokens({
    ...mergedTheme,
    commonColorTokens
  });

  return {
    ...mergedTheme,
    commonColorTokens: commonColorTokens,
    components: componentTokens
  };
};
