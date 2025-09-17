import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import CheckboxGroup from "./CheckboxGroup";
import { ICheckboxGroupProps, ICheckboxGroupDefaultItem } from "./types";

const options: ICheckboxGroupDefaultItem[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2", disabled: true },
  { label: "Option 3", value: "3" }
];

const testId = "checkbox-group";

const renderComponent = (props: ICheckboxGroupProps = { options: [] }) => {
  return render(
    <CheckboxGroup data-testid={testId} {...props} />
  );
};

const getRender = () => screen.getByTestId(testId);

describe("CheckboxGroup", () => {
  it("renders without errors", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders label and required marker", () => {
    renderComponent({ label: "Select options", required: true, options });
    expect(screen.getByText("Select options")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders all options with correct labels and checked state", () => {
    renderComponent({ value: ["1", "3"], options });
    options.forEach((opt) => {
      const checkbox = screen.getByLabelText(opt.label) as HTMLInputElement;
      expect(checkbox).toBeInTheDocument();
      expect(checkbox.checked).toBe(["1", "3"].includes(opt.value as string));
      expect(checkbox.disabled).toBe(Boolean(opt.disabled));
    });
  });

  it("calls onChange with updated values when checkbox clicked", () => {
    const onChange = jest.fn();
    renderComponent({ value: ["1"], onChange, options });
    const checkbox2 = screen.getByLabelText("Option 2").parentElement as HTMLInputElement;
    fireEvent.click(checkbox2);
    expect(onChange).not.toHaveBeenCalled();

    const checkbox3 = screen.getByLabelText("Option 3").parentElement as HTMLInputElement;
    fireEvent.click(checkbox3);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(["1", "3"], expect.any(Object));
  });

  it("renders error message if provided", () => {
    renderComponent({ error: "This field is required", options });
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("applies className props", () => {
    renderComponent({ className: "custom-class", options });
    const wrapper = getRender();
    expect(wrapper).toHaveClass("custom-class");
  });
});
