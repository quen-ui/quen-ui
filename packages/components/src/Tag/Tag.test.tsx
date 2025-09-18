import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Tag from "./Tag";
import type { ITagProps } from "./types";

const testId = "tag";

const renderComponent = (props: ITagProps) =>
  render(<Tag data-testid={testId} {...props} />);

const getRender = () => screen.getByTestId(testId);

describe("Tag", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({ children: "Tag"})).not.toThrow();
  });

  it("renders children correctly", () => {
    renderComponent({ children: "Tag" });
    expect(screen.getByText("Tag")).toBeInTheDocument();
  });

  it("handles onClick event", () => {
    const onClick = jest.fn();
    renderComponent({ onClick, children: "Tag" });
    const tag = getRender()
    fireEvent.click(tag);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders icon when provided", () => {
    const Icon = <span data-testid="icon">Icon</span>;
    renderComponent({ icon: Icon, children: "Tag" });
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders closable button when closable prop is true", () => {
    renderComponent({ closable: true, children: "Tag" });
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  it("calls onClickClose when close button is clicked", () => {
    const onClickClose = jest.fn();
    renderComponent({ closable: true, onClickClose, children: "Tag" });
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(onClickClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClickClose when disabled", () => {
    const onClickClose = jest.fn();
    renderComponent({
      closable: true,
      onClickClose,
      disabled: true,
      children: "Tag"
    });
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(onClickClose).not.toHaveBeenCalled();
  });

  it("applies className and props correctly", () => {
    const { container } = renderComponent({
      className: "my-class",
     children: "Tag"
    });
    expect(container.firstChild).toHaveClass("my-class");
  });
});
