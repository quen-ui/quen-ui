import React, { useState, useEffect, useMemo } from "react";
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
  ...props
}: IAvatarProps): React.ReactElement => {
  const [error, setError] = useState(!src);

  const initials = useMemo(() => {
    if (name) {
      return name.split(" ").map(n => n[0]).join("")
    }
    return null;
  }, [name])

  useEffect(() => {
    if (!src) {
      setError(true);
    } else {
      setError(false);
    }
  }, [src]);

  return (
    <AvatarWrapper className={className} style={style} size={size} {...props}>
      <AvatarStyled
        status={status}
        size={size}
        color={color || getInitialsColors(name, allowedInitialsColors)}>
        {error ? (
          children || initials || (
            <AvatarIcon className="quen-ui-avatar__icon" />
          )
        ) : (
          <img
            className="quen-ui__avatar__icon"
            src={src}
            alt={alt}
            onError={() => setError(true)}
            {...imageProps}
          />
        )}
      </AvatarStyled>
      {label && (
        <Flex direction="column" gap={4}>
          {name && <Title size="xs">{name}</Title>}
          {description && <Text size="xs">{description}</Text>}
        </Flex>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
