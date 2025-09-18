import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil"
import Switch from "./Switch";
import type { ISwitchProps } from "./types";

const testId = "switch";

const renderComponent = (props: ISwitchProps) => render(<Switch data-testid={testId} {...props} />);

const getRender = () => screen.getByTestId(testId);


describe("Switch", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({})).not.toThrow();
  });

  it("renders label after the switch", () => {
    renderComponent({ label: "My Switch", labelPosition: "after" });
    expect(getRender()).toBeInTheDocument();
  });

  it("renders label before the switch", () => {
    renderComponent({ label: "My Switch", labelPosition: "before" });
    expect(screen.getByText("My Switch")).toBeInTheDocument();
  });

  it("handles change event", () => {
    const handleChange = jest.fn();
    renderComponent({ onChange: handleChange });
    const switchInput = screen.getByRole("switch");
    fireEvent.click(switchInput);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0]).toBe(true); // checked value
  });

  it("handles click event", () => {
    const handleClick = jest.fn();
    renderComponent({ onClick: handleClick });
    const switchInput = screen.getByRole("switch");
    fireEvent.click(switchInput);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(true); // checked value
  });

  it("supports defaultChecked prop", () => {
    renderComponent({ defaultChecked: true });
    const switchInput = screen.getByRole("switch") as HTMLInputElement;
    expect(switchInput.checked).toBe(true);
  });

  it("supports controlled value prop", () => {
    renderComponent({ value: true });
    const switchInput = screen.getByRole("switch") as HTMLInputElement;
    expect(switchInput.checked).toBe(true);
  });

  it("applies disabled prop", () => {
    renderComponent({ disabled: true });
    const switchInput = screen.getByRole("switch");
    expect(switchInput).toBeDisabled();
  });

  it("applies className and style props", () => {
    const { container } = renderComponent({
      className: "my-class",
      style: { background: "red" }
    });
    expect(container.firstChild).toHaveClass("my-class");
    expect(container.firstChild).toHaveStyle({ background: "red" });
  });
});
