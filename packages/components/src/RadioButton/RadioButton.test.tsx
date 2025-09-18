import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import RadioButton from "./RadioButton";
import {type IRadioButtonProps } from "./types";

const testId = "radio-button";

const renderComponent = (props: IRadioButtonProps) => {
  return render(<RadioButton data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("RadioButton", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({ label: "Option" })).not.toThrow();
  });

  it("renders label when provided", () => {
    renderComponent({ label: "Option" });
    expect(screen.getByText("Option")).toBeInTheDocument();
  });

  it("renders checked state", () => {
    renderComponent({ checked: true });
    const input = screen.getByRole("radio") as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("calls onChange when clicked", () => {
    const onChange = jest.fn();
    renderComponent({ onChange, value: "1" });
    const input = screen.getByRole("radio") as HTMLInputElement;
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
  });

  it("applies disabled prop", () => {
    renderComponent({ disabled: true });
    const input = screen.getByRole("radio") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it("applies name, id and className props", () => {
    renderComponent({ name: "group1", id: "radio1", className: "custom-class" });
    const label = getRender();
    const input = screen.getByRole("radio") as HTMLInputElement;
    expect(input.name).toBe("group1");
    expect(label).toHaveAttribute("id", "radio1");
    expect(label).toHaveClass("custom-class");
  });
});
