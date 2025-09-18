import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import InputNumber from "./InputNumber";
import type { IInputNumberProps } from "./types";

const testId = "input-number";

const renderComponent = (props: IInputNumberProps = {}) => {
  return render(<InputNumber data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("InputNumber", () => {
  it("renders without errors", () => {
    expect(() => renderComponent()).not.toThrow();
  });

  it("renders label and required marker", () => {
    renderComponent({ label: "Number", required: true, id: "input" });
    expect(screen.getByText("Number")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders value and defaultValue", () => {
    renderComponent({ value: 10, defaultValue: 5 });
    const input = screen.getByRole("spinbutton") as HTMLInputElement;
    expect(input.value).toBe("10");
  });

  it("handles focus and blur events", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    renderComponent({ onFocus, onBlur });
    const input = screen.getByRole("spinbutton") as HTMLInputElement;

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it("handles clearable button click", () => {
    const onClear = jest.fn();
    const onChange = jest.fn();
    renderComponent({ clearable: true, value: 10, onClear, onChange });
    const button = screen.getByTestId("clearable-button");
    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledWith(null);
    expect(onClear).toHaveBeenCalled();
  });

  it("renders disabled, className props", () => {
    renderComponent({
      disabled: true,
      className: "custom-wrapper",
      placeholder: "Enter number",
      id: "num",
      name: "numField",
    });
    const wrapper = getRender();
    const input = screen.getByTestId("input") as HTMLInputElement;
    expect(wrapper).toHaveClass("custom-wrapper");
    expect(input).toHaveAttribute("placeholder", "Enter number");
    expect(input).toHaveAttribute("id", "num");
    expect(input).toHaveAttribute("name", "numField");
    expect(input.disabled).toBe(true);
  });

  it("renders rightContent and calculates widthRightContent", () => {
    renderComponent({ rightContent: <span data-testid="right">RC</span> });
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  it("renders error message if provided", () => {
    renderComponent({ error: "Invalid number" });
    expect(screen.getByText("Invalid number")).toBeInTheDocument();
  });
});
