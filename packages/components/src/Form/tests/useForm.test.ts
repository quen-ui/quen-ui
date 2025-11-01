import { renderHook, act } from "@testing-library/react";
import { useForm } from "../useForm";

describe("useForm", () => {
  it("initializes with default values", () => {
    const { result } = renderHook(() =>
      useForm<{ name: string }>({ initialValues: { name: "Alice" } })
    );
    expect(result.current.getFieldValue("name")).toBe("Alice");
  });

  it("registers and unregisters a field", () => {
    const { result } = renderHook(() => useForm<{ username: string }>());
    act(() =>
      result.current.registerField("username", {
        defaultValue: "Bob",
        rules: [],
        validate: jest.fn()
      })
    );
    expect(result.current.fields.username).toBeDefined();
    act(() => result.current.unregisterField("username"));
    expect(result.current.fields.username).toBeUndefined();
  });

  it("sets and gets field values correctly", () => {
    const { result } = renderHook(() => useForm<{ age: number }>());
    act(() => result.current.setFieldValue("age", 25));
    expect(result.current.getFieldValue("age")).toBe(25);
  });

  it("updates multiple fields with setFieldsValue", () => {
    const { result } = renderHook(() =>
      useForm<{ first: string; last: string }>()
    );
    act(() => result.current.setFieldsValue({ first: "John", last: "Doe" }));
    expect(result.current.getFieldsValue()).toEqual({
      first: "John",
      last: "Doe"
    });
  });

  it("removes errors when updating values", () => {
    const { result } = renderHook(() =>
      useForm<{ email: string }>({
        initialValues: { email: "" }
      })
    );
    act(() =>
      result.current.setErrors([
        { name: "email", errors: ["Invalid"], warnings: [] }
      ])
    );
    expect(result.current.getFieldError("email")).toEqual(["Invalid"]);
    act(() => result.current.setFieldValue("email", "a@b.com"));
    expect(result.current.getFieldError("email")).toEqual([]);
  });

  it("calls validation function when triggered", () => {
    const validate = jest.fn();
    const { result } = renderHook(() => useForm<{ test: string }>());
    act(() =>
      result.current.registerField("test", {
        defaultValue: "",
        rules: [],
        validate
      })
    );
    act(() => result.current.triggerValidation("test", "ok", { test: "ok" }));
    expect(validate).toHaveBeenCalledWith("ok", { test: "ok" });
  });

  it("validates all fields with onValidateFields", async () => {
    const { result } = renderHook(() => useForm<{ a: string; b: string }>());
    act(() => {
      result.current.registerField("a", {
        defaultValue: "",
        validate: jest.fn(() => [])
      });
      result.current.registerField("b", {
        defaultValue: "",
        validate: jest.fn(() =>[ "error"])
      });
    });
    const isValid = await result.current.onValidateFields();
    expect(isValid).toBe(false);
  });

  it("resets fields to initial values", () => {
    const { result } = renderHook(() =>
      useForm<{ name: string }>({ initialValues: { name: "Test" } })
    );
    act(() => result.current.setFieldValue("name", "Changed"));
    expect(result.current.getFieldValue("name")).toBe("Changed");
    act(() => result.current.resetFields());
    expect(result.current.getFieldValue("name")).toBe("Test");
  });

  it("handles arrayHelpers add/remove/insert", () => {
    const { result } = renderHook(() =>
      useForm<{ items: string[] }>({ initialValues: { items: [] } })
    );
    const helpers = result.current.arrayHelpers("items");
    act(() => helpers.add("A"));
    act(() => helpers.add("B"));
    act(() => helpers.insert(1, "X"));
    act(() => helpers.remove(0));

    expect(result.current.getFieldValue("items")).toEqual(["X", "B"]);
  });

  it("registers and notifies subscribers", () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useForm<{ val: number }>());
    act(() =>
      result.current.registerSubscribe("val", callback)
    );
    act(() => result.current.setFieldValue("val", 10));
    expect(callback).toHaveBeenCalled();
    act(() => result.current.unregisterSubscribe("val"));
  });

  it("submit calls callback if provided", () => {
    const cb = jest.fn();
    const { result } = renderHook(() => useForm());
    act(() => result.current.setSubmitCallback(cb));
    act(() => result.current.submit());
    expect(cb).toHaveBeenCalled();
  });
});
