import { type ReactNode } from "react";

export interface IErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  level?: "grid" | "cell";
}

export interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
