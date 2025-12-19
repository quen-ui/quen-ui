import styled, { css } from "styled-components";
import { rgba } from "polished";
import { Button } from "../Button";

export const CalendarStyled = styled.div`
  width: max-content;
  padding: 16px;
  background: ${({ theme }) => theme.components.Calendar.background};
  border: 1px solid ${({ theme }) => theme.components.Calendar.borderColor};
  border-radius: ${({ theme }) => theme.components.Calendar.radius};
  z-index: 100;
  color: ${({ theme }) => theme.textColor};
  overflow: hidden;

  .quen-ui__calendar__icon--right {
    transform: rotateZ(270deg);
  }

  .quen-ui__calendar__icon--left {
    transform: rotateZ(90deg);
  }
`;

export const CalendarGridWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 32px);
  gap: 4px;
  min-width: 50%;
  position: relative;
`;

export const DayStyled = styled(Button)
  .attrs({ view: "icon" })
  .withConfig({
    shouldForwardProp: (prop) =>
      ![
        "isSelected",
        "isCurrentMonth",
        "isToday",
        "isRangeStart",
        "isRangeEnd",
        "isInRange",
        "isHoverRange",
        "isDisabled"
      ].includes(prop)
  })<{
  isSelected?: boolean;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  isInRange?: boolean;
  isHoverRange?: boolean;
  isDisabled?: boolean;
}>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  cursor: ${({ isCurrentMonth, isDisabled }) => (isCurrentMonth && !isDisabled ? "pointer" : "default")};
  font-weight: ${({ isToday, isSelected }) =>
    isToday && !isSelected ? "bold" : "normal"};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};

  ${({ theme, isSelected, isCurrentMonth }) => {
    const { secondaryColor } = theme.components.Calendar;
    console.log(secondaryColor)

    return css`
      color: ${isSelected ? "#fff" : isCurrentMonth ? theme.textColor : secondaryColor};
    `;
  }}
  

  ${({ theme, isToday, isSelected }) =>
    isToday &&
    !isSelected &&
    css`
      border: 1px solid ${theme.components.Calendar.activeBackground};
      border-radius: ${theme.components.Calendar.radius};
    `}

  ${({ theme, isInRange, isHoverRange }) => {
    if (isHoverRange || isInRange) {
      return css`
        background: ${rgba(theme.components.Calendar.activeBackground, 0.5)};
        color: white;
      `;
    }
  }}

  ${({ theme, isRangeStart, isRangeEnd, isSelected }) => {
    const { activeBackground, radius } = theme.components.Calendar;

    if (isSelected) {
      return css`
        background: ${activeBackground};
        border-radius: ${radius};
      `;
    }

    if (isRangeStart) {
      return css`
        background: ${activeBackground};
        border-radius: ${radius} 0 0 ${radius};
      `;
    }

    if (isRangeEnd) {
      return css`
        background: ${activeBackground};
        border-radius: 0 ${radius} ${radius} 0;
      `;
    }
  }}
`;

export const MonthStyled = styled(Button).attrs({ view: "icon" }).withConfig({
  shouldForwardProp: prop => !["isSelected"].includes(prop)
})<{
  isSelected: boolean;
}>`
  background: ${({ theme, isSelected }) =>
    isSelected && theme.components.Calendar.activeBackground};
  color: ${({ theme, isSelected }) => (isSelected ? "#fff" : theme.textColor)};
  width: 5rem;
`;
