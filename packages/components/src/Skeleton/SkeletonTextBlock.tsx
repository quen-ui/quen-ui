import type { ISkeletonProps } from "./types";
import Skeleton from "./Skeleton";

const SkeletonTextBlock = ({
  lines = 3,
  styles,
  classNames,
  ...rest
}: {
  lines?: number;
} & Partial<ISkeletonProps>) => {
  return (
    <Skeleton
      classNames={classNames}
      styles={styles}
      variant="text"
      lines={lines}
      {...rest}
    />
  );
};

export default SkeletonTextBlock;
