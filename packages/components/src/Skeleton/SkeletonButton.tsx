import { useTheme } from "@quen-ui/theme";
import type { ISkeletonButtonProps } from "./types";
import Skeleton from "./Skeleton";

const SkeletonButton = ({
  width = "100%",
  size = "m",
  ...props
}: ISkeletonButtonProps) => {
  const theme = useTheme();

  return (
    <Skeleton
      width={width}
      height={theme.control.height[size]}
      variant="rounded"
      {...props}
    />
  );
};

export default SkeletonButton;
