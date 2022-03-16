import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles.css";
import App from "./App";
import About from "./About";
import Imprint from "./Imprint";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/imprint" element={<Imprint />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
