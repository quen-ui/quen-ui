import { type ReactNode } from "react";
import type { ISkeletonLayoutProps } from "./types";
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonTextBlock from "./SkeletonTextBlock";
import SkeletonButton from "./SkeletonButton";
import type { TQuenSize } from "../types/size";
import { Flex } from "../Flex";

const SkeletonLayout = ({
  loading,
  children,
  schema,
  direction,
  gap = "m",
  style,
  className,
  animation
}: ISkeletonLayoutProps) => {
  if (!loading) {
    return <>{children}</>;
  }

  if (!schema) {
    return null;
  }

  const layout: ReactNode[] = [];

  if (schema.avatar) {
    const size = typeof schema.avatar === "object" ? schema.avatar.size : "m";
    layout.push(
      <SkeletonAvatar key="avatar" size={size} animation={animation} />
    );
  }

  if (schema.title) {
    const lines = typeof schema.title === "number" ? schema.title : 1;
    layout.push(
      <SkeletonTextBlock key="title" lines={lines} animation={animation} />
    );
  }

  if (schema.text) {
    layout.push(
      <SkeletonTextBlock key="text" lines={schema.text} animation={animation} />
    );
  }

  if (schema.button) {
    const option =
      typeof schema.button === "object"
        ? schema.button
        : { width: "100%", size: "m" as TQuenSize };

    layout.push(
      <SkeletonButton
        key="button"
        width={option.width}
        size={option.size}
        animation={animation}
      />
    );
  }

  if (schema.custom) {
    layout.push(schema.custom);
  }

  return (
    <Flex direction={direction} gap={gap} style={style} className={className}>
      {layout}
    </Flex>
  );
};

export default SkeletonLayout;
