import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StatusBadge.css";

// type IStatusType = 'done' | 'process' | 'new';

const IStatusType = {
  statusDone: "done",
  statusProcess: "process",
  statusNew: "new",
};

function StatusBadgeIcon({ status, bagdeText }) {
  const badgeText = "";

  const switchStatus = (incomingStatus) => {
    switch (incomingStatus) {
      case "IStatusType.statusDone":
        return (
          <div className="statusBadge">
            <button type="button" class="btn btn-primary">
              <span class="badge">Process</span>
            </button>
          </div>
        );

      case "IStatusType.statusProcess":
        return (
          <div className="statusBadge">
            <button type="button" class="btn btn-success">
              <span class="badge">Done</span>
            </button>
          </div>
        );

      case "IStatusType.statusNew":
        return (
          <div className="statusBadge">
            <button type="button" class="btn btn-danger">
              <span class="badge">New</span>
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="statusBadge">
      <button type="button" className="btn btn-danger">
        <span className="badge">New</span>
      </button>
    </div>
  );
}

export default StatusBadgeIcon;

// about creating Badge : https://www.youtube.com/watch?v=Nd811gNlVMM
// npm install react-bootstrap bootstrap
// about switch case : https://www.robinwieruch.de/conditional-rendering-react

{
  /* <div className="statusBadge">
      <button type="button" class="btn btn-primary">
        <span class="badge">Process</span>
      </button>
      <button type="button" class="btn btn-success">
        <span class="badge">Done</span>
      </button>
      <button type="button" class="btn btn-danger">
        <span class="badge">New</span>
      </button>
    </div> */
}
