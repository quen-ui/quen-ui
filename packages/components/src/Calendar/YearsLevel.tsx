import { CalendarGrid, MonthStyled } from "./styles";
import type { ICalendarYearsLevelProps } from "./types";

const YearsLevel = ({
  currentMonth,
  setLevelMode,
  setCurrentMonth
}: ICalendarYearsLevelProps) => {
  const startYear = Math.floor(currentMonth.getFullYear() / 10) * 10;
  const years = Array.from({ length: 12 }, (_, i) => startYear - 1 + i);
  return (
    <CalendarGrid style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
      {years.map((year) => (
        <MonthStyled
          key={year}
          isSelected={year === currentMonth.getFullYear()}
          onClick={() => {
            setCurrentMonth(new Date(year, currentMonth.getMonth()));
            setLevelMode("months");
          }}>
          {year}
        </MonthStyled>
      ))}
    </CalendarGrid>
  );
};

export default YearsLevel;
