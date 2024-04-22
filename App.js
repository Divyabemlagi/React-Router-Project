import React from "react";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      App component
      <Outlet />
    </div>
  );
}

export default App;
