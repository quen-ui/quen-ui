import { CalendarGrid, MonthStyled } from "./styles";
import type { ICalendarMonthLevelProps } from "./types";

const MonthLevel = ({
  locale,
  currentMonth,
  setLevelMode,
  setCurrentMonth
}: ICalendarMonthLevelProps) => {
  return (
    <CalendarGrid style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
      {locale.months.map((month, index) => (
        <MonthStyled
          key={month}
          isSelected={index === currentMonth.getMonth()}
          onClick={() => {
            setCurrentMonth(new Date(currentMonth.getFullYear(), index));
            setLevelMode("days");
          }}>
          {month.slice(0, 3)}
        </MonthStyled>
      ))}
    </CalendarGrid>
  );
};

export default MonthLevel;
