import { createContext, useContext } from "react";
import { IStepperContextValue } from "./types";

export const StepperContext = createContext<IStepperContextValue | null>(null);

export const useStepperContext = () => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('StepperContext must be used within StepperContext');
  }
  return context;
}
