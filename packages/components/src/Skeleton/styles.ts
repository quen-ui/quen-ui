import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
import type { ISkeletonProps } from "./types";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

export const SkeletonStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => !["animation", "variant", "width", "height"].includes(prop)
})<
  Required<Pick<ISkeletonProps, "animation" | "variant">> & ISkeletonProps
>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.components.Skeleton.background};
  border-radius: 4px;
  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === "number" ? `${width}px` : width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${typeof height === "number" ? `${height}px` : height};
    `}

  ${({ variant }) =>
    variant === "circle" &&
    css`
      border-radius: 50%;
    `};

  ${({ variant }) =>
    variant === "text" &&
    css`
      height: 1em;
      border-radius: 4px;
    `};

  ${({ variant }) =>
    variant === "rounded" &&
    css`
      border-radius: 12px;
    `};
  ${({ animation }) =>
    animation === "pulse" &&
    css`
      animation: ${pulse} 1.5s ease-in-out infinite;
    `};

  ${({ animation }) =>
    animation === "shimmer" &&
    css`
      background: ${({ theme }) =>css`linear-gradient(
        90deg,
       ${theme.components.Skeleton.background} 0%,
       ${rgba(theme.components.Skeleton.background, 0.3)} 50%,
      ${theme.components.Skeleton.background} 100%
      )`};
      background-size: 200% 100%;
      animation: ${shimmer} 1.6s linear infinite;
    `}
`;

export const SkeletonLineStyled = styled(SkeletonStyled)`
  width: 100%;
  height: 1em;
`;
