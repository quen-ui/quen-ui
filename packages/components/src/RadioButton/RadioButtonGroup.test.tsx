import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import RadioButtonGroup from "./RadioButtonGroup";
import type { IRadioGroupProps } from "./types";

const options = [
  { id: "1", label: "Option 1", value: "1" },
  { id: "2", label: "Option 2", value: "2" }
];

const renderComponent = (props: IRadioGroupProps) => {
  return render(<RadioButtonGroup {...props} />);
};

describe("RadioGroup", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({ options })).not.toThrow();
  });

  it("renders label and required indicator", () => {
    renderComponent({ label: "Group Label", required: true, options });
    expect(screen.getByText("Group Label")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders all options", () => {
    renderComponent({ options });
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("sets checked option based on value", () => {
    renderComponent({ value: "2", options });
    const input = screen.getByLabelText("Option 2") as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("calls onChange when option is clicked", () => {
    const onChange = jest.fn();
    renderComponent({ onChange, options });
    const input = screen.getByLabelText("Option 1") as HTMLInputElement;
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledWith("1", expect.anything());
  });

  it("applies disabled prop to all options", () => {
    renderComponent({ disabled: true, options });
    const inputs = screen.getAllByRole("radio") as HTMLInputElement[];
    inputs.forEach(input => expect(input.disabled).toBe(true));
  });

  it("renders error message if provided", () => {
    renderComponent({ error: "Error occurred", options });
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("applies size and className props", () => {
    renderComponent({ size: "l", className: "custom-class", options });
    const wrapper = screen.getByText("Option 1").closest("div");
    expect(wrapper).toHaveClass("custom-class");
  });
});
