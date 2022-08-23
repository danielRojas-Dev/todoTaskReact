import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import FormNewTask from "./components/pages/tareas/FormNewTask";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/FormNewTask" element={<FormNewTask />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
