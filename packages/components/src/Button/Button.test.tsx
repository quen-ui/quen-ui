import { PropsWithChildren } from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Button from "./Button";
import type { IButtonProps } from "./types";

const testId = "button";

const renderComponent = (props: PropsWithChildren<IButtonProps> = {}) => {
  const { children = "Click", ...rest } = props;
  return render(
    <Button data-testid={testId} {...rest}>
      {children}
    </Button>
  );
};

const getRender = () => screen.getByTestId(testId);

describe("Button", () => {
  it("should render without errors", () => {
    expect(renderComponent).not.toThrow();
  });
  it("should display text in the button", () => {
    renderComponent();
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  it("should disable <button> when disabled", () => {
    const { container, rerender } = renderComponent({ disabled: true });
    expect(container.querySelector("button")).toHaveAttribute("disabled");
    rerender(<Button disabled={false} />);
    expect(container.querySelector("button")).not.toHaveAttribute("disabled");
  });

  it("should disable <button> on loading", () => {
    const handleClick = jest.fn();
    renderComponent({ loading: true, onClick: handleClick });
    const button = getRender();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("must add the passed className", () => {
    const customClass = "custom-class";
    renderComponent({ className: customClass });
    expect(getRender()).toHaveClass(customClass);
  });

  it('onClick should work if the button is not disabled', () => {
    const handleClick = jest.fn();
    renderComponent({ onClick: handleClick });
    const button = getRender();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
