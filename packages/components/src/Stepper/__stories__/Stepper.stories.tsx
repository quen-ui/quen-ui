import { StoryObj } from "@storybook/react";
import { useState } from "react";
import Stepper from "../";

export default {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered"
  }
} as StoryObj<typeof Stepper>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  render: ({...props}) => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
      "Select campaign settings",
      "Create an ad group",
      "Create an ad"
    ];

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

    return (
      <div>
        <Stepper activeStep={activeStep} {...props} style={{ width: "1000px"}}>
          {steps.map((label, index) => (
            <Stepper.Step key={label}>
              <Stepper.Label optional={index === 2 ? "Optional" : undefined}>
                {label}
              </Stepper.Label>
              <Stepper.Content>
                <p>Content for step {index + 1}</p>
                <button onClick={handleNext}>Continue</button>
                <button disabled={index === 0} onClick={handleBack}>
                  Back
                </button>
              </Stepper.Content>
            </Stepper.Step>
          ))}
        </Stepper>
      </div>
    );
  }
} as StoryObj<typeof Stepper>;
