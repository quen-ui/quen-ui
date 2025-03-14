import styled from "styled-components";
import { Control, TControlView } from "../typography/Control";
import { IButtonProps, TButtonSize, TButtonView } from "./types";
import { ITheme } from "@quen-ui/theme";

interface IButtonStyledProps extends IButtonProps {
  viewControl?: TControlView;
}

const getHeight = (size?: TButtonSize): number => {
  switch (size) {
    case "l":
      return 3; //48px
    case "s":
      return 2; //32px
    case "xs":
      return 1.5; // 24px
    case "m":
    default:
      return 2.5; //40px
  }
};

const getBackground = (theme: ITheme, view?: TButtonView): string => {
  switch (view) {
    case "primary":
    default:
      return theme.colors.component.primary.default.violet;
  }
};

export const ButtonStyled = styled(Control).attrs((props) => ({
  ...props,
  view: props.viewControl,
}))<IButtonStyledProps>`
  border: none;
  background: none;
  outline: none;
  height: ${({ size }) => getHeight(size)}rem;
  cursor: pointer;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.25rem;
  background: ${({ theme, view }) => getBackground(theme, view)};
  
  &:disabled {
    background: ${({ theme }) => theme.colors.component.primary.disabled.violet};
  }
`;
