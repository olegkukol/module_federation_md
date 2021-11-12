import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const parentPR = SiebelAppFacade.ComponentMgr.FindComponent('FINS Home Page View').GetPR();
const rootId = parentPR.GetRootId.call(parentPR);

ReactDOM.render(<App />, document.getElementById(rootId));