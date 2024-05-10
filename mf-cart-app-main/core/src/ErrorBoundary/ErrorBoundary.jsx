import React from "react";
import ErrorFallback from "./ErrorFallback";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorDescription: {} };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
      const obj = {error: error.toString(), errorInfo: errorInfo.componentStack};
      this.setState({ errorDescription: obj});
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <ErrorFallback fallback={this.props.fallback} errorDescription={this.state.errorDescription} />;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;