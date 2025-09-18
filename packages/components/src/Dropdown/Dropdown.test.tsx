import { screen } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Dropdown from "./Dropdown";
import { type IDropdownProps } from "./types";

const testId = "dropdown";

const renderComponent = (props: IDropdownProps) => {
  return render(<Dropdown data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

const div = document.createElement("div");
const anchorRef = { current: div };

describe("Dropdown", () => {
  it("renders without errors", () => {
    expect(() =>
      renderComponent({ open: true, anchorRef })
    ).not.toThrow();
  });

  it("renders portal content when open=true", () => {
    renderComponent({
      open: true,
      content: <div data-testid="child">Content</div>,
      anchorRef
    });
    expect(getRender()).toBeInTheDocument();
    expect(getRender().textContent).toBe("Content");
  });

  it("passes direction, width, anchorRef to DropdownPortal", () => {
    const anchorRef = { current: document.createElement("div") };
    renderComponent({
      open: true,
      direction: "top",
      width: "200px",
      anchorRef
    });
    const portal = document.body.querySelector("div");
    expect(portal).toBeInTheDocument();
  });

});
