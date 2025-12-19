import { renderHook, act } from "@testing-library/react";
import { useWatch } from "../useWatch";
import type { IFormInstance } from "../types";

describe("useWatch", () => {
  let mockForm: IFormInstance<{ username: string }>;
  let subscribers: Record<string, (v: any) => void>;

  beforeEach(() => {
    subscribers = {};

    mockForm = {
      getFieldValue: jest.fn((name) => {
        if (name === "username") return "John";
        return undefined;
      }),
      registerSubscribe: jest.fn((name, cb) => {
        subscribers[name] = cb;
      }),
      unregisterSubscribe: jest.fn((name) => {
        delete subscribers[name];
      }),
    } as unknown as IFormInstance<{ username: string }>;
  });

  it("returns initial value from form", () => {
    const { result } = renderHook(() => useWatch("username", mockForm));
    expect(result.current).toBe("John");
    expect(mockForm.getFieldValue).toHaveBeenCalledWith("username");
  });

  it("registers and unregisters subscription on mount/unmount", () => {
    const { unmount } = renderHook(() => useWatch("username", mockForm));

    expect(mockForm.registerSubscribe).toHaveBeenCalledWith(
      "username",
      expect.any(Function)
    );

    unmount();
    expect(mockForm.unregisterSubscribe).toHaveBeenCalledWith("username");
  });

  it("updates value when subscription callback is triggered", () => {
    const { result } = renderHook(() => useWatch("username", mockForm));

    act(() => {
      subscribers["username"]("Jane");
    });

    expect(result.current).toBe("Jane");
  });

  it("does not update if other field emits", () => {
    const { result } = renderHook(() => useWatch("username", mockForm));

    act(() => {
      subscribers["otherField"]?.("Test");
    });
    
    expect(result.current).toBe("John");
  });
});
