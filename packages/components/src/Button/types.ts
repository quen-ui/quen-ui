export const BUTTON_SIZE = ["l", "m", "s", "xs"] as const;
export const BUTTON_VIEW = ["primary", "secondary", "ghost", "link", "icon"] as const;

export type TButtonSize = typeof BUTTON_SIZE[number];
export type TButtonView = typeof BUTTON_VIEW[number];

export interface IButtonProps {
  size?: TButtonSize;
  view?: TButtonView;
  isDisabled?: boolean;
  isLoading?: boolean;
}
