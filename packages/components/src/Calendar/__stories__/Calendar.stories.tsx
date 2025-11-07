import { StoryObj } from "@storybook/react";
import { useState } from "react";
import Calendar from "../Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    range: { control: "boolean" }
  }
} as StoryObj<typeof Calendar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {} as StoryObj<typeof Calendar>;

function getDay(date: Date): number {
  const jsDate = new Date(date);
  const day = jsDate.getDay();
  return day === 0 ? 6 : day
}

function startOfWeek(date: Date): Date {
  const jsDate = new Date(date);
  const dayOffset = getDay(date);
  const startDate = new Date(jsDate);
  startDate.setDate(jsDate.getDate() - dayOffset);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}

function endOfWeek(date: Date): Date {
  const jsDate = new Date(date);
  const dayOffset = getDay(date);
  const endDate = new Date(jsDate);
  endDate.setDate(jsDate.getDate() + (7 - dayOffset));
  endDate.setHours(23, 59, 59, 999);
  return endDate;
}

function isInWeekRange(date: Date, value: Date | null): boolean {
  if (!value) return false;

  const targetDate = new Date(date);
  const weekStart = startOfWeek(value);
  const weekEnd = endOfWeek(value);

  return targetDate > weekStart && targetDate < weekEnd;
}

export const getDayProps = {
  render: () => {
    const [hovered, setHovered] = useState<Date | null>(null);
    const [value, setValue] = useState<Date | null>(null);

    return (
      <Calendar
        getDayProps={(date) => {
          const isHovered = isInWeekRange(date, hovered);
          const isSelected = isInWeekRange(date, value);
          const isInRange = isHovered || isSelected;
          return {
            onMouseEnter: () => setHovered(date),
            onMouseLeave: () => setHovered(null),
            isInRange,
            isSelected,
            isRangeStart: isInRange && new Date(date).getDay() === 1,
            isRangeEnd: isInRange && new Date(date).getDay() === 0,
            onClick: () => setValue(date)
          };
        }}
      />
    );
  }
} as StoryObj<typeof Calendar>;
