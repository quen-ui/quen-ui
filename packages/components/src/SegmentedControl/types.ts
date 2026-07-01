import { type CSSProperties, type ReactNode } from "react";
import type { TQuenSize } from "../types/size";

type TSegmentedControlSemantic = "root" | "indicator" | "item" | "label" | "icon";

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
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TSegmentedControlSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TSegmentedControlSemantic, CSSProperties>>;
}
