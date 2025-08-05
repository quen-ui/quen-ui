import styled, { css, RuleSet } from "styled-components";
import { IQuenUITheme } from "@quen-ui/theme";
import { INotificationParams, TNotificationStatus } from "./types";

const getBackgroundStatus = (
  theme: IQuenUITheme,
  status: TNotificationStatus
) => {
  switch (status) {
    case "info":
      return theme.colors.violet["9"];
    case "warning":
      return theme.colors.orange["9"];
    case "error":
      return theme.colors.red["9"];
    case "success":
      return theme.colors.green["9"];
  }
};

const getPosition = (
  theme: IQuenUITheme,
  position: INotificationParams["position"]
): RuleSet => {
  switch (position) {
    case "top":
      return css`
        top: ${theme.space.m};
        left: 50%;
        transform: translateX(-50%);
      `;
    case "top-left":
      return css`
        top: ${theme.space.m};
        left: ${theme.space.m};
      `;
    case "top-right":
      return css`
        top: ${theme.space.m};
        right: ${theme.space.m};
      `;
    case "bottom":
      return css`
        bottom: ${theme.space.m};
        left: 50%;
        transform: translateX(-50%);
      `;
    case "bottom-left":
      return css`
        bottom: ${theme.space.m};
        left: ${theme.space.m};
      `;
    case "bottom-right":
      return css`
        bottom: ${theme.space.m};
        right: ${theme.space.m};
      `;
  }
  return css``;
};

export const NotificationsWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => !["position", "zIndex"].includes(props)
})<{
  zIndex?: number;
  position: INotificationParams["position"];
}>`
  width: calc(100% - ${({ theme }) => theme.space.m} * 2);
  position: fixed;
  z-index: ${({ zIndex = 2000 }) => zIndex};
  ${({ position, theme }) => getPosition(theme, position)};
  max-width: 384px;
`;

export const NotificationStyled = styled.div.withConfig({
  shouldForwardProp: (props) => !["status"].includes(props)
})<{
  status: INotificationParams["status"];
}>`
  width: 384px;
  position: relative;
  border-radius: ${({ theme }) => theme.control.radius};
  padding: ${({ theme }) => theme.space.m};
  background: ${({ theme }) => theme.colors.grayViolet["2"]};
  margin-bottom: ${({ theme }) => theme.space.m};

  .quen-ui__notification-icon {
    color: ${({ theme, status = "info" }) => getBackgroundStatus(theme, status)};
  }

  ${({ status, theme }) =>
    status &&
    css`
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: ${theme.space.xs};
        top: 0;
        bottom: 0;
        inset-inline-start: 0;
        background-color: ${getBackgroundStatus(theme, status)};
      }
    `}
`;
