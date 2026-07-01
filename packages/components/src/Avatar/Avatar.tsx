import React, { useState, useEffect, useMemo } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
import { IAvatarProps } from "./types";
import { AvatarWrapper, AvatarStyled } from "./styles";
import AvatarIcon from "./AvatarIcon.svg";
import { getInitialsColors } from "./helpers";
import { Flex } from "../Flex";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";

const Avatar = ({
  size = "m",
  className,
  style,
  children,
  src,
  alt,
  name,
  label = false,
  allowedInitialsColors,
  description,
  color,
  imageProps,
  status,
  classNames,
  styles,
  ...props
}: IAvatarProps): React.ReactElement => {
  const [error, setError] = useState(!src);

  const initials = useMemo(() => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("");
    }
    return null;
  }, [name]);

  useEffect(() => {
    if (!src) {
      setError(true);
    } else {
      setError(false);
    }
  }, [src]);

  return (
    <AvatarWrapper
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      size={size}
      data-semantic="root"
      {...props}>
      <AvatarStyled
        data-semantic="avatar"
        className={classNames?.avatar}
        style={styles?.avatar}
        status={status}
        size={size}
        color={color || getInitialsColors(name, allowedInitialsColors)}>
        {error ? (
          children ||
          initials || (
            <AvatarIcon
              className={cnMerge("quen-ui-avatar__icon", classNames?.icon)}
              style={styles?.icon}
              data-semantic="icon"
            />
          )
        ) : (
          <img
            data-semantic="icon"
            className={cnMerge("quen-ui__avatar__icon", classNames?.icon)}
            style={styles?.icon}
            src={src}
            alt={alt}
            onError={() => setError(true)}
            {...imageProps}
          />
        )}
      </AvatarStyled>
      {label && (
        <Flex
          direction="column"
          gap={4}
          data-semantic="label"
          className={classNames?.label}
          style={styles?.label}>
          {name && (
            <Title
              size="xs"
              data-semantic="name"
              className={classNames?.name}
              style={styles?.name}>
              {name}
            </Title>
          )}
          {description && (
            <Text
              size="xs"
              data-semantic="description"
              className={classNames?.description}
              style={styles?.description}>
              {description}
            </Text>
          )}
        </Flex>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
