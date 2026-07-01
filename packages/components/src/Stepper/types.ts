import type { ReactNode, ReactElement, MouseEvent, CSSProperties } from "react"

type TStepperSemantic = "root" | "item" | "icon" | "connector" | "content" | "label";

export type TStepperOrientation = "horizontal" | "vertical";

export interface IStepIconProps {
  /** Step index */
  index?: number;
  /** Is the step active */
  active?: boolean;
  /** Is the step complete */
  completed?: boolean;
  /** Is there an error */
  error?: boolean;
  /** Custom icon */
  icon?: ReactNode;
}

export interface IStepLabelProps {
  /** Label text */
  children?: ReactNode;
  /** Optional text (displayed in small font) */
  optional?: ReactNode;
  /** Is there an error */
  error?: boolean;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
}

export interface IStepProps {
  /** The content of the step (usually Stepper.Label) */
  children?: ReactNode;
  /** Step index (automatic if Stepper is used) */
  index?: number;
  /** Whether the step is manually completed (overrides logic based on activeStep) */
  completed?: boolean;
  /** Is the step disabled */
  disabled?: boolean;
  /** Error flag */
  error?: boolean;
  /** Custom icon */
  icon?: ReactNode;
  /** Is the step active (automatic) */
  active?: boolean;
  /** The last step (to hide the connector) */
  last?: boolean;
  /** Orientation */
  orientation?: TStepperOrientation;
  /** Connector component*/
  connector?: ReactElement;
  /** Click handler */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
}

export interface IStepperProps {
  /** Child Elements of Step*/
  children?: ReactNode;
  /** Active step index (starting from 0) */
  activeStep?: number;
  /** Orientation */
  orientation?: TStepperOrientation;
  /** Connector component */
  connector?: ReactElement;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TStepperSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TStepperSemantic, CSSProperties>>;
}

export interface IStepperContextValue {
  activeStep: number;
  orientation: TStepperOrientation;
  connector: ReactElement;
  onStepClick?: (step: number) => void;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TStepperSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TStepperSemantic, CSSProperties>>;
}
