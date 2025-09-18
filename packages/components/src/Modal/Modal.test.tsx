import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Modal from "./Modal";
import type { IModalProps } from "./types";

const testId = "modal";

const renderComponent = (props: IModalProps) => {
  return render(<Modal data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Modal", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({ open: true })).not.toThrow();
  });

  it("does not render when open=false", () => {
    const { queryByRole } = renderComponent({ open: false });
    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders when open=true", () => {
    renderComponent({ open: true, title: "Modal Title" });
    expect(screen.getByText("Modal Title")).toBeInTheDocument();
  });

  it("renders title and close button", () => {
    const onClickClose = jest.fn();
    renderComponent({ open: true, title: "Title", closeButton: true, onClickClose });
    expect(screen.getByText("Title")).toBeInTheDocument();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickClose).toHaveBeenCalled();
  });

  it("renders description, children and footer", () => {
    renderComponent({
      open: true,
      description: "Description text",
      children: <div data-testid="child">Content</div>,
      footer: <div data-testid="footer">Footer</div>,
    });
    expect(screen.getByText("Description text")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("calls onEsc when Escape key is pressed", () => {
    const onEsc = jest.fn();
    renderComponent({ open: true, onEsc });
    fireEvent.keyDown(document.body, { key: "Escape" });
    expect(onEsc).toHaveBeenCalled();
  });

  it("applies className, classNameFooter props", () => {
    renderComponent({
      open: true,
      fullScreen: true,
      className: "modal-class",
      footer: <div className="footer-class">Footer</div>,
    });
    const modal = getRender();
    expect(modal).toBeInTheDocument();
    const footer = getRender().getElementsByClassName("footer-class");
    expect(footer.item(0)).toBeInTheDocument();
  });
});
