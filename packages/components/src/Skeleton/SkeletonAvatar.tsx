import { useTheme } from "@quen-ui/theme";
import type { ISkeletonAvatarProps } from "./types";
import Skeleton from "./Skeleton";

const SkeletonAvatar = ({ size = "m", ...props }: ISkeletonAvatarProps) => {
  const theme = useTheme();

  return (
    <Skeleton
      width={theme.control.height[size]}
      height={theme.control.height[size]}
      variant="rounded"
      {...props}
    />
  );
};

export default SkeletonAvatar;
