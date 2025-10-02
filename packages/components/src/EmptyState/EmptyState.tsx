import { useMemo } from "react";
import type { IEmptyStateProps } from "./types";
import { Flex } from "../Flex";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import BoxImg from "../assets/box.svg";

const EmptyState = ({
  image,
  imageStyle,
  className,
  style,
  title = "No data",
  description = "There is no data",
  children
}: IEmptyStateProps) => {
  const Image = useMemo(() => {
    if (image) {
      if (typeof image === "string") {
        return (
          <img
            src={image}
            alt={title}
            style={imageStyle || { width: "64px", height: "64px" }}
          />
        );
      }
      return image;
    }
    return <BoxImg width={64} height={64} style={imageStyle} />;
  }, [image]);

  return (
    <Flex
      direction="column"
      className={className}
      style={style}
      align="center"
      justify="center"
      gap="xs">
      {Image}
      <Title size="s">{title}</Title>
      <Text>{description}</Text>
      {children}
    </Flex>
  );
};

export default EmptyState;
