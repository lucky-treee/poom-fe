import React, { Component, ErrorInfo, ReactNode } from 'react';
import UnknownErrorPage from 'pages/error/UnknownErrorPage';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('[poom] ErrorBoundary caught error: ', error, errorInfo);
  }

  render(): ReactNode {
    const { hasError, error } = this.state;

    const { children } = this.props;

    if (hasError && error !== undefined) {
      return <UnknownErrorPage error={error} />;
    }

    return children;
  }
}

export default ErrorBoundary;
