import styled, { DefaultTheme } from "styled-components";
import { IFlexProps } from "./types";

const getGap = (theme: DefaultTheme, gap: IFlexProps["gap"]): string | undefined => {
  if (typeof gap === "number") {
    return `${gap}px`;
  } else if (gap) {
    return theme.space[gap];
  }
  return undefined;
}

export const FlexWrapper = styled.div<Omit<IFlexProps, "children">>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ gap, theme }) => getGap(theme, gap)};
  align-items: ${({ align }) => align};
  column-gap: ${({ columnGap, theme }) => getGap(theme, columnGap)};
  row-gap: ${({ rowGap, theme }) => getGap(theme, rowGap)};
  justify-content: ${({ justify }) => justify};
`;
