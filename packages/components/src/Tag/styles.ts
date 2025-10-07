import styled, { css } from "styled-components";
import type { IQuenUITheme } from "@quen-ui/theme";
import { Text } from "../typography/Text";

const getBackground = (
  theme: IQuenUITheme,
  color?: keyof IQuenUITheme["colors"]
) => {
  if (color && color in theme.colors) {
    return theme.colors[color][4];
  }
  return theme.components.Tag.background;
};

export const TagStyled = styled(Text).withConfig({
  shouldForwardProp: (prop) => !["disabled", "color"].includes(prop)
})<{ disabled?: boolean; color?: keyof IQuenUITheme["colors"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.15rem;
  width: max-content;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.components.Tag.borderColor};
  background: ${({ theme, color }) => getBackground(theme, color)};

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.components.Tag.disabledBackground};
      color: ${({ theme }) => theme.components.Tag.disabledColor};
      * {
        color: ${({ theme }) => theme.components.Tag.disabledColor};
      }
    `}
`;

export const TagButtonClosable = styled.button.withConfig({
  shouldForwardProp: (prop) => !["disabled"].includes(prop)
})<{
  disabled?: boolean;
}>`
  cursor: pointer;
  padding: 2px;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled
        ? theme.components.Tag.disabledBackground
        : theme.components.Tag.disabledColor};
  background: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.gray[4] : theme.colors.gray[9]};
  }
`;
