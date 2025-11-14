import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import InputDate from "./InputDate";

describe("CalendarInput", () => {
  it("should display one input if range=false", () => {
    render(<InputDate range={false} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(1);
  });

  it("should display two inputs if range=true", () => {
    render(<InputDate range />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });

  it("should automatically add separators as you type", () => {
    render(<InputDate dateFormat="dd.mm.yyyy" />);
    const input = screen.getByTestId("input-single-date") as HTMLInputElement;

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "25012025" } });
    expect(input.value).toBe("25.01.2025");
  });

  it("should call onChange when the value changes", () => {
    const handleChange = jest.fn();
    render(<InputDate dateFormat="dd.mm.yyyy" onChange={handleChange} />);
    const input = screen.getByTestId("input-single-date") as HTMLInputElement;

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "25012025" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("should switch focus to the second input after entering the first date when range", () => {
    render(<InputDate range />);
    const startInput = screen.getByTestId("input-start-date");
    const endInput = screen.getByTestId("input-end-date");

    fireEvent.focus(startInput);
    fireEvent.change(startInput, { target: { value: "25012025" } });

    expect(document.activeElement).toBe(endInput);
  });

  it("must call onChange with range when range", () => {
    const handleChange = jest.fn();
    render(<InputDate range onChange={handleChange} />);

    const startInput = screen.getByTestId("input-start-date");
    const endInput = screen.getByTestId("input-end-date");

    fireEvent.focus(startInput);
    fireEvent.change(startInput, { target: { value: "20250125" } });
    fireEvent.focus(endInput);
    fireEvent.change(endInput, { target: { value: "20250127" } });

    expect(handleChange).toHaveBeenCalledWith({
      startDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
      endDate: expect.stringMatching(/\d{4}-\d{2}-\d{2}/)
    });
  });

  it("should format correctly via valueFormatter", () => {
    const handleChange = jest.fn();
    const formatter = jest.fn((raw) => {
      const [y, m, d] = raw.split("-");
      return `${d}.${m}.${y}`;
    });

    render(<InputDate valueFormatter={formatter} onChange={handleChange} />);
    const input = screen.getByTestId("input-single-date") as HTMLInputElement;

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "20250125" } });

    expect(formatter).toHaveReturnedWith("25.01.2025");
  });

  it("should display the selected date after manual input", () => {
    render(<InputDate range={false} />);
    const input = screen.getByTestId("input-single-date") as HTMLInputElement;

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "20250125" } });
    fireEvent.blur(input);

    expect(input.value).toBe("2025-01-25");
  });

  it("should not allow selecting a date less than minDate", () => {
    const handleChange = jest.fn();
    render(
      <InputDate
        range={false}
        onChange={handleChange}
        minDate={new Date(2025, 0, 20)}
      />
    );

    const input = screen.getByTestId("input-single-date");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "20250115" } });

    expect(handleChange).not.toHaveBeenCalled();
  });

  it("should not allow selecting a date greater than maxDate", () => {
    const handleChange = jest.fn();
    render(
      <InputDate
        range={false}
        onChange={handleChange}
        maxDate={new Date(2025, 0, 30)}
      />
    );

    const input = screen.getByTestId("input-single-date");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "20250131" } });

    expect(handleChange).not.toHaveBeenCalled();
  });

  it("should allow you to select a date by clicking on a cell in the calendar", () => {
    const handleChange = jest.fn();
    render(<InputDate range={false} onChange={handleChange} />);

    fireEvent.click(screen.getByTestId("input-single-date"));
    const dayCell = screen.getByText("15");
    fireEvent.click(dayCell);

    expect(handleChange).toHaveBeenCalledWith(expect.any(String));
  });
});
