import { IQuenUITheme } from "../theme/types";

export interface IDividerTokens {
  /** The border radius applied to the edges of the divider */
  radius: string;
  /**  Background color used when the divider is in a disabled state */
  disabledBackground: string;
  /** Background color for dividers indicating an error or danger state */
  dangerBackground: string;
  /**  Background color for dividers indicating success or confirmation */
  successBackground: string;
  /**  Background color for dividers representing warnings or alerts */
  warningBackground: string;
  /** Default background color for the divider in its primary state */
  primaryBackground: string;
}

export const generateDividerTokens = (theme: IQuenUITheme): IDividerTokens => ({
  radius:
    theme.components.Divider?.radius ?? theme.control.radius,
  disabledBackground: theme.components.Divider?.disabledBackground ?? theme.commonColorTokens.disabledBackground,
  dangerBackground: theme.components.Divider?.dangerBackground ?? theme.commonColorTokens.dangerBackground,
  successBackground: theme.components.Divider?.successBackground ?? theme.commonColorTokens.successBackground,
  warningBackground: theme.components.Divider?.warningBackground ?? theme.commonColorTokens.warningBackground,
  primaryBackground: theme.components.Divider?.primaryBackground ?? theme.commonColorTokens.primaryBackground
});
