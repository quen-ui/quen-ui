import { PropsWithChildren } from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Alert from "./Alert";
import type { IAlertProps } from "./types";

const testId = "alert";

const renderComponent = (props: PropsWithChildren<IAlertProps> = {}) => {
  return render(
    <Alert data-testid={testId}  {...props} />
  );
};

const getRender = () => screen.getByTestId(testId);

describe("Alert", () => {
  it("should render without errors", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders with title", () => {
    renderComponent({ title: "Alert" });
    expect(getRender()).toHaveTextContent("Alert");
  });

  it("renders with description", () => {
    renderComponent({ description: "Description" });
    expect(getRender()).toHaveTextContent("Description");
  });

  it("renders with icon", () => {
    renderComponent({ icon: <span data-testid="icon"></span> });
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders with action", () => {
    renderComponent({ action: <button data-testid="action">Action</button> });
    expect(screen.getByTestId("action")).toBeInTheDocument();
  });

  it("renders with closable button", () => {
    renderComponent({ closable: true });
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  it("calls onClose and unmounts when close button clicked", () => {
    const onClose = jest.fn();
    renderComponent({ closable: true, onClose });
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });


  it("supports className and style props", () => {
    renderComponent({
      className: "custom-class",
      style: { background: "red" },
    });
    expect(getRender()).toHaveClass("custom-class");
    expect(getRender()).toHaveStyle({ background: "red" });
  });
});
