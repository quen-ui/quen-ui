import styled from "styled-components";
import { rgba } from "polished";
import { Button } from "../Button";
import { IImageProps } from "./types";

export const ImageContainer = styled.div<{
  width: IImageProps["width"];
  height: IImageProps["height"];
  isPreview: IImageProps["isPreview"];
}>`
  position: relative;
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width || "auto"};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height || "auto"};
  display: inline-block;
  cursor: ${({ isPreview }) => (isPreview ? "pointer" : "default")};
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ImagePlaceholderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const ImagePreviewOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray["1"]};
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

export const ImageFullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => rgba(theme.colors.gray["2"], 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ImageFullscreenStyled = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

export const CloseButtonStyled = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1001;
`;

export const ImageLoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
`;
