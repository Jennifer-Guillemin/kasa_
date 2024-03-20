import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Logements from "./pages/Logements";
import Error404 from "./pages/Error404";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./styles/index.css";
import "./styles/logements.css";
import "./styles/error404.css";
import "./styles/apropos.css";
import { createRoot } from "react-dom/client";

import "./assets/LOGO.png";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="logements/:id" element={<Logements />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
