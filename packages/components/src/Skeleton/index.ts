import SkeletonComponent from "./Skeleton";
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonButton from "./SkeletonButton";
import SkeletonCard from "./SkeletonCard";
import SkeletonLayout from "./SkeletonLayout";
import SkeletonList from "./SkeletonList";
import SkeletonTextBlock from "./SkeletonTextBlock";

type TSkeleton = typeof SkeletonComponent & {
  Avatar: typeof SkeletonAvatar;
  Button: typeof SkeletonButton;
  Card: typeof SkeletonCard;
  List: typeof SkeletonList;
  Layout: typeof SkeletonLayout;
  TextBlock: typeof SkeletonTextBlock;
};

const Skeleton = SkeletonComponent as TSkeleton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Button = SkeletonButton;
Skeleton.Card = SkeletonCard;
Skeleton.List = SkeletonList;
Skeleton.TextBlock = SkeletonTextBlock;
Skeleton.Layout = SkeletonLayout;

export { Skeleton };
export type {
  ISkeletonProps,
  ISkeletonAvatarProps,
  ISkeletonLayoutProps,
  ISkeletonLayoutSchema,
  TSkeletonListProps,
  ISkeletonButtonProps
} from "./types";
