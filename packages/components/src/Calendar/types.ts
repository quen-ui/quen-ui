import { ReactNode } from "react";

export interface ICalendarLocale {
  weekdays: string[];
  months: string[];
}

export type TCalendarLevel = "days" | "months" | "years";

type TCalendarRangeProps = {
  value?: { startDate: string; endDate: string };
  onChange?: (range: { startDate: string; endDate?: string }) => void;
  range: true;
  defaultValue?: { startDate: string; endDate: string };
};

export type TCalendarProps = {
  showButtonToday?: boolean;
  locale?: ICalendarLocale;
  defaultLevel?: TCalendarLevel;
  level?: TCalendarLevel;
  renderDay?: TCalendarRenderDay;
  getDayProps?: TGetDayProps;
  minDate?: string | Date;
  maxDate?: string | Date;
} & (
  | TCalendarRangeProps
  | {
      value?: string;
      onChange?: (date: string) => void;
      range?: false;
      defaultValue?: string;
    }
);

export type TCalendarRenderDay = (date: Date, params: {
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
}) => ReactNode;

export type TGetDayProps = (date: Date) => ({
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
})

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
