import { IQuenUITheme } from "../theme/types";

export interface IStepperTokens {
  /** Padding stepper container */
  padding: string;

  /**Step icon size */
  iconSize: string;
  /** Radius icons */
  iconRadius: string;

  /** Connector line thickness */
  connectorThickness: string;
  /** Minimum line width (horizontal mode) */
  connectorMinWidth: string;

  /** Backgrounds icons */
  iconBackground: {
    default: string;
    active: string;
    completed: string;
    error: string;
    hover: string;
  };

  /** Color of text/number inside the icon */
  iconColor: {
    default: string;
    active: string;
    completed: string;
    error: string;
  };

  /** Connector line colors */
  connectorColor: {
    default: string;
    active: string;
  };

  /** State disabled */
  disabledOpacity: string | number;
}

export const generateStepperTokens = (theme: IQuenUITheme): IStepperTokens => ({
  padding: theme.components.Stepper?.padding ?? "24px 0",
  iconSize: theme.components.Stepper?.iconSize ?? "32px",
  iconRadius: theme.components.Stepper?.iconRadius ?? "50%",
  connectorThickness: theme.components.Stepper?.connectorThickness ?? "1px",
  connectorMinWidth: theme.components.Stepper?.connectorMinWidth ?? "50px",
  iconBackground: {
    default:
      theme.components.Stepper?.iconBackgroundDefault ?? theme.colors.gray[5],
    active:
      theme.components.Stepper?.iconBackgroundActive ??
      theme.colors[theme.primaryColor][9],
    completed:
      theme.components.Stepper?.iconBackgroundCompleted ??
      theme.colors[theme.primaryColor][5],
    error: theme.components.Stepper?.iconBackgroundError ?? theme.colors.red[9],
    hover:
      theme.components.Stepper?.iconBackgroundHover ?? theme.colors[theme.primaryColor][7]
  },

  iconColor: {
    default:
      theme.components.Stepper?.iconColorDefault ??
      theme.colors.grayViolet[5],
    active: theme.components.Stepper?.iconColorActive ?? "white",
    completed: theme.components.Stepper?.iconColorCompleted ?? "white",
    error: theme.components.Stepper?.iconColorError ?? "white"
  },

  connectorColor: {
    default:
      theme.components.Stepper?.connectorColorDefault ?? theme.colors.gray[5],
    active:
      theme.components.Stepper?.connectorColorActive ??
      theme.colors[theme.primaryColor][9]
  },

  disabledOpacity: theme.components.Stepper?.disabledOpacity ?? 0.5,
});
