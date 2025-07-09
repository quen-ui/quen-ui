import { IQuenUITheme } from "@quen-ui/theme";

declare module "styled-components" {
  export interface DefaultTheme extends IQuenUITheme {}
}

declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;

  export default ReactComponent;
}

declare module "*.png";

declare module "*.css";

