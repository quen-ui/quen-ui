import React from "react";
import { TQuenSize } from "../types/size";

export interface ICardProps {
  /** Card title (displayed in the header) */
  title?: React.ReactNode;
  /** Class for the main container */
  className?: string;
  /** Class for header */
  classNameHeader?: string;
  /** Class for main content */
  classNameContent?: string;
  /** Class for action block */
  classNameAction?: string;
  /** Card size (affects paddings and fonts)  */
  size?: TQuenSize;
  /** Additional content in the header (to the right of the title) */
  extra?: React.ReactNode;
  /** Footer content (buttons/actions) */
  actionContent?: React.ReactNode;
  /** Image/cover at the top */
  cover?: React.ReactNode;
  /** Main card content */
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
}
