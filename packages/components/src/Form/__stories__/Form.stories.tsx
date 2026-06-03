import { StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { Button } from "../../Button";
import { Form } from "../Form";
import Field from "../Field";
import FieldArray from "../FieldArray";
import { TextField } from "../../TextField";
import { Checkbox } from "../../Checkbox";
import { Flex } from "../../Flex";
import { useWatch } from "../useWatch";
import { useForm } from "../useForm";
import type { TFormOnValueChange } from "../types";
import { Modal } from "../../Modal";

export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "centered"
  },
} as StoryObj<typeof Form>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: () => {
    const form = useForm({ initialValues: { user: { email: "1111" } } });
    const email = useWatch("user.email", form);
    useEffect(() => {
      console.log(email);
    }, [email]);

    const handleSubmit = (values: Record<string, any>) => {
      console.log(values);
    };

    return (
      <Form onFinish={handleSubmit} form={form}>
        <Field
          rules={[{ required: true }]}
          validateTrigger="onChange"
          name="user.email"
          validate={(val) =>
            val.includes("test") ? ["Email must not contain 'test'"] : undefined
          }>
          <TextField label="Email" placeholder="you@example.com" />
        </Field>
        <Field name="remember" valuePropName="checked">
          <Checkbox label="Remember me" />
        </Field>
        <FieldArray name="friends">
          {(helpers, items) => (
            <Flex direction="column">
              {items.map((_, index) => (
                <Flex key={index} align="flex-end">
                  <Field name={`friends[${index}].name`}>
                    <TextField
                      label={`Friend #${index + 1}`}
                      placeholder="Name"
                    />
                  </Field>
                  <Button view="ghost" onClick={() => helpers.remove(index)}>
                    x
                  </Button>
                </Flex>
              ))}
              <Button
                type="button"
                view="secondary"
                onClick={() => helpers.add({ name: "" })}>
                Added friend
              </Button>
            </Flex>
          )}
        </FieldArray>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
} as StoryObj<typeof Form>;

export const ExampleDependencies = {
  render: () => {
    const onValueChange: TFormOnValueChange<any> = (changedValues, values) => {
      console.log(changedValues, values);
    };

    const form = useForm({ onValueChange });

    const handleSubmit = (values: Record<string, any>) => {
      console.log(values);
    };

    return (
      <Form onFinish={handleSubmit} form={form}>
        <Field
          rules={[{ required: true }]}
          trigger="onBlur"
          name="user.email"
          validate={(val) =>
            val.includes("test") ? ["Email must not contain 'test'"] : undefined
          }>
          <TextField label="Email" placeholder="you@example.com" />
        </Field>
        <Field
          rules={[{ required: true }]}
          validateTrigger="onChange"
          name="password">
          <TextField label="Pasword" placeholder="password" />
        </Field>
        <Field
          rules={[{ required: true }]}
          validateTrigger="onBlur"
          name="password2"
          dependencies={["password"]}
          validate={(value, values) => {
            if (value !== values.password) {
              return ["The new password that you entered do not match!"];
            }
            return undefined;
          }}>
          <TextField label="Confirm Password" placeholder="password" />
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
} as StoryObj<typeof Form>;

export const ModalForm = {
  render: () => {
    const form = useForm();

    const handleSubmit = () => {
      form.submit();
    };

    const handleFinish = (values: Record<string, any>) => {
      console.log("1", values);
    };
    return (
      <Modal open footer={<Button onClick={handleSubmit}>Submit</Button>}>
        <Form form={form} onFinish={handleFinish} direction="row" gap="m">
          <Field
            name="email"
            rules={[{ required: true, message: "Email is required" }]}>
            <TextField size="s" label="Email" type="email" />
          </Field>
          <Field name="fullName">
            <TextField size="s" label="Full name (optional)" name="fullName" />
          </Field>
        </Form>
      </Modal>
    );
  }
};

export const RenderPropsForm = {
  render: () => {
    const form = useForm();

    const handleSubmit = () => {
      form.submit();
    };

    const handleFinish = (values: Record<string, any>) => {
      console.log("1", values);
    };
    return (
      <Form form={form} onFinish={handleFinish} direction="row" gap="m">
        <Field
          name="email"
          rules={[{ required: true, message: "Email is required" }]}>
          {({ value, onChange, error }) => (
            <TextField
              size="s"
              label="Email"
              type="email"
              value={value}
              onChange={onChange}
              error={error}
            />
          )}
        </Field>
        <Field name="fullName">
          <TextField size="s" label="Full name (optional)" name="fullName" />
        </Field>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    );
  }
};

export const ValidationForm = {
  render: () => {
    const form = useForm({
      initialValues: { email: "", password: "" }
    });

    return (
      <Form form={form} onFinish={(values) => console.log(values)}>
        <Field
          name="email"
          rules={[{ required: true, type: "email" }]}
          validate={async (v) => {
            const exists = v === "test@test.ru"
            return exists ? ["Email is exist"] : undefined;
          }}
          validateDebounce={500}>
          {({ value, onChange, onBlur, error, touched, dirty }) => (
            <div>
              <TextField
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Email"
              />
              {touched && error && <span className="error">{error}</span>}
              {dirty && <span className="badge">Changed</span>}
            </div>
          )}
        </Field>

        <Field name="password" rules={[{ required: true, minLength: 8 }]}>
          <TextField type="password" />
        </Field>

        <div className="actions">
          <Button onClick={() => form.resetFields(["password"])}>
            Reset password
          </Button>
          <Button onClick={() => form.resetFields()}>Reset All</Button>
          <Button
            type="submit"
            loading={form.isSubmitting}
            disabled={!form.isFieldsDirty() || form.isValidating}>
            Save
          </Button>
        </div>
      </Form>
    );
  }
};
