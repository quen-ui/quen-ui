import type { TQuenSize } from "../types/size";
import React from "react";

export interface IAccordionDefaultItem {
  key: string;
  className?: string;
  /** Icon displayed before label */
  leftContent?: React.ReactNode;
  /** Icon displayed after label */
  rightContent?: React.ReactNode;
  /** Title of the panel */
  label: React.ReactNode;
  /** Body area content */
  children: React.ReactNode;
  /** If false, panel will not show arrow icon. If false, collapsible can't be set as icon */
  showArrow?: boolean;
  style?: React.CSSProperties;
}

export interface IAccordionProps {
  /** Set the size of accordion */
  size?: TQuenSize;
  /** Callback function executed when active panel is changed */
  onChange?: (key: string) => void;
  /** Key of the active panel */
  activeKeys?: string[] | number[];
  /** Key of the initial active panel */
  defaultActiveKeys?: string[] | number[];
  /** Accordion items content */
  items?: []
  /** Toggles rendering of the border around the accordion block */
  bordered?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}
