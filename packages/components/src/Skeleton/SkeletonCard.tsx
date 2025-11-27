import type { ISkeletonProps } from "./types";
import Skeleton from "./Skeleton";
import SkeletonTextBlock from "./SkeletonTextBlock";
import { Flex } from "../Flex";

const SkeletonCard = (props: Partial<ISkeletonProps>) => {
  return (
    <Flex direction="column" gap="m">
      <Skeleton width="100%" height={160} variant="rounded" {...props} />
      <SkeletonTextBlock lines={3} />
    </Flex>
  )
}

export default SkeletonCard;
