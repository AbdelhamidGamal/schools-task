import "./styles.scss";
import React from "react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/pending">Pending</Link>
        </li>
        <li>
          <Link to="/accepted">Accepted</Link>
        </li>
        <li>
          <Link to="/rejected">Rejected</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
