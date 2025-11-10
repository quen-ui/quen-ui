import { useState, useEffect, useMemo } from "react";
import type { TCalendarProps, TCalendarLevel } from "./types";
import { generateCalendarDays, defaultLocale } from "./helpers";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { CalendarGridWrapper, CalendarStyled } from "./styles";
import DaysLevel from "./DaysLevel";
import MonthLevel from "./MonthLevel";
import YearsLevel from "./YearsLevel";
import IconArrowBottom  from "../assets/icon-arrow-bottom.svg";

const Calendar = ({
  value,
  onChange,
  showButtonToday,
  range,
  defaultValue,
  locale = defaultLocale,
  level,
  defaultLevel = "days",
  renderDay,
  getDayProps,
  maxDate,
  minDate
}: TCalendarProps) => {
  const [internalStartDate, setInternalStartDate] = useState<Date | null>(
    () => {
      return range && defaultValue?.startDate
        ? new Date(defaultValue.startDate)
        : null;
    }
  );
  const [internalEndDate, setInternalEndDate] = useState<Date | null>(() => {
    return range && defaultValue?.endDate
      ? new Date(defaultValue.endDate)
      : null;
  });
  const [internalSingleDate, setInternalSingleDate] = useState<Date | null>(
    () => (!range && defaultValue ? new Date(defaultValue!) : null)
  );

  const startDate =
    range && value?.startDate ? new Date(value.startDate) : internalStartDate;
  const endDate =
    range && value?.endDate ? new Date(value.endDate) : internalEndDate;
  const selectedDate =
    !range && typeof value === "string" ? new Date(value) : internalSingleDate;

  const [levelMode, setLevelMode] = useState<TCalendarLevel>(
    level ? level : defaultLevel
  );

  useEffect(() => {
    if (level) {
      setLevelMode(level);
    }
  }, [level]);

  useEffect(() => {
    setInternalSingleDate(null);
    setInternalEndDate(null);
    setInternalStartDate(null);
  }, [range]);

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const levelTitle = useMemo(() => {
    if (levelMode == "days") {
      return `${locale.months[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;
    }
    if (levelMode == "months") {
      return currentMonth.getFullYear();
    }
    return `${Math.floor(currentMonth.getFullYear() / 10) * 10} – ${Math.floor(currentMonth.getFullYear() / 10) * 10 + 9}`;
  }, [levelMode, currentMonth, locale]);

  const handleDateSelect = (date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;

    if (range) {
      if (!startDate || (startDate && endDate)) {
        setInternalStartDate(date);
        setInternalEndDate(null);
        onChange?.({ startDate: date.toISOString().split("T")[0] });
      } else if (startDate && !endDate) {
        if (date < startDate) {
          setInternalStartDate(date);
          setInternalEndDate(startDate);
          onChange?.({
            startDate: date.toISOString().split("T")[0],
            endDate: startDate.toISOString().split("T")[0]
          });
        } else {
          setInternalEndDate(date);
          onChange?.({
            startDate: startDate.toISOString().split("T")[0],
            endDate: date.toISOString().split("T")[0]
          });
        }
      }
    } else {
      setInternalSingleDate(date);
      onChange?.(date.toISOString().split("T")[0]);
    }
  };

  const handleTodaySelect = () => {
    const today = new Date();
    if (range) {
      setInternalStartDate(today);
      setInternalEndDate(null);
      onChange?.({
        startDate: today.toISOString().split("T")[0]
      });
    } else {
      setInternalSingleDate(today);
      onChange?.(today.toISOString().split("T")[0]);
    }
    setCurrentMonth(today);
  };

  const handlePrev = () => {
    if (levelMode === "days") {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
      );
    } else if (levelMode === "months") {
      setCurrentMonth(
        new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth())
      );
    } else if (levelMode === "years") {
      setCurrentMonth(
        new Date(currentMonth.getFullYear() - 10, currentMonth.getMonth())
      );
    }
  };

  const handleNext = () => {
    if (levelMode === "days") {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      );
    } else if (levelMode === "months") {
      setCurrentMonth(
        new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth())
      );
    } else if (levelMode === "years") {
      setCurrentMonth(
        new Date(currentMonth.getFullYear() + 10, currentMonth.getMonth())
      );
    }
  };
  const days = generateCalendarDays(
    currentMonth.getFullYear(),
    currentMonth.getMonth()
  );
  const today = new Date();

  const handleClickLevel = () => {
    if (levelMode === "days") {
      setLevelMode("months");
    } else if (levelMode === "months") {
      setLevelMode("years");
    } else {
      setLevelMode("days");
    }
  };

  return (
    <CalendarStyled>
      <Flex direction="column" gap="xs">
        <Flex align="center" justify="space-between">
          <Button view="icon" size="s" onClick={handlePrev}>
            <IconArrowBottom className="quen-ui__calendar__icon--left" />
          </Button>
          <Button view="icon" size="s" onClick={handleClickLevel}>
            {levelTitle}
          </Button>
          <Button view="icon" size="s" onClick={handleNext}>
            <IconArrowBottom className="quen-ui__calendar__icon--right" />
          </Button>
        </Flex>
        {showButtonToday && (
          <Button fullWidth size="xs" onClick={handleTodaySelect}>
            Today
          </Button>
        )}
      </Flex>
      <CalendarGridWrapper>
        {levelMode === "days" && (
          <DaysLevel
            locale={locale}
            days={days}
            today={today}
            onDateSelect={handleDateSelect}
            range={range}
            startDate={startDate}
            endDate={endDate}
            selectedDate={selectedDate}
            renderDay={renderDay}
            getDayProps={getDayProps}
            maxDate={maxDate}
            minDate={minDate}
          />
        )}
        {levelMode === "months" && (
          <MonthLevel
            locale={locale}
            currentMonth={currentMonth}
            setLevelMode={setLevelMode}
            setCurrentMonth={setCurrentMonth}
          />
        )}
        {levelMode === "years" && (
          <YearsLevel
            currentMonth={currentMonth}
            setLevelMode={setLevelMode}
            setCurrentMonth={setCurrentMonth}
          />
        )}
      </CalendarGridWrapper>
    </CalendarStyled>
  );
};

export default Calendar;
