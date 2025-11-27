import { cloneElement } from "react";
import type { TSkeletonListProps } from "./types";
import { Flex } from "../Flex";

const SkeletonList = ({
  gap = "m",
  rowGap,
  columnGap,
  direction = "column",
  count,
  align,
  justify,
  wrap,
  style,
  className,
  children,
  loading,
  skeleton,
}: TSkeletonListProps) => {
  if (!loading) {
    return <>{children}</>;
  }
  return (
    <Flex
      direction={direction}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      align={align}
      justify={justify}
      wrap={wrap}
      style={style}
      className={className}>
      {Array.from({ length: count }).map((_, i) => cloneElement(skeleton, { key: i }))}
    </Flex>
  );
};

export default SkeletonList;
