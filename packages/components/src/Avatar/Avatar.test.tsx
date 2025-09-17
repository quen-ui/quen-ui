import { PropsWithChildren } from "react";
import { screen } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Avatar from "./Avatar";
import type { IAvatarProps } from "./types";

const testId = "avatar";

const renderComponent = (props: PropsWithChildren<IAvatarProps> = {}) => {
  return render(<Avatar data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Avatar", () => {
  it("renders without errors", () => {
    expect(renderComponent).not.toThrow();
  });


  it("renders children instead of icon when provided", () => {
    renderComponent({ children: <span data-testid="child">C</span> });
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders initials when name is provided", () => {
    renderComponent({ name: "John Doe" });
    expect(getRender().textContent).toContain("JD");
  });

  it("renders img when src is provided", () => {
    renderComponent({ src: "avatar.png", alt: "Avatar image" });
    const img = screen.getByAltText("Avatar image") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("avatar.png");
  });

  it("renders label with name and description when label=true", () => {
    renderComponent({
      name: "John Doe",
      description: "Developer",
      label: true
    });
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  it("applies className and style props", () => {
    renderComponent({
      className: "custom-avatar",
      style: { background: "red" }
    });
    expect(getRender()).toHaveClass("custom-avatar");
    expect(getRender()).toHaveStyle({ background: "red" });
  });
});
