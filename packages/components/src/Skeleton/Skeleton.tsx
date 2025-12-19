import type { ISkeletonProps } from "./types";
import { SkeletonStyled, SkeletonLineStyled } from "./styles";
import { Flex } from "../Flex";

const Skeleton = ({
  width = "100%",
  animation,
  children,
  variant = "rect",
  style,
  className,
  lines = 1,
  loading = true,
  height = "100%"
}: ISkeletonProps) => {
  if (!loading) {
    return <>{children}</>;
  }

  if (variant === "text" && lines > 1) {
    return (
      <Flex direction="column" gap="m" style={style} className={className}>
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonLineStyled width={width || "100%"} key={i} variant="text" animation={animation} data-testid="skeleton-line" />
        ))}
      </Flex>
    );
  }

  return (
    <SkeletonStyled
      data-testid="skeleton"
      width={width}
      height={height}
      variant={variant}
      animation={animation}
      style={style}
      className={className}
    />
  );
};

export default Skeleton;
