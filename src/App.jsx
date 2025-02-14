import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/SideBar";
import KPITracker from "./components/KpiTracker";

function App() {
  return (
    <>
      <div className="d-flex min-vh-100">
        <Sidebar />
        <KPITracker />
      </div>
    </>
  );
}

export default App;
