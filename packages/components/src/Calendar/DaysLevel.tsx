import { useMemo, useState } from "react";
import { CalendarGrid, DayStyled } from "./styles";
import type { ICalendarDaysLevelProps } from "./types";
import { isBefore, isAfter, getDate } from "./helpers";
import { Title } from "../typography/Title";

const DaysLevel = ({
  locale,
  days,
  startDate,
  endDate,
  range,
  today,
  selectedDate,
  onDateSelect,
  renderDay,
  getDayProps,
  minDate,
  maxDate
}: ICalendarDaysLevelProps) => {
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const min = useMemo(() => {
    return minDate ? new Date(minDate) : null;
  }, [minDate]);

  const max = useMemo(() => {
    return maxDate ? new Date(maxDate) : null;
  }, [maxDate]);

  const isHoverRange = (date: Date) => {
    if (!startDate || endDate || !hoverDate) return false;
    if (hoverDate > startDate) return date > startDate && date < hoverDate;
    return date < startDate && date > hoverDate;
  };

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  const isDisabled = (date: Date) => {
    if (min && isBefore(date, min)) return true;
    if (max && isAfter(date, max)) return true;
    return false;
  };

  const handleDayClick = (date: Date, isCurrentMonth: boolean) => {
    if (min && isBefore(date, min)) return;
    if (max && isAfter(date, max)) return;
    onDateSelect(date, isCurrentMonth);
  };

  return (
    <CalendarGrid>
      {locale.weekdays.map((day) => (
        <Title align="center" size="xs" as="div" key={day}>
          {day}
        </Title>
      ))}
      {days.map(({ date, isCurrentMonth }) => {
        const isStart = getDate(startDate) === getDate(date);
        const isEnd = getDate(endDate) === getDate(date);
        const isSel = getDate(selectedDate) === getDate(date);
        const isToday = getDate(date) === getDate(today);
        if (renderDay) {
          return renderDay(date, {
            isCurrentMonth,
            isHoverRange: isHoverRange(date),
            isInRange: isInRange(date),
            isRangeEnd: isEnd && startDate != null,
            isToday,
            isRangeStart: isStart && endDate != null,
            isSelected: range ? isStart || isEnd : isSel,
            isDisabled: isDisabled(date),
            onClick: () => handleDayClick(date, isCurrentMonth),
            onMouseEnter: () => setHoverDate(date),
            onMouseLeave: () => setHoverDate(null)
          });
        }
        const dayProps = getDayProps?.(date);
        return (
          <DayStyled
            aria-disabled={!isCurrentMonth}
            aria-label={`Day ${date.getDate()}`}
            key={date.toISOString()}
            isHoverRange={dayProps?.isHoverRange ?? isHoverRange(date)}
            isInRange={dayProps?.isInRange ?? isInRange(date)}
            isSelected={
              dayProps?.isSelected  ? dayProps?.isSelected : range ? isStart || isEnd : isSel
            }
            isRangeStart={
              dayProps?.isRangeStart ?? (isStart && endDate != null)
            }
            isRangeEnd={dayProps?.isRangeEnd ?? (isEnd && startDate != null)}
            isCurrentMonth={dayProps?.isCurrentMonth ?? isCurrentMonth}
            isToday={
              dayProps?.isToday ?? isToday
            }
            isDisabled={dayProps?.isDisabled ?? isDisabled(date)}
            onClick={
              dayProps?.onClick ?? (() => handleDayClick(date, isCurrentMonth))
            }
            onMouseEnter={dayProps?.onMouseEnter ?? (() => setHoverDate(date))}
            onMouseLeave={dayProps?.onMouseLeave ?? (() => setHoverDate(null))}>
            {date.getDate()}
          </DayStyled>
        );
      })}
    </CalendarGrid>
  );
};

export default DaysLevel;
