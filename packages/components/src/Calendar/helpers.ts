import type { ICalendarLocale } from "./types";
export const generateCalendarDays = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const days: { date: Date; isCurrentMonth: boolean }[] = [];

  let firstWeekday = firstDayOfMonth.getDay();
  if (firstWeekday === 0) firstWeekday = 7; // воскресенье -> 7

  for (let i = firstWeekday - 1; i > 0; i--) {
    const d = new Date(year, month, 1 - i);
    days.push({ date: d, isCurrentMonth: false });
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const d = new Date(year, month, i);
    days.push({ date: d, isCurrentMonth: true });
  }

  while (days.length % 7 !== 0) {
    const nextDay = new Date(
      year,
      month,
      lastDayOfMonth.getDate() + (days.length - (firstWeekday - 1) + 1)
    );
    days.push({ date: nextDay, isCurrentMonth: false });
  }

  return days;
};

export const defaultLocale: ICalendarLocale = {
  weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

export const isBefore = (a: Date, b: Date) => {
  return a.getTime() < b.getTime();
}

export const isAfter = (a: Date, b: Date) => {
  return a.getTime() > b.getTime();
}

export const getDate = (date?: Date | null): string => {
  if (date) {
    return date.toLocaleDateString("en-CA");
  }
  return "";
}
