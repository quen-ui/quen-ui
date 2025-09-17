import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Breadcrumbs from "./Breadcrumbs";
import type { IBreadcrumbItemDefault, IBreadcrumbsProps } from "./types";

const testId = "breadcrumbs";

interface TestItem extends IBreadcrumbItemDefault {
  label: string;
}

const items: TestItem[] = [
  { label: "Home" },
  { label: "Category" },
  { label: "Product" }
];

const renderComponent = (
  props: IBreadcrumbsProps<TestItem> = { items: [] }
) => {
  return render(<Breadcrumbs data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Breadcrumbs", () => {
  it("renders without errors", () => {
    expect(renderComponent).not.toThrow();
  });

  it("renders no items when items prop is empty", () => {
    renderComponent({ items: [] });
    expect(getRender().textContent).toBe("");
  });

  it("renders all items with default separator", () => {
    renderComponent({ items });
    const content = getRender().textContent || "";
    expect(content).toContain("Home");
    expect(content).toContain("Category");
    expect(content).toContain("Product");
    expect(content).toContain("/");
  });

  it("renders custom separator", () => {
    renderComponent({ items, separator: ">" });
    const content = getRender().textContent || "";
    expect(content).toContain("Home>Category>Product");
  });

  it("calls onItemClick and getItemOnClick when item clicked", () => {
    const onItemClick = jest.fn();
    const getItemOnClick = jest.fn().mockReturnValue(jest.fn());
    renderComponent({
      items,
      onItemClick,
      getItemOnClick: (item) => getItemOnClick(item)
    });

    const firstItem = screen.getByText("Home");
    fireEvent.click(firstItem);
    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(getItemOnClick).toHaveBeenCalledWith(items[0]);
  });

  it("applies className and classNameItem", () => {
    renderComponent({
      items,
      className: "breadcrumbs-class",
      classNameItem: "item-class"
    });
    const container = getRender();
    expect(container).toHaveClass("breadcrumbs-class");
    const itemElements = screen.getAllByText(/Home|Category|Product/);
    itemElements.forEach((el) =>
      expect(el.parentElement?.parentElement).toHaveClass("item-class")
    );
  });
});
