import { render } from "../../../../tests/renderUtil";
import {
  NotificationInstance,
  showNotification,
  hideNotification,
  updateNotification,
  cleanNotifications
} from "./NotificationInstance";
import notificationsStore from "./NotificationsStore";

jest.mock("./NotificationsStore", () => ({
  data: [],
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  updateNotifications: jest.fn()
}));

describe("NotificationInstance", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    jest.clearAllMocks();
  });

  it("renders NotificationInstance and creates container", () => {
    render(<NotificationInstance />);

    const container = document.getElementById("quen-ui-notifications");
    expect(container).toBeInTheDocument();
  });

  it("calls showNotification and adds notification", () => {
    const id = showNotification({ message: "Test" });
    expect(typeof id).toBe("string");
    expect(notificationsStore.updateNotifications).toHaveBeenCalled();
  });

  it("calls hideNotification and removes notification", () => {
    notificationsStore.data.push({
      id: "1",
      message: "Msg",
      onClose: jest.fn()
    });
    hideNotification("1");
    expect(notificationsStore.updateNotifications).toHaveBeenCalled();
    expect(notificationsStore.data.length).toBe(1); // так как мок не меняет data
  });

  it("calls updateNotification and updates notification", () => {
    notificationsStore.data.push({ id: "1", message: "Old" });
    updateNotification({ id: "1", message: "New" });
    expect(notificationsStore.updateNotifications).toHaveBeenCalled();
  });

  it("calls cleanNotifications and clears all notifications", () => {
    cleanNotifications();
    expect(notificationsStore.updateNotifications).toHaveBeenCalledWith([]);
  });
});
