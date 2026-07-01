import { cnMerge, deepMerge } from "@quen-ui/helpers";
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
  height = "100%",
  classNames,
  styles
}: ISkeletonProps) => {
  if (!loading) {
    return <>{children}</>;
  }

  if (variant === "text" && lines > 1) {
    return (
      <Flex
        direction="column"
        gap="m"
        style={deepMerge(style ?? {}, styles?.root ?? {})}
        className={cnMerge(className, classNames?.root)}
        data-semantic="root">
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonLineStyled
            data-semantic="line"
            width={width || "100%"}
            key={i}
            variant="text"
            animation={animation}
            data-testid="skeleton-line"
            className={classNames?.line}
            style={styles?.line}
          />
        ))}
      </Flex>
    );
  }

  return (
    <SkeletonStyled
      data-semantic="root"
      data-testid="skeleton"
      width={width}
      height={height}
      variant={variant}
      animation={animation}
      style={deepMerge(style ?? {}, styles?.root ?? {})}
      className={cnMerge(className, classNames?.root)}
    />
  );
};

export default Skeleton;
