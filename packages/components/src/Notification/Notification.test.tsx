import { screen, fireEvent, act } from "@testing-library/react";
import { render } from "../../../../tests/renderUtil";
import Notification from "./Notification";
import { type INotificationParams, NOTIFICATION_STATUSES } from "./types";

jest.useFakeTimers();

const testId = "notification";

const renderComponent = (props: INotificationParams) => {
  return render(<Notification data-testid={testId} {...props} />);
};

const getRender = () => screen.getByTestId(testId);

describe("Notification", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it("renders without errors", () => {
    expect(() => renderComponent({ message: "Test message" })).not.toThrow();
  });

  it("renders message when no title", () => {
    renderComponent({ message: "Test message" });
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("renders title and message", () => {
    renderComponent({ title: "Title", message: "Message" });
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Message")).toBeInTheDocument();
  });

  it("renders status icons", () => {
    NOTIFICATION_STATUSES.forEach((status) => {
      renderComponent({ status, icon: true, message: "Msg" });
      const icon = document.querySelector(".quen-ui__notification-icon");
      expect(icon).toBeInTheDocument();
    });
  });

  it("calls onClose when close button clicked", () => {
    const onClose = jest.fn();
    renderComponent({ message: "Msg", onClose });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClose).toHaveBeenCalled();
  });

  it("auto closes after default timeout", () => {
    const onClose = jest.fn();
    renderComponent({ message: "Msg", onClose, autoClose: true });
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    expect(onClose).toHaveBeenCalled();
  });

  it("auto closes after custom timeout", () => {
    const onClose = jest.fn();
    renderComponent({ message: "Msg", onClose, autoClose: 1000 });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onClose).toHaveBeenCalled();
  });

  it("renders custom icon", () => {
    const CustomIcon = () => <span data-testid="custom-icon">Icon</span>;
    renderComponent({ message: "Msg", icon: <CustomIcon /> });
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("applies className prop", () => {
    renderComponent({ message: "Msg", className: "custom-class" });
    expect(getRender()).toHaveClass("custom-class");
  });
});
