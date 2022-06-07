import React from "react";
import { ErrorHandlerComponent } from "../error-card/error";

type ErrorBoundaryProps = {
  hasError: boolean;
  message?: string;
  onDeleteElement?: () => void;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
    setTimeout(() => {
      this.props.onDeleteElement && this.props.onDeleteElement();
    }, 5000);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorHandlerComponent message={this.props.message ?? undefined} />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
