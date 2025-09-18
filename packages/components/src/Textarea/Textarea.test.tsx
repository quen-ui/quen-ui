import { screen, fireEvent } from "@testing-library/react";
import { render} from "../../../../tests/renderUtil";
import Textarea from "./Textarea";
import type { ITextareaProps } from "./types";

const testId = "textarea";

const renderComponent = (props: ITextareaProps) =>
  render(<Textarea data-testid={testId} {...props} />);

const getRender = () => screen.getByTestId(testId);


describe("Textarea", () => {
  it("renders without errors", () => {
    expect(() => renderComponent).not.toThrow();
  });

  it("renders label correctly", () => {
    renderComponent({ label: "Label "})
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders required asterisk when required prop is true", () => {
    renderComponent({ label: "Required", required: true });
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders error message when error prop is provided", () => {
    renderComponent({ label: "Error", error: "Error message" });
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("calls onChange when textarea value changes", () => {
    const onChange = jest.fn();
   renderComponent({ onChange });
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Hello" } });
    expect(onChange).toHaveBeenCalledWith("Hello", expect.any(Object));
  });

  it("calls onBlur and updates focus state", () => {
    const onBlur = jest.fn();
    renderComponent({ onBlur });
    const textarea = screen.getByRole("textbox");
    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    expect(onBlur).toHaveBeenCalled();
  });

  it("calls onClear when clear button is clicked", () => {
    const onClear = jest.fn();
    renderComponent({ onClear, clearable: true })
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClear).toHaveBeenCalled();
  });

  it("does not call onClear when disabled", () => {
    const onClear = jest.fn();
    renderComponent({ clearable: true, disabled: true, onClear })
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClear).not.toHaveBeenCalled();
  });

  it("renders leftContent and rightContent", () => {
    renderComponent({
      leftContent: <span data-testid="left">L</span>,
      rightContent: <span data-testid="right">R</span>
    });
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  it("applies className to wrapper and textarea", () => {
    renderComponent({ className: "className", classNameTextarea: "class-textarea"})

    expect(getRender()).toHaveClass("className");
    expect(getRender().querySelector(".class-textarea")).toBeInTheDocument();
  });
});
