import {CSSProperties, ReactNode} from "react";

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
  /** Additional className */
  className?: string;
  /** Inline styles */
  style?: CSSProperties;
  [key: string]: any;
}

export type TCalendarSingleProps = {
  /** Controlled selected value */
  value?: string;
  /** Callback triggered when selection changes */
  onChange?: (date: string | null) => void;
  /** Determines if the calendar allows range selection */
  range?: false;
  /** Default value for uncontrolled mode */
  defaultValue?: string;
}

export type TCalendarProps = TCalendarBaseProps & (
  | TCalendarRangeProps
  | TCalendarSingleProps
);

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
}

export interface ICalendarMonthLevelProps {
  locale: ICalendarLocale;
  currentMonth: Date;
  setLevelMode: (level: TCalendarLevel) => void;
  setCurrentMonth: (value: Date) => void;
}

export interface ICalendarYearsLevelProps {
  currentMonth: Date;
  setLevelMode: (level: TCalendarLevel) => void;
  setCurrentMonth: (value: Date) => void;
}
