import { screen } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Progress from "./Progress";
import { type IProgressProps } from "./types";

const testId = "progress";

const renderComponent = (props: IProgressProps) => {
  return render(<Progress data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Progress", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({ value: 50 })).not.toThrow();
  });

  it("sets aria-valuenow correctly", () => {
    renderComponent({ value: 70 });
    const progress = getRender();
    expect(progress).toHaveAttribute("aria-valuenow", "70");
    expect(progress).toHaveAttribute("aria-valuemin", "0");
    expect(progress).toHaveAttribute("aria-valuemax", "100");
  });

  it("renders label if provided", () => {
    renderComponent({ value: 40, label: "Loading" });
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("renders showInfo if true", () => {
    renderComponent({ value: 25, showInfo: true });
    expect(screen.getByText("25%")).toBeInTheDocument();
  });

  it("applies className and style props", () => {
    renderComponent({ value: 50, className: "custom-class", style: { marginTop: 10 } });
    const progress = getRender();
    expect(progress).toHaveClass("custom-class");
    expect(progress).toHaveStyle("margin-top: 10px");
  });
});
