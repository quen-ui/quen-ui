import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Calendar from "./Calendar";
import { render } from "../../../../tests/renderUtil"

describe("Calendar", () => {
  test("should display a calendar with the days of the week", () => {
    render(<Calendar />);
    expect(screen.getByText("Mo")).toBeInTheDocument();
    expect(screen.getByText("Su")).toBeInTheDocument();
  });

  test("should call onChange when selecting a day (single selection)", () => {
    const handleChange = jest.fn();
    render(<Calendar onChange={handleChange} />);
    const dayButton = screen.getAllByText("15")[0];
    fireEvent.click(dayButton);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("must select the correct date range (range = true)", () => {
    const handleChange = jest.fn();
    render(<Calendar range onChange={handleChange} />);
    const days = screen.getAllByText("10");
    fireEvent.click(days[0]);
    const days2 = screen.getAllByText("20");
    fireEvent.click(days2[0]);

    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  test("clicking on the title takes you to the month selection", () => {
    render(<Calendar />);
    const header = screen.getByText(/^\D+ \d{4}$/);
    fireEvent.click(header);
    expect(header.textContent).toMatch(/\d{4}/);
  });

  test("clicking on the title again takes you to the year selection", () => {
    render(<Calendar />);
    const header = screen.getByText(/^\D+ \d{4}$/);
    fireEvent.click(header);
    fireEvent.click(header);
    expect(header.textContent).toMatch(/^\d{4} – \d{4}$/);
  });

  test("should not allow selecting a date less than minDate", () => {
    const handleChange = jest.fn();
    render(<Calendar minDate="2025-12-24" onChange={handleChange} />);
    const earlyDay = screen.getAllByText("23")[0];
    fireEvent.click(earlyDay);
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("should not allow selecting a date greater than maxDate", () => {
    const handleChange = jest.fn();
    render(<Calendar maxDate="2025-11-10" onChange={handleChange} />);
    const lateDay = screen.getAllByText("30")[0];
    fireEvent.click(lateDay);
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("must render custom cells via renderDay", () => {
    const renderDay = jest.fn((date) => (
      <span key={date.getDate()}>{`D${date.getDate()}`}</span>
    ));
    render(<Calendar renderDay={renderDay} />);
    expect(renderDay).toHaveBeenCalled();
    expect(screen.getByText("D10")).toBeInTheDocument();
  });
});
