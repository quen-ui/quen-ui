import { cloneElement } from "react";
import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  classNames,
  styles
}: TSkeletonListProps) => {
  if (!loading) {
    return <>{children}</>;
  }
  return (
    <Flex
      data-semantic="root"
      direction={direction}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      align={align}
      justify={justify}
      wrap={wrap}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      className={cnMerge(className, classNames?.root)}>
      {Array.from({ length: count }).map((_, i) =>
        cloneElement(skeleton, { key: i })
      )}
    </Flex>
  );
};

export default SkeletonList;
