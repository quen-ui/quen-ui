import EventBus from "./EventBus";

describe("EventBus", () => {
  it("should register and emit events", () => {
    const bus = new EventBus();
    const handler = jest.fn();

    bus.on("test", handler);
    bus.emit("test", 1, 2);

    expect(handler).toHaveBeenCalledWith(1, 2);
  });

  it("should remove handlers", () => {
    const bus = new EventBus();
    const handler = jest.fn();

    bus.on("test", handler);
    bus.off("test", handler);
    bus.emit("test");

    expect(handler).not.toHaveBeenCalled();
  });
});
