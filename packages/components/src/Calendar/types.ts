import type { CSSProperties, ReactNode } from "react";

export type TCalendarSemantic = "root" | "header" | "today" | "body" | "content" | "item";

export interface ICalendarLocale {
  /** Names of weekdays (7 elements) */
  weekdays: string[];
  /** Names of months (12 elements) */
  months: string[];
}

export type TCalendarLevel = "days" | "months" | "years";

export type TCalendarRangeProps = {
  /** Controlled selected value */
  value?: { startDate: string; endDate: string } | null;
  /** Callback triggered when selection changes */
  onChange?: (range: { startDate: string; endDate: string } | null) => void;
  /** Determines if the calendar allows range selection */
  range: true;
  /** Default value for uncontrolled mode */
  defaultValue?: { startDate: string; endDate: string };
};

export type TCalendarBaseProps = {
  /** Displays a “Today” button for quick navigation */
  showButtonToday?: boolean;
  /** Localized month and weekday names */
  locale?: ICalendarLocale;
  /** Sets the initial view level */
  defaultLevel?: TCalendarLevel;
  /** Controlled view level */
  level?: TCalendarLevel;
  /** Custom day renderer */
  renderDay?: TCalendarRenderDay;
  /** Function to customize day behavior and appearance */
  getDayProps?: TGetDayProps;
  /** Minimum selectable date */
  minDate?: string | Date;
  /** Maximum selectable date */
  maxDate?: string | Date;
  /** @deprecated
   * This property is deprecated. Use {@link classNames} instead.
   * Additional classname */
  className?: string;
  /** @deprecated
   * This property is deprecated. Use {@link styles} instead.
   * Additional style */
  style?: CSSProperties;
  /** Customize class for each semantic structure inside the component */
  classNames?: Partial<Record<TCalendarSemantic, string>>;
  /** Customize inline style for each semantic structure inside the component. */
  styles?: Partial<Record<TCalendarSemantic, CSSProperties>>;
  [key: string]: any;
};

export type TCalendarSingleProps = {
  /** Controlled selected value */
  value?: string;
  /** Callback triggered when selection changes */
  onChange?: (date: string | null) => void;
  /** Determines if the calendar allows range selection */
  range?: false;
  /** Default value for uncontrolled mode */
  defaultValue?: string;
};

export type TCalendarProps = TCalendarBaseProps &
  (TCalendarRangeProps | TCalendarSingleProps);

export type TCalendarRenderDay = (
  date: Date,
  params: {
    isCurrentMonth: boolean;
    isSelected: boolean;
    isInRange: boolean;
    isRangeStart: boolean;
    isRangeEnd: boolean;
    isToday: boolean;
    isHoverRange: boolean;
    isDisabled: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    className?: string;
    style?: CSSProperties;
  }
) => ReactNode;

export type TGetDayProps = (date: Date) => {
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  isHoverRange?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export interface ICalendarDaysLevelProps {
  locale: ICalendarLocale;
  days: { date: Date; isCurrentMonth: boolean }[];
  startDate: Date | null;
  endDate: Date | null;
  range?: boolean;
  today: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date, isCurrentMonth: boolean) => void;
  renderDay?: TCalendarRenderDay;
  getDayProps?: TGetDayProps;
  minDate?: string | Date;
  maxDate?: string | Date;
  classNames?: Partial<Record<TCalendarSemantic, string>>;
  styles?: Partial<Record<TCalendarSemantic, CSSProperties>>;
}

export interface ICalendarMonthLevelProps {
  locale: ICalendarLocale;
  currentMonth: Date;
  setLevelMode: (level: TCalendarLevel) => void;
  setCurrentMonth: (value: Date) => void;
  classNames?: Partial<Record<TCalendarSemantic, string>>;
  styles?: Partial<Record<TCalendarSemantic, CSSProperties>>;
}

export interface ICalendarYearsLevelProps {
  currentMonth: Date;
  setLevelMode: (level: TCalendarLevel) => void;
  setCurrentMonth: (value: Date) => void;
  classNames?: Partial<Record<TCalendarSemantic, string>>;
  styles?: Partial<Record<TCalendarSemantic, CSSProperties>>;
}
