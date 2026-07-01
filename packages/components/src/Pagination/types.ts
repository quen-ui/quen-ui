import { CSSProperties, ReactNode } from "react";
import { TQuenSize } from "../types/size";

type TPaginationSemantic = "root" | "item";

export interface IPaginationControlProps {
  active?: boolean;
  disabled?: boolean;
  size?: TQuenSize;
  dotsView?: boolean;
}

export interface IPaginationProps {
  /** Controls alignment inside the container */
  align?: "start" | "center" | "end";
  /** Disables all pagination interaction */
  disabled?: boolean;
  /** Number of always-visible boundary pages. */
  boundaries?: number;
  /** Initial page */
  defaultValue?: number;
  /** Number of sibling pages around the current page. */
  siblings?: number;
  /** Controls size */
  size?: TQuenSize;
  /** Controlled page */
  value?: number;
  /** Show previous/next controls */
  withControls?: boolean;
  /** Show page numbers */
  withPages?: boolean;
  /** Custom icon for previous control */
  prevIcon?: ReactNode;
  /** Custom icon for next control */
  nextIcon?: ReactNode;
  /** Callback when page changes */
  onChange?: (value: number) => void;
  /** Called when clicking "next" */
  onNextPage?: () => void;
  /** Called when clicking "previous" */
  onPreviousPage?: () => void;
  /** Custom rendering function for pagination items */
  itemRender?: (
    page: number,
    type: "page" | "prev" | "next" | "dots"
  ) => ReactNode;
  /** Number of items per page */
  pageSize?: number;
  /** Total number of items */
  total: number;
  /** @deprecated - use styles
   * Inline styles for the root */
  style?: CSSProperties;
  /** @deprecated - use classNames
   * Custom CSS class for the root */
  className?: string;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TPaginationSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TPaginationSemantic, CSSProperties>>;
  [key: string]: any;
}
