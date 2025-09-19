import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>Home</Link>
      <Link to="/ebooks" style={{ color: "#fff" }}>Ebooks</Link>
    </nav>
  );
};

export default Navbar;
