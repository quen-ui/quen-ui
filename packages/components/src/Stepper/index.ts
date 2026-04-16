import { Stepper as StepperComponent } from "./Stepper";
import { Step } from "./Step";
import { StepLabel } from "./StepLabel";
import { StepContent } from "./StepContent";

type TStepper = typeof StepperComponent & {
  Step: typeof Step;
  Label: typeof StepLabel;
  Content: typeof StepContent;
};

const Stepper = StepperComponent as TStepper;
Stepper.Step = Step;
Stepper.Label = StepLabel;
Stepper.Content = StepContent;

export type { IStepProps, IStepLabelProps, IStepperProps } from "./types";

export default Stepper;
