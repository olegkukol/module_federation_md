import { PureComponent } from 'react';
import React from "react";

export default class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    const parentView = SiebelAppFacade.ComponentMgr.FindComponent('VTB Model Orchestrator View').GetPR();
    parentView.ErrorHandler('Ошибка выполнения операции. Обратитесь в службу поддержки');
  }

  render() {
    const { props, state } = this;

    if (state.errorInfo) {
      return (
        <div id='ModOrc-err-boundary'>
          <h2>{props.errorTitle}</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {state.error && state.error.toString()}
            <br />
            {state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Normally, just render children
    return props.children;
  }
}
