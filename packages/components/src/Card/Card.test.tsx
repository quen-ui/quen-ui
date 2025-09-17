import { screen } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Card from "./Card";
import type { ICardProps } from "./types";

const testId = "card";

const renderComponent = (props: ICardProps = {}) => {
  return render(<Card data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Card", () => {
  it("renders without errors", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders title", () => {
    renderComponent({ title: "Title" });
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("renders extra content as Button", () => {
    renderComponent({ title: "Card Title", extra: "Extra" });
    expect(screen.getByRole("button", { name: "Extra" })).toBeInTheDocument();
  });

  it("renders children inside CardContentStyled", () => {
    renderComponent({ children: <div data-testid="child">Content</div> });
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders cover", () => {
    renderComponent({ cover: <div data-testid="cover">Cover</div> });
    expect(screen.getByTestId("cover")).toBeInTheDocument();
  });

  it("renders leftContent inside header", () => {
    renderComponent({ title: "Card Title", leftContent: <span data-testid="left">Left</span> });
    expect(screen.getByTestId("left")).toBeInTheDocument();
  });

  it("renders actionContent inside CardActionsStyled", () => {
    renderComponent({ actionContent: <div data-testid="action">Action</div> });
    expect(screen.getByTestId("action")).toBeInTheDocument();
  });

  it("applies size and className props", () => {
    renderComponent({
      className: "custom-card",
      classNameHeader: "custom-header",
      classNameContent: "custom-content",
      classNameAction: "custom-action",
      title: "Title",
      actionContent: <div>Action</div>,
    });

    const card = getRender();
    expect(card).toHaveClass("custom-card");
    expect(screen.getByText("Title").parentElement).toHaveClass("custom-header");
    expect(screen.getByText("Action").parentElement).toHaveClass("custom-action");
  });
});
