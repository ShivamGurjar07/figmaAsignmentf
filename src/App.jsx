import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import KPITracker from "./components/KpiTracker";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="d-flex min-vh-100">
        <Sidebar/>
        <KPITracker />
      </div>
    </>
  );
}

export default App;
