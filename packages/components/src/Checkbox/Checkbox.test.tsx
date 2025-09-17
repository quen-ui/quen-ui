import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Checkbox from "./Checkbox";
import type { ICheckboxProps } from "./types";

const testId = "checkbox";

const renderComponent = (props: ICheckboxProps = {}) => {
  return render(<Checkbox data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Checkbox", () => {
  it("renders without errors", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders label", () => {
    renderComponent({ label: "Checkbox" });
    expect(screen.getByText("Checkbox")).toBeInTheDocument();
  });

  it("checkbox reflects checked prop", () => {
    renderComponent({ checked: true });
    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it("calls onChange with correct value", () => {
    const onChange = jest.fn();
    renderComponent({ onChange });
    const input = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it("applies disabled prop", () => {
    renderComponent({ disabled: true });
    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it("applies size, name, id, value, className and intermediate props", () => {
    renderComponent({
      name: "accept",
      id: "checkbox-id",
      value: "yes",
      className: "custom-class",
      intermediate: true,
    });
    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input).toHaveAttribute("name", "accept");
    expect(input).toHaveAttribute("id", "checkbox-id");
    expect(input).toHaveAttribute("value", "yes");
    expect(getRender()).toHaveClass("custom-class");
  });

});
