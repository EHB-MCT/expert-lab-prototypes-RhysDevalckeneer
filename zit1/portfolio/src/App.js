import React from "react";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import Footer from "./components/Layout/Footer";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
