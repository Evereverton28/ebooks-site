import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import EbookList from "./components/EbookList";
import EbookDetails from "./components/EbookDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<EbookList />} />
        <Route path="/ebooks/:id" element={<EbookDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
