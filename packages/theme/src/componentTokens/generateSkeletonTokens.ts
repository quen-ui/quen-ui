import { IQuenUITheme } from "../theme/types";

export interface ISkeletonTokens {
  /** Default background color of the skeleton */
  background: string;
}

export const generateSkeletonTokens = (theme: IQuenUITheme): ISkeletonTokens => ({
  background: theme.components.Skeleton?.background ?? theme.colors.grayViolet[5],
});
