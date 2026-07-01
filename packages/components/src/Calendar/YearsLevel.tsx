import { deepMerge } from "@quen-ui/helpers";
import { CalendarGrid, MonthStyled } from "./styles";
import type { ICalendarYearsLevelProps } from "./types";

const YearsLevel = ({
  currentMonth,
  setLevelMode,
  setCurrentMonth,
  classNames,
  styles
}: ICalendarYearsLevelProps) => {
  const startYear = Math.floor(currentMonth.getFullYear() / 10) * 10;
  const years = Array.from({ length: 12 }, (_, i) => startYear - 1 + i);
  return (
    <CalendarGrid
      style={deepMerge(
        { gridTemplateColumns: "repeat(3, 1fr)" },
        styles?.content ?? {}
      )}
      className={classNames?.content}
      data-semantic="content">
      {years.map((year) => (
        <MonthStyled
          classNames={{ root: classNames?.item }}
          styles={{ root: styles?.root }}
          data-semantic="item"
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
