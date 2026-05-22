import { Component, type ErrorInfo } from "react";
import { ErrorStyled } from "./styles";
import  type { IErrorBoundaryState, IErrorBoundaryProps } from "./types";

export class DataGridErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state: IErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): Partial<IErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (this.props.level === "grid") {
      console.error("[DataGrid] Critical render error:", error, errorInfo);
    } else {
      console.warn("[DataGrid Cell] Render error caught:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <ErrorStyled level={this.props.level}>
            {this.props.level === "cell"
              ? "⚠️ Error"
              : "🚫 Grid failed to render"}
          </ErrorStyled>
        )
      );
    }
    return this.props.children;
  }
}
