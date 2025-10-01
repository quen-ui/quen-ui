declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
    className?: string;
  }
  >;

  export default ReactComponent;
}

declare module "*.png";

declare module "*.css";

declare module "*.mdx";

declare module "*.css";

import { IQuenUITheme } from "@quen-ui/theme";

declare module 'styled-components' {
  export interface DefaultTheme extends IQuenUITheme {}
}
