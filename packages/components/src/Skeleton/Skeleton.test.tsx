import { screen } from "@testing-library/react"
import { render } from "../../../../tests/renderUtil";
import "jest-styled-components";
import Skeleton from "./Skeleton";

const getStyles = (el: HTMLElement) => window.getComputedStyle(el);

describe("Skeleton", () => {
  test("renders a basic skeleton", () => {
    render(<Skeleton/>);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  test("applies custom width and height", () => {
    render(<Skeleton width={120} height={50}/>);
    const skeleton = screen.getByTestId("skeleton");

    expect(getStyles(skeleton).width).toBe("120px");
    expect(getStyles(skeleton).height).toBe("50px");
  });

  test("renders circle variant", () => {
    render(<Skeleton variant="circle" width={40} height={40}/>);
    const skeleton = screen.getByTestId("skeleton");

    expect(skeleton).toHaveStyleRule("border-radius", "50%");
  });

  test("renders text variant as 1 line by default", () => {
    render(<Skeleton variant="text"/>);
    const skeleton = screen.getByTestId("skeleton");

    expect(getStyles(skeleton).height).toBe("1em");
  });

  test("renders multiple text lines", () => {
    render(<Skeleton variant="text" lines={3}/>);

    const lines = screen.getAllByTestId("skeleton-line");

    expect(lines).toHaveLength(3);
    lines.forEach((line) => {
      expect(line).toBeInTheDocument();
      expect(getStyles(line).height).toBe("1em");
    });
  });

  test("applies shimmer animation", () => {
    render(<Skeleton animation="shimmer"/>);
    const skeleton = screen.getByTestId("skeleton");

    expect(skeleton).toHaveStyleRule(
      "background",
      expect.stringContaining("linear-gradient")
    );
  });

  test("removes animations when animation=none", () => {
    render(<Skeleton animation="none"/>);
    const skeleton = screen.getByTestId("skeleton");

    expect(skeleton).not.toHaveStyleRule("animation");
  });

  test("renders children when loading=false", () => {
    render(
      <Skeleton loading={false}>
        <span data-testid="child">Loaded</span>
      </Skeleton>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

})
