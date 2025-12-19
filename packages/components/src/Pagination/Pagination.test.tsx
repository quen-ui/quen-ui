import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("does not render if total <= 0", () => {
    const { container } = render(<Pagination total={0} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders pages by default", () => {
    render(<Pagination total={50} pageSize={10} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("marks the active page", () => {
    render(<Pagination total={50} pageSize={10} defaultValue={2} />);
    const activePage = screen.getByText("2");
    expect(activePage).toHaveStyle({ background: "#A798F3" });
  });

  it("calls onChange when the page is clicked", () => {
    const onChange = jest.fn();
    render(<Pagination total={50} pageSize={10} onChange={onChange} />);
    fireEvent.click(screen.getByText("3"));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("calls onPreviousPage and onNextPage", () => {
    const onPrev = jest.fn();
    const onNext = jest.fn();
    render(
      <Pagination
        total={50}
        pageSize={10}
        defaultValue={2}
        onPreviousPage={onPrev}
        onNextPage={onNext}
      />
    );

    fireEvent.click(screen.getByTestId("pagination-prev-page"));
    expect(onPrev).toHaveBeenCalled();

    fireEvent.click(screen.getByTestId("pagination-next-page"));
    expect(onNext).toHaveBeenCalled();
  });

  it("disables buttons when disabled=true", () => {
    render(<Pagination total={50} pageSize={10} disabled />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  it("renders custom elements via itemRender", () => {
    const itemRender = (page: number, type: string) => (
      <div data-testid={`custom-${type}-${page}`}>{page}</div>
    );

    render(<Pagination total={30} pageSize={10} itemRender={itemRender} />);

    expect(screen.getByTestId("custom-page-1")).toBeInTheDocument();
    expect(screen.getByTestId("custom-next-0")).toBeInTheDocument();
  });

  it("displays ellipsis when there are a large number of pages", () => {
    render(<Pagination total={200} pageSize={10} defaultValue={10} />);
    expect(screen.getAllByText("...").length).toBeGreaterThan(0);
  });
});
