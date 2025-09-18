import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Select from "./Select";
import { type TSelectProps } from "./types";

const items = [
  { id: "1", label: "Option 1", value: "1" },
  { id: "2", label: "Option 2", value: "2" }
];

const testId = "select";

const renderComponent = (props: TSelectProps) => {
  return render(<Select data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("SelectComponent", () => {
  it("renders without errors", () => {
    expect(() => renderComponent({ items })).not.toThrow();
  });

  it("renders label and required indicator", () => {
    renderComponent({ label: "Select Label", required: true, items });
    expect(screen.getByText("Select Label")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders options correctly", () => {
    renderComponent({ open: true, items });
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("calls handleChange on option select", () => {
    const onChange = jest.fn();
    renderComponent({ onChange, open: true, items });
    const option = screen.getByText("Option 1");
    fireEvent.click(option);
    expect(onChange).toHaveBeenCalled();
  });

  it("applies disabled prop", () => {
    renderComponent({ disabled: true, items });
    expect(getRender().getElementsByTagName("input").item(0)).toBeDisabled();
  });

  it("displays error message", () => {
    renderComponent({ error: "Error occurred", items });
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("renders multi-select mode", () => {
    renderComponent({ multi: true, items });
    expect(getRender()).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    renderComponent({ placeholder: "Select an option", items });
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });
});
