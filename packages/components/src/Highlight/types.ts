import type { JSX, CSSProperties, ReactNode, HTMLAttributes, ComponentType } from "react"
import { IQuenUITheme } from "@quen-ui/theme";

export interface IHighlightProps {
  /** Original text */
  children?: string;
  /** Request for highlighting */
  query?: string | string[] | RegExp | null;
  /** Case-sensitive */
  caseSensitive?: boolean;
  /** Escape special RegExp characters */
  escapeQuery?: boolean;
  /** Highlight only whole words */
  splitByWords?: boolean;
  /** Maximum number of highlighted fragments */
  maxChunks?: number;
  /** Tag for highlighting */
  highlightTag?: keyof JSX.IntrinsicElements;
  /** Additional class for the selected element */
  highlightClassName?: string;
  /** Inline styles for the selected element */
  highlightStyle?: CSSProperties;
  /** Color of highlighting */
  color?: keyof IQuenUITheme["colors"] | string;
  /** The ability to pass a custom component instead of a highlightTag */
  highlightComponent?: ComponentType<{
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
  }>;
  /** Additional HTML attributes for the root element */
  rootProps?: HTMLAttributes<HTMLSpanElement>;
  /** Highlight explicit ranges (start/end char indexes).
   * If provided, takes precedence over query.
   */
  ranges?: Array<{ start: number; end: number }>;
}

export type TMatchChunk =
  | { type: "text"; text: string }
  | { type: "match"; text: string; start: number; end: number };

export type TMatch = { start: number; end: number; text: string };
