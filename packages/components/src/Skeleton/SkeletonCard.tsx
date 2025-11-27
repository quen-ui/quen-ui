import type { ISkeletonProps } from "./types";
import Skeleton from "./Skeleton";
import SkeletonTextBlock from "./SkeletonTextBlock";
import { Flex } from "../Flex";

const SkeletonCard = ({loading, children, ...props}: Partial<ISkeletonProps>) => {
  if (!loading) {
    return children;
  }
  return (
    <Flex direction="column" gap="m">
      <Skeleton width="100%" height={160} variant="rounded" {...props} loading={loading} />
      <SkeletonTextBlock lines={3} {...props} loading={loading} />
    </Flex>
  )
}

export default SkeletonCard;
