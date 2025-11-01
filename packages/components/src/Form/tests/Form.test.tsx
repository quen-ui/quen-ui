import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Form, useFormContext } from "../Form";

describe("Form component", () => {
  const mockForm = {
    onValidateFields: jest.fn(),
    getFieldsValue: jest.fn(),
    getFieldsError: jest.fn(),
    setSubmitCallback: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("projestdes form context with merged messages and triggers", () => {
    const customMessages = { required: "Custom required" };
    let contextValue: any;

    const TestComponent = () => {
      contextValue = useFormContext();
      return <div>Child</div>;
    };

    render(
      <Form
        name="test-form"
        form={mockForm as any}
        validateMessages={customMessages}
        trigger="onBlur"
        validateTrigger="onFocus"
      >
        <TestComponent />
      </Form>
    );

    expect(contextValue.validateTrigger).toBe("onFocus");
    expect(contextValue.trigger).toBe("onBlur");
    expect(contextValue.validateMessages).toEqual(
      expect.objectContaining(customMessages)
    );
  });

  it("calls onFinish when validation passes", async () => {
    const onFinish = jest.fn();
    mockForm.onValidateFields.mockResolvedValue(true);
    mockForm.getFieldsValue.mockReturnValue({ name: "John" });

    render(
      <Form onFinish={onFinish} form={mockForm as any}>
        <button type="submit">Submit</button>
      </Form>
    );

    fireEvent.submit(screen.getByRole("form"));

    await Promise.resolve();

    expect(mockForm.onValidateFields).toHaveBeenCalled();
    expect(onFinish).toHaveBeenCalledWith({ name: "John" });
  });

  it("calls onFinishFailed when validation fails", async () => {
    const onFinishFailed = jest.fn();
    mockForm.onValidateFields.mockResolvedValue(false);
    mockForm.getFieldsValue.mockReturnValue({ name: "John" });
    mockForm.getFieldsError.mockReturnValue([{ name: "name", errors: ["required"] }]);

    render(
      <Form onFinishFailed={onFinishFailed} form={mockForm as any}>
        <button type="submit">Submit</button>
      </Form>
    );

    fireEvent.submit(screen.getByRole("form"));
    await Promise.resolve();

    expect(onFinishFailed).toHaveBeenCalledWith(
      { name: "John" },
      [{ name: "name", errors: ["required"] }]
    );
  });

  it("calls form.setSubmitCallback once on mount", () => {
    render(<Form form={mockForm as any}><div>Child</div></Form>);
    expect(mockForm.setSubmitCallback).toHaveBeenCalledTimes(1);
    expect(typeof mockForm.setSubmitCallback.mock.calls[0][0]()).toBe("function");
  });
});
