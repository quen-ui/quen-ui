import { screen } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Badge from "./Badge";
import type { IBadgeProps } from "./types";

const testId = "badge";

const renderComponent = (props: IBadgeProps = { text: 1 }) => {
  return render(<Badge data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Badge", () => {
  it("renders without errors", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders text inside BadgeStyled", () => {
    renderComponent({ text: "New" });
    expect(getRender()).toHaveTextContent("New");
  });

  it("renders leftContent and rightContent", () => {
    renderComponent({
      text: "Alert",
      leftContent: <span data-testid="left">L</span>,
      rightContent: <span data-testid="right">R</span>,
    });
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  it("renders children inside BadgeWrapper", () => {
    renderComponent({ children: <div data-testid="child">Child</div>, text: "WithChild" });
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(getRender()).toHaveTextContent("WithChild");
  });

  it("applies color", () => {
    renderComponent({
      text: "Styled",
      color: "blue",
    });
    const badge = getRender();
    expect(badge).toHaveStyle({ background: "blur" });
    expect(badge).toHaveTextContent("Styled");
  });


  it("applies className and style props", () => {
    renderComponent({
      text: "Styled",
      className: "custom-class",
      style: { background: "yellow" },
    });
    const badge = getRender();
    expect(badge).toHaveClass("custom-class");
    expect(badge).toHaveStyle({ background: "yellow" });
    expect(badge).toHaveTextContent("Styled");
  });
});
