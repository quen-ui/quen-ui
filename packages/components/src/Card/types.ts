import { type CSSProperties, ReactNode } from "react";
import { TQuenSize } from "../types/size";

type TCardSemantic =
  | "root"
  | "cover"
  | "header"
  | "leftContent"
  | "title"
  | "extra"
  | "content"
  | "action";

export interface ICardProps {
  /** Card title (displayed in the header) */
  title?: ReactNode;
  /** @deprecated - use classNames
   *
   * Class for the main container */
  className?: string;
  /** @deprecated - use  classNames
   *
   * Class for header */
  classNameHeader?: string;
  /** @deprecated - Use classNames
   *
   * Class for main content */
  classNameContent?: string;
  /** @deprecated - use classNames
   *
   * Class for action block */
  classNameAction?: string;
  /** Card size (affects paddings and fonts)  */
  size?: TQuenSize;
  /** Additional content in the header (to the right of the title) */
  extra?: ReactNode;
  /** Footer content (buttons/actions) */
  actionContent?: ReactNode;
  /** Image/cover at the top */
  cover?: ReactNode;
  /** Main card content */
  children?: ReactNode;
  leftContent?: ReactNode;
  /** @deprecated - use styles */
  style?: CSSProperties;
  onClickExtra?: () => void;
  /** Show shadow */
  shadow?: boolean;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TCardSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TCardSemantic, CSSProperties>>;
  [key: string]: any;
}
