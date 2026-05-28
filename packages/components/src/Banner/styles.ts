import styled, { css } from "styled-components";
import type { TBannerVariant } from "./types";
import { TQuenSize } from "../types/size";

interface IBannerStyledProps {
  variant: TBannerVariant;
  size: TQuenSize;
  visible: boolean;
}


const variantStyles = {
  info: css`
    background: ${({ theme }) => theme.components.Banner.info.background};
    border-color: ${({ theme }) => theme.components.Banner.info.borderColor};
    color: ${({ theme }) => theme.components.Banner.info.color};
    --banner-icon-color: ${({ theme }) =>
      theme.components.Banner.info.iconColor};
  `,
  success: css`
    background: ${({ theme }) => theme.components.Banner.success.background};
    border-color: ${({ theme }) => theme.components.Banner.success.borderColor};
    color: ${({ theme }) => theme.components.Banner.success.color};
    --banner-icon-color: ${({ theme }) =>
      theme.components.Banner.success.iconColor};
  `,
  warning: css`
    background: ${({ theme }) => theme.components.Banner.warning.background};
    border-color: ${({ theme }) => theme.components.Banner.warning.borderColor};
    color: ${({ theme }) => theme.components.Banner.warning.color};
    --banner-icon-color: ${({ theme }) =>
      theme.components.Banner.warning.iconColor};
  `,
  danger: css`
    background: ${({ theme }) => theme.components.Banner.danger.background};
    border-color: ${({ theme }) => theme.components.Banner.danger.borderColor};
    color: ${({ theme }) => theme.components.Banner.danger.color};
    --banner-icon-color: ${({ theme }) =>
      theme.components.Banner.danger.iconColor};
  `,
  neutral: css`
    background: ${({ theme }) => theme.components.Banner.neutral.background};
    border-color: ${({ theme }) => theme.components.Banner.neutral.borderColor};
    color: ${({ theme }) => theme.components.Banner.neutral.color};
    --banner-icon-color: ${({ theme }) =>
      theme.components.Banner.neutral.iconColor};
  `
};

const sizeStyles = {
  xs: css`
    padding: ${({ theme }) => theme.space.xs};
    gap: ${({ theme }) => theme.space.xs};
  `,
  s: css`
    padding: ${({ theme }) => theme.space.s};
    gap: ${({ theme }) => theme.space.s};
  `,
  m: css`
    padding: ${({ theme }) => theme.space.m};
    gap: ${({ theme }) => theme.space.m};
  `,
  l: css`
    padding: ${({ theme }) => theme.space.l};
    gap: ${({ theme }) => theme.space.l};
  `
};

export const BannerStyled = styled.div<IBannerStyledProps>`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: ${({ size }) =>
    size === "s" ? "10px" : size === "m" ? "14px" : "18px"};
  border-left: 3px solid var(--banner-icon);
  border-radius: ${({ theme }) => theme.control.radius};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0;
      transform: translateY(-8px);
      pointer-events: none;
      max-height: 0;
      padding: 0;
      margin: 0;
      overflow: hidden;
    `}

  ${({ variant }) => variantStyles[variant]};
  ${({ size }) => sizeStyles[size]};

  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
`;

export const BannerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--banner-icon);
  flex-shrink: 0;
  width: 1.2em;
  height: 1.2em;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const BannerAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  padding-left: 12px;

  button,
  a {
    white-space: nowrap;
  }
`;
