import {
  Form,
  Button,
  TextField,
  Checkbox,
  type IFormProps
} from "@quen-ui/components";

export const BaseForm = () => {
  const form = Form.useForm({
    initialValues: { user: { email: "you@example.com" } }
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={handleSubmit} gap="m">
      <Form.Field
        name="user.email"
        rules={[{ required: true }]}
        validateTrigger="onChange"
        validate={(val) =>
          val.includes("test") ? "Email must not contain 'test'" : undefined
        }>
        <TextField label="Email" placeholder="you@example.com" />
      </Form.Field>

      <Form.Field name="password" rules={[{ required: true }]}>
        <TextField label="Password" />
      </Form.Field>

      <Form.Field name="remember" valuePropName="checked">
        <Checkbox label="Remember me" />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export const WatchForm = () => {
  const form = Form.useForm();
  const email = Form.useWatch("email", form);

  return (
    <Form form={form}>
      <Form.Field name="email">
        <TextField placeholder="Enter email" label="Email" />
      </Form.Field>
      <p>Live preview: {email}</p>
    </Form>
  );
};

export const ValidationForm = () => {
  const form = Form.useForm();

  return (
    <Form form={form}>
      <Form.Field
        name="email"
        rules={[
          { required: true, message: "Email is required" },
          { type: "email", message: "Invalid email address" }
        ]}>
        <TextField placeholder="Enter email" label="Email" />
      </Form.Field>
    </Form>
  );
};

export const DynamicFieldsForm = () => {
  const form = Form.useForm();
  return (
    <Form form={form} gap="s">
      <Form.FieldArray name="users">
        {({ add }, fields) => (
          <>
            {fields.map((field, index) => (
              <Form.Field key={index} name="name">
                <TextField
                  placeholder="Enter user name"
                  label={`User ${index + 1}`}
                />
              </Form.Field>
            ))}

            <Button type="button" onClick={() => add()}>
              Add User
            </Button>
          </>
        )}
      </Form.FieldArray>
    </Form>
  );
};

export const NeedDataForm = () => {
  const form = Form.useForm();
  const handleFinish: IFormProps["onFinish"] = (values) => {
    console.log(values);
  };
  return (
    <Form form={form} onFinish={handleFinish} gap="s">
      <Form.Field name="user.name">
        <TextField placeholder="Full name" label="Name" />
      </Form.Field>

      <Form.Field name="user.address.city">
        <TextField placeholder="City" label="City" />
      </Form.Field>

      <Button>Submit</Button>
    </Form>
  );
};

export const CustomValidationMessagesForm = () => {
  const form = Form.useForm();
  return (
    <Form
      form={form}
      validateMessages={{
        required: "${name} is required!",
        types: { email: "${name} is not a valid email!" }
      }}>
      <Form.Field name="email" rules={[{ required: true, type: "email" }]}>
        <TextField placeholder="Enter email" label="Email" />
      </Form.Field>
    </Form>
  );
};
