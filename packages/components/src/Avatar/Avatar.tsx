import React, { useState, useEffect } from "react";
import { IAvatarProps } from "./types";
import { AvatarWrapper, AvatarStyled } from "./styles";
import AvatarIcon from "./AvatarIcon.svg";
import { getInitialsColors } from "./helpers";
import { Flex } from "../Flex";
import { Header } from "../typography/Header";
import { Text } from "../typography/Text";

const Avatar = ({
  size = "m",
  className,
  style,
  children,
  src,
  alt,
  name = "QuenUIAvatar",
  isLabel = false,
  allowedInitialsColors,
  description,
  color,
  imageProps,
  status
}: IAvatarProps): React.ReactElement => {
  const [error, setError] = useState(!src);

  useEffect(() => {
    if (!src) {
      setError(true);
    } else {
      setError(false);
    }
  }, [src]);

  return (
    <AvatarWrapper className={className} style={style} size={size}>
      <AvatarStyled
        status={status}
        size={size}
        color={color || getInitialsColors(name, allowedInitialsColors)}>
        {error ? (
          children || (
            <img alt={alt} className="quen-ui-avatar__icon" src={AvatarIcon} />
          )
        ) : (
          <img
            src={src}
            alt={alt}
            onError={() => setError(true)}
            {...imageProps}
          />
        )}
      </AvatarStyled>
      {isLabel && (
        <Flex direction="column" gap={4}>
          {name && <Header size="xs">{name}</Header>}
          {description && <Text size="xs">{description}</Text>}
        </Flex>
      )}
    </AvatarWrapper>
  );
};

export default Avatar;
