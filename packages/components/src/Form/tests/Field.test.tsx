import { render, fireEvent } from "@testing-library/react";
import { Form } from "../Form";
import { useForm } from "../useForm";
import Field from "../Field";

describe("Field", () => {
  const setup = (props?: any) => {
    const Wrapper = () => {
      const form = useForm({
        initialValues: { username: "John" }
      });

      return (
        <Form form={form}>
          <Field name="username" {...props}>
            <input data-testid="input" />
          </Field>
        </Form>
      );
    };
    return render(<Wrapper />);
  };

  it("renders with initial value", () => {
    const { getByTestId } = setup();
    const input = getByTestId("input") as HTMLInputElement;
    expect(input.value).toBe("John");
  });

  it("updates local value onChange", () => {
    const { getByTestId } = setup();
    const input = getByTestId("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Jane" } });
    expect(input.value).toBe("Jane");
  });
});
