import React from "react";
import { render, screen } from "@testing-library/react";
import FieldArray from "../FieldArray";
import { useFormContext } from "../Form";

jest.mock("../Form", () => ({
  useFormContext: jest.fn()
}));

describe("FieldArray", () => {
  const registerField = jest.fn();
  const unregisterField = jest.fn();
  const arrayHelpersMock = jest.fn(() => ({
    add: jest.fn(),
    remove: jest.fn(),
    insert: jest.fn()
  }));
  const getFieldsValue = jest.fn(() => ({
    users: ["Alice", "Bob"]
  }));

  beforeEach(() => {
    jest.clearAllMocks();
    (useFormContext as jest.Mock).mockReturnValue({
      registerField,
      unregisterField,
      arrayHelpers: arrayHelpersMock,
      getFieldsValue
    });
  });

  it("calls registerField on mount and unregisterField on unmount", () => {
    const { unmount } = render(
      <FieldArray name="users">{() => null}</FieldArray>
    );

    expect(registerField).toHaveBeenCalledWith("users", { defaultValue: [] });

    unmount();
    expect(unregisterField).toHaveBeenCalledWith("users");
  });

  it("calls children with arrayHelpers and items", () => {
    const childrenMock = jest.fn(() => <div data-testid="child" />);

    render(<FieldArray name="users">{childrenMock}</FieldArray>);

    expect(arrayHelpersMock).toHaveBeenCalledWith("users");
    expect(childrenMock).toHaveBeenCalledWith(
      expect.objectContaining({
        add: expect.any(Function),
        remove: expect.any(Function),
        insert: expect.any(Function)
      }),
      [{ value: "Alice" }, { value: "Bob" }]
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("projestdes empty array when no value found", () => {
    getFieldsValue.mockReturnValueOnce({} as any);
    const childrenMock = jest.fn(() => null);

    render(<FieldArray name="users">{childrenMock}</FieldArray>);

    expect(childrenMock).toHaveBeenCalledWith(expect.any(Object), []);
  });
});
