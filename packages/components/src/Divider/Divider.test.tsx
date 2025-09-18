import { screen } from "@testing-library/react";
import type { PropsWithChildren, } from "react";
import { render } from "../../../../tests/renderUtil";
import Divider from "./Divider";
import type { IDividerProps } from "./types";

const testId = "divider";

const renderComponent = (
  props: PropsWithChildren<IDividerProps> = { direction: "horizontal" }
) => {
  return render(<Divider data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Divider", () => {
  it("renders without errors", () => {
    expect(renderComponent).not.toThrow();
  });

  it("has role separator", () => {
    renderComponent();
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders children", () => {
    renderComponent({ children: <span data-testid="child">Content</span>, direction: "horizontal" });
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("applies height, width, className props", () => {
    renderComponent({
      height: "2px",
      width: "50%",
      direction: "vertical",
      className: "custom-class"
    });

    const divider = getRender();
    expect(divider).toHaveAttribute("height", "2px");
    expect(divider).toHaveAttribute("width", "50%");
    expect(divider).toHaveClass("custom-class");
  });
});
