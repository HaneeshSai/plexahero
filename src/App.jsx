import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Launching from "./pages/Launching";

export default function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launching" element={<Launching />} />
      </Routes>
    </div>
  );
}
