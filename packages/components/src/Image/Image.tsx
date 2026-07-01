import React, { useEffect, useState } from "react";
import { IImageProps } from "./types";
import IconClose from "../assets/icon-close.svg";
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
import { cnMerge, deepMerge } from "@quen-ui/helpers";

const Image = ({
  src,
  fallback,
  onError,
  alt,
  height,
  width,
  placeholder,
  preview = false,
  classNames,
  className,
  styles,
  style,
  ...props
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
    if (preview && !error && src) {
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
        className={cnMerge(classNames?.root, className)}
        style={deepMerge(styles?.root ?? {}, style ?? {})}
        data-semantic="root"
        height={height}
        preview={preview && !error && !!src}
        width={width}
        onClick={handleClick}
        {...props}>
        {showPlaceholder ? (
          <ImagePlaceholderWrapper
            data-semantic="placeholder"
            className={classNames?.placeholder}
            style={styles?.placeholder}>
            {placeholder}
          </ImagePlaceholderWrapper>
        ) : (
          <>
            <ImageStyled
              className={classNames?.image}
              style={styles?.image}
              data-semantic="image"
              src={imageSrc}
              alt={alt}
              onError={handleImageError}
              onLoad={() => setIsLoading(false)}
            />
            {isLoading && (
              <ImageLoaderWrapper
                className={classNames?.loader}
                style={styles?.loader}
                data-semantic="loader">
                <Loader view="oval" />
              </ImageLoaderWrapper>
            )}
            {preview && !error && src && (
              <ImagePreviewOverlay
                data-semantic="preview"
                className={classNames?.preview}
                style={styles?.preview}>
                <Text size="m" color="unset">
                  Preview
                </Text>
              </ImagePreviewOverlay>
            )}
          </>
        )}
      </ImageContainer>
      {isFullScreen && (
        <ImageFullscreenOverlay
          onClick={handleCloseFullscreen}
          data-semantic="fullscreenOverlay"
          className={classNames?.fullscreenOverlay}
          style={styles?.fullscreenOverlay}>
          <CloseButtonStyled
            view="icon"
            onClick={handleCloseFullscreen}
            data-semantic="close"
            classNames={{ root: classNames?.close }}
            styles={{ root: styles?.close }}>
            <IconClose />
          </CloseButtonStyled>
          <ImageFullscreenStyled
            className={classNames?.fullscreen}
            style={styles?.fullscreen}
            data-semantic="fullscreen"
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <ImageLoaderWrapper
              className={classNames?.loader}
              style={styles?.loader}
              data-semantic="loader">
              <Loader view="oval" />
            </ImageLoaderWrapper>
          )}
        </ImageFullscreenOverlay>
      )}
    </>
  );
};

export default Image;
