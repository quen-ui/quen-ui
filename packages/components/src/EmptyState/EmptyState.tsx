import { useMemo } from "react";
import type { IEmptyStateProps } from "./types";
import { Flex } from "../Flex";
import { Title } from "../typography/Title";
import { Text } from "../typography/Text";
import BoxImg from "../assets/box.svg";
import { cnMerge, deepMerge } from "@quen-ui/helpers";

const EmptyState = ({
  image,
  imageStyle,
  className,
  style,
  title = "No data",
  description = "There is no data",
  children,
  classNames,
  styles
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
      data-semantic="root"
      direction="column"
      className={cnMerge(className, classNames?.root)}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      align="center"
      justify="center"
      gap="xs">
      <span
        data-semantic="image"
        className={classNames?.image}
        style={styles?.image}>
        {Image}
      </span>
      <Title
        size="s"
        data-semantic="title"
        className={classNames?.title}
        style={styles?.title}>
        {title}
      </Title>
      <Text
        data-semantic="description"
        className={classNames?.description}
        style={styles?.description}>
        {description}
      </Text>
      {children}
    </Flex>
  );
};

export default EmptyState;
