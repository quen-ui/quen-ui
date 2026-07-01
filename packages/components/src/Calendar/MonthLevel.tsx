import { deepMerge } from "@quen-ui/helpers";
import { CalendarGrid, MonthStyled } from "./styles";
import type { ICalendarMonthLevelProps } from "./types";

const MonthLevel = ({
  locale,
  currentMonth,
  setLevelMode,
  setCurrentMonth,
  classNames,
  styles
}: ICalendarMonthLevelProps) => {
  return (
    <CalendarGrid
      style={deepMerge(
        { gridTemplateColumns: "repeat(3, 1fr)" },
        styles?.content ?? {}
      )}
      data-semantic="content"
      className={classNames?.content}>
      {locale.months.map((month, index) => (
        <MonthStyled
          classNames={{ root: classNames?.item }}
          styles={{ root: styles?.item }}
          data-semantic="item"
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
