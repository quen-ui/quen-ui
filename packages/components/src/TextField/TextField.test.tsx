import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil"
import TextField from "./TextField";
import { type ITextFieldProps } from "./types";

const testId = "text-field";

const renderComponent = (props: ITextFieldProps) =>
  render(<TextField {...props} />);

const getRender = () => screen.getByTestId(testId);


describe("TextField", () => {
  it("renders without crashing", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders label correctly", () => {
   renderComponent({ label: "Label" })
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders required asterisk when required prop is true", () => {
    renderComponent({ label: "Required", required: true });
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders error message when error prop is provided", () => {
    renderComponent({ error: "Error message" });
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const onChange = jest.fn();
    renderComponent({ onChange })
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(onChange).toHaveBeenCalledWith("Hello", expect.any(Object));
  });

  it("calls onBlur when input loses focus", () => {
    const onBlur = jest.fn();
    renderComponent({ onBlur })
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onClear and onChange when clear button is clicked", () => {
    const onClear = jest.fn();
    const onChange = jest.fn();
    renderComponent({ clearable: true, onClear, onChange })
    const button = screen.getByTestId("clearable-button");
    fireEvent.click(button);
    expect(onClear).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("", expect.any(Object));
  });

  it("does not call onClear when disabled", () => {
    const onClear = jest.fn();
    renderComponent({ clearable: true, onClear, disabled: true })
    const button = screen.getByTestId("clearable-button");
    fireEvent.click(button);
    expect(onClear).not.toHaveBeenCalled();
  });

  it("renders leftContent and rightContent", () => {
    renderComponent({
      leftContent: <span data-testid="leftContent">L</span>,
      rightContent: <span data-testid="rightContent">R</span>,
    });
    expect(screen.getByTestId("leftContent")).toBeInTheDocument();
    expect(screen.getByTestId("rightContent")).toBeInTheDocument();
  });

  it("applies className to wrapper and input", () => {
    renderComponent({ className: "className", classNameInput: "class-input"})

    expect(getRender()).toHaveClass("className");
    expect(getRender().querySelector(".class-input")).toBeInTheDocument();
  });

  it("supports type prop", () => {
    renderComponent({ type: "password" });
    const input = getRender().getElementsByTagName("input").item(0);
    expect(input).toHaveAttribute("type", "password");
  });
});
