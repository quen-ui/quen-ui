import type { ISkeletonProps } from "./types";
import Skeleton from "./Skeleton";

const SkeletonTextBlock= ({ lines = 3, ...rest }: {
  lines?: number;
} & Partial<ISkeletonProps>) => {
  return <Skeleton variant="text" lines={lines} {...rest} />;
};

export default SkeletonTextBlock;
