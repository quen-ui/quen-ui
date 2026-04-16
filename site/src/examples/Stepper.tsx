import { useState } from "react";
import { Stepper, Button, Flex, TextField, Alert } from "@quen-ui/components";
import { IconFilter2Check, IconLoader2, IconClock } from "@tabler/icons-react";

export const StepperBasicExample = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping", "Payment", "Review"];

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => (
        <Stepper.Step key={label} onClick={() => setActiveStep(index)}>
          <Stepper.Label>{label}</Stepper.Label>
        </Stepper.Step>
      ))}
    </Stepper>
  );
};

export const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      label: "Tariff selection",
      content: "Select the appropriate tariff plan."
    },
    {
      label: "User data",
      content: "Please enter your contact information."
    },
    {
      label: "Confirmation",
      content: "Please check the information you entered."
    }
  ];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Stepper.Step key={step.label}>
            <Stepper.Label optional={index === 2 ? "Last step" : undefined}>
              {step.label}
            </Stepper.Label>
            <Stepper.Content>
              <p>{step.content}</p>
              <Flex gap="s" style={{ marginTop: 16 }}>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  view="secondary">
                  Back
                </Button>
                <Button onClick={handleNext}>
                  {index === steps.length - 1 ? "Complete" : "Next"}
                </Button>
              </Flex>
            </Stepper.Content>
          </Stepper.Step>
        ))}
      </Stepper>
    </>
  );
};

export const ErrorStepper = () => {
  return (
    <Stepper activeStep={1}>
      <Stepper.Step completed>
        <Stepper.Label>Successfully</Stepper.Label>
      </Stepper.Step>
      <Stepper.Step error>
        <Stepper.Label error>Loading error</Stepper.Label>
      </Stepper.Step>
      <Stepper.Step disabled>
        <Stepper.Label>Not available</Stepper.Label>
      </Stepper.Step>
    </Stepper>
  );
};

export const CustomIconsStepper = () => {
  return (
    <Stepper activeStep={1}>
      <Stepper.Step icon={<IconFilter2Check />}>
        <Stepper.Label>Готово</Stepper.Label>
      </Stepper.Step>
      <Stepper.Step icon={<IconLoader2 className="spin" />}>
        <Stepper.Label>В процессе</Stepper.Label>
      </Stepper.Step>
      <Stepper.Step icon={<IconClock />}>
        <Stepper.Label>Отмена</Stepper.Label>
      </Stepper.Step>
    </Stepper>
  );
};

export const CustomConnectorStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping", "Payment", "Review"];

  return (
    <Stepper
      activeStep={activeStep}
      connector={
        <div style={{ background: "red", width: "100%", height: "2px" }} />
      }>
      {steps.map((label, index) => (
        <Stepper.Step key={label} onClick={() => setActiveStep(index)}>
          <Stepper.Label>{label}</Stepper.Label>
        </Stepper.Step>
      ))}
    </Stepper>
  );
};

export const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <TextField
            placeholder="Email"
            value={formData["email"]}
            onChange={(v) => setFormData({ ...formData, ["email"]: v })}
          />
        );
      case 1:
        return (
          <TextField
            placeholder="Password"
            value={formData["password"]}
            onChange={(v) => setFormData({ ...formData, ["password"]: v })}
          />
        );
      default:
        return <Alert title="Done!" type="success" description={`Your email: ${formData["email"]}`} />;
    }
  };

  return (
    <Flex direction="column" gap="m">
      <Stepper activeStep={activeStep}>
        <Stepper.Step>
          <Stepper.Label>Email</Stepper.Label>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Label>Пароль</Stepper.Label>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Label>Готово</Stepper.Label>
        </Stepper.Step>
      </Stepper>
      <Flex direction="column" gap="m">
        {renderStepContent(activeStep)}
        <Flex gap="m">
          <Button view="secondary" disabled={activeStep === 0} onClick={handleBack}>
            Назад
          </Button>
          <Button onClick={handleNext}>
            {activeStep === 2 ? "Завершить" : "Далее"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
