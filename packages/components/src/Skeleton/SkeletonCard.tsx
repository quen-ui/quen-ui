import type { ISkeletonProps } from "./types";
import Skeleton from "./Skeleton";
import SkeletonTextBlock from "./SkeletonTextBlock";
import { Flex } from "../Flex";

const SkeletonCard = ({
  loading,
  children,
  classNames,
  styles,
  ...props
}: Partial<ISkeletonProps>) => {
  if (!loading) {
    return children;
  }
  return (
    <Flex
      direction="column"
      gap="m"
      data-semantic="root"
      className={classNames?.root}>
      <Skeleton
        classNames={{ root: classNames?.header }}
        styles={{ root: styles?.header }}
        data-semantic="header"
        width="100%"
        height={160}
        variant="rounded"
        {...props}
        loading={loading}
      />
      <SkeletonTextBlock
        data-semantic="text"
        lines={3}
        classNames={{ root: classNames?.text }}
        styles={{ root: styles?.text }}
        {...props}
        loading={loading}
      />
    </Flex>
  );
};

export default SkeletonCard;
