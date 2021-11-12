import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import Preloader from "./Preloader";

const RemoteApp = React.lazy(() => import("vtbmeetupmicrofe/MFEApp"));

const MFWrapper = () => {
  const parentComponent = SiebelAppFacade.ComponentMgr.FindComponent('FINS Home Page View');
  const parentPR = parentComponent.GetPR();
  const rootId = parentPR.GetRootId.call(parentPR);

  const propsToSend = parentPR.GetMFAppProps.call(parentPR);
  parentPR.SetEndLifeCb.call(parentPR, () => {
    if (document.getElementById(rootId)) {
      ReactDOM.unmountComponentAtNode(document.getElementById(rootId));
    }
  });

  return (
    <ErrorBoundary errorTitle={'Error while MF embedding'}>
      <React.Suspense fallback={<Preloader/>}>
        <RemoteApp {...propsToSend}/>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default MFWrapper;
