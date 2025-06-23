import React, { useEffect, useState } from "react";
import { IImageProps } from "./types";
import IconClose from "../assets/icon-close.svg?react";
import {
  ImageContainer,
  ImageFullscreenOverlay,
  ImageFullscreenStyled,
  ImagePreviewOverlay,
  ImageStyled,
  ImagePlaceholderWrapper,
  CloseButtonStyled,
  ImageLoaderWrapper
} from "./styles";
import { Text } from "../typography/Text";
import { Loader } from "../Loader";

const Image = ({
  src,
  fallback,
  onError,
  alt,
  height,
  width,
  placeholder,
  isPreview = false
}: IImageProps): React.ReactNode => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(!src);

  useEffect(() => setError(!src), [src]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setError(true);
    if (onError) {
      onError(e);
    }
  };

  const handleClick = () => {
    if (isPreview && !error && src) {
      setIsFullScreen(true);
      setIsLoading(true);
    }
  };

  const handleCloseFullscreen = () => {
    setIsFullScreen(false);
  };

  const imageSrc = error && fallback ? fallback : src;
  const showPlaceholder = (!imageSrc || error) && placeholder;

  return (
    <>
      <ImageContainer
        height={height}
        isPreview={isPreview && !error && !!src}
        width={width}
        onClick={handleClick}>
        {showPlaceholder ? (
          <ImagePlaceholderWrapper>{placeholder}</ImagePlaceholderWrapper>
        ) : (
          <>
            <ImageStyled
              src={imageSrc}
              alt={alt}
              onError={handleImageError}
              onLoad={() => setIsLoading(false)}
            />
            {isLoading && (
              <ImageLoaderWrapper>
                <Loader view="oval" />
              </ImageLoaderWrapper>
            )}
            {isPreview && !error && src && (
              <ImagePreviewOverlay>
                <Text size="m" color="unset">
                  Preview
                </Text>
              </ImagePreviewOverlay>
            )}
          </>
        )}
      </ImageContainer>
      {isFullScreen && (
        <ImageFullscreenOverlay onClick={handleCloseFullscreen}>
          <CloseButtonStyled view="icon" onClick={handleCloseFullscreen}>
            <IconClose />
          </CloseButtonStyled>
          <ImageFullscreenStyled
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <ImageLoaderWrapper>
              <Loader view="oval" />
            </ImageLoaderWrapper>
          )}
        </ImageFullscreenOverlay>
      )}
    </>
  );
};

export default Image;
