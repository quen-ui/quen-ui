import {
  Form,
  Button,
  TextField,
  Checkbox,
  type IFormProps,
  Flex
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
          val.includes("test") ? ["Email must not contain 'test'"] : undefined
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

export const RenderPropsForm = () => {
  const form = Form.useForm();

  return (
    <Form form={form}>
      <Form.Field
        name="email"
        rules={[{ required: true, type: "email" }]}
        validateTrigger="onBlur">
        {({ value, onChange, onBlur, error, touched, dirty, required }) => (
          <Flex direction="column">
            <TextField
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label="Email"
              placeholder="you@example.com"
              required={required}
            />
            {touched && error && <span className="error-message">{error}</span>}
            {dirty && <span className="badge">Modified</span>}
          </Flex>
        )}
      </Form.Field>
    </Form>
  );
};

export const TouchedDirtyForm = () => {
  const form = Form.useForm({
    initialValues: { name: "", email: "" }
  });

  const hasChanges = form.isFieldsDirty();
  const touchedFields = form.getTouchedFields();

  return (
    <Form form={form} onFinish={(values) => console.log(values)}>
      <Form.Field name="name" rules={[{ required: true }]}>
        {({ value, onChange, onBlur, error, touched }) => (
          <div>
            <TextField
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label="Name"
              error={touched ? error : undefined}
            />
          </div>
        )}
      </Form.Field>

      <Form.Field name="email" rules={[{ required: true, type: "email" }]}>
        <TextField label="Email" />
      </Form.Field>

      <div className="actions">
        <Button type="button" onClick={() => form.resetFields(["email"])}>
          Reset Email Only
        </Button>
        <Button
          type="submit"
          disabled={!hasChanges}
          loading={form.isSubmitting}>
          Save Changes
        </Button>
      </div>

      <p>Touched fields: {touchedFields.join(", ") || "none"}</p>
    </Form>
  );
};

export const DebounceValidationForm = () => {
  const form = Form.useForm();

  const checkUsername = async (value: string) => {
    if (!value) return undefined;
    const isTaken = await api.checkUsername(value);
    return isTaken ? ["Username is already taken"]: undefined;
  };

  return (
    <Form form={form}>
      <Form.Field
        name="username"
        validate={checkUsername}
        validateTrigger="onChange"
        validateDebounce={500}
      >
        {({ value, onChange, error, touched }) => (
          <div>
            <TextField
              value={value}
              onChange={onChange}
              label="Username"
              placeholder="Choose a username"
            />
            {form.isValidating && <span>Checking...</span>}
            {touched && error && <span className="error">{error}</span>}
          </div>
        )}
      </Form.Field>
    </Form>
  );
};
