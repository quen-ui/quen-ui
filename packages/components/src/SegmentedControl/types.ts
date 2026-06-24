import { type CSSProperties, type ReactNode } from "react";
import type { TQuenSize } from "../types/size";

export interface ISegmentOption {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  /** Дополнительный data-атрибут для тестов */
  'data-testid'?: string;
}

export interface ISegmentedControlProps {
  options: ISegmentOption[];
  value: string;
  onChange: (value: string) => void;
  size?: TQuenSize;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}
