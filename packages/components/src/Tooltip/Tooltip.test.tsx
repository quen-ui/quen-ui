import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Tooltip from "./Tooltip";
import type { ITooltipProps } from "./types";

const testId = "tooltip";

const renderComponent = (props: ITooltipProps) =>
  render(<Tooltip data-textid={testId} {...props} />);

describe("Tooltip", () => {
  it("renders without crashing", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders children correctly", () => {
    renderComponent({ children: <button>Hover me</button>, text: "Tooltip" });
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });

  it("renders tooltip text when show is true", () => {
    renderComponent({
      text: "Tooltip",
      show: true,
      children: <button>Hover me</button>,
    })
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
  });

  it("shows tooltip on mouse enter when uncontrolled", () => {
    renderComponent({
      text: "Tooltip",
      children: <button>Hover me</button>,
    });
    const child = screen.getByText("Hover me");
    fireEvent.mouseEnter(child);
    expect(screen.getByText("Tooltip")).toBeInTheDocument();
    fireEvent.mouseLeave(child);
  });

  it("applies className, width, zIndex", () => {
    render(
      <Tooltip
        text="Tooltip"
        classNameContent="custom-class"
        width={200}
        zIndex={999}
       >
        <span>Child</span>
      </Tooltip>
    );
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveClass("custom-class");
    expect(tooltip).toHaveStyle({ width: "200px", zIndex: "999" });
  });
});
