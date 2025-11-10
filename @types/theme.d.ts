import { IQuenUITheme } from "@quen-ui/theme";

declare module "styled-components" {
  export interface DefaultTheme extends IQuenUITheme {}
}
