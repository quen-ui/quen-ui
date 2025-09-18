import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Drawer from "./Drawer";
import type { IDrawerProps } from "./types";

jest.mock("@quen-ui/hooks", () => ({
  useOnClickOutside: (ref: any, handler: () => void) => {
    ref.current = { handler };
  }
}));

const testId = "drawer";

const renderComponent = (
  props: IDrawerProps = { open: false, onClose: jest.fn() }
) => {
  return render(<Drawer data-testid={testId} {...props} />);
};

describe("Drawer", () => {
  it("renders without errors", () => {
    expect(() =>
      renderComponent({ open: true, onClose: jest.fn() })
    ).not.toThrow();
  });

  it("does not render when open=false", () => {
    const { queryByRole } = renderComponent({
      open: false,
      onClose: jest.fn()
    });
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders when open=true", () => {
    renderComponent({ open: true, onClose: jest.fn() });
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("renders title and close button", () => {
    const onClose = jest.fn();
    renderComponent({ open: true, title: "Title", onClose });
    expect(screen.getByText("Title")).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders children", () => {
    renderComponent({
      open: true,
      children: <div data-testid="child">Content</div>,
      onClose: jest.fn()
    });
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("applies className props", () => {
    renderComponent({
      open: true,
      className: "custom-drawer",
      onClose: jest.fn()
    });
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveClass("custom-drawer");
  });

  it("does not call onClose when noCloseOnClickOutside=true", () => {
    const onClose = jest.fn();
    renderComponent({ open: true, onClose, noCloseOnClickOutside: true });
    fireEvent.mouseDown(document.body);
    expect(onClose).not.toHaveBeenCalled();
  });
});
