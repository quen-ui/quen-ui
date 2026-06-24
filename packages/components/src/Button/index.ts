import { default as ButtonComponent } from "./Button";
import { default as ButtonGroupComponent } from "./ButtonGroup";
export type { IButtonProps, TButtonView, IButtonGroupProps } from "./types";

type TButton = typeof ButtonComponent & {
  Group: typeof ButtonGroupComponent;
};

const Button = ButtonComponent as TButton;
Button.Group = ButtonGroupComponent;

export { Button };
