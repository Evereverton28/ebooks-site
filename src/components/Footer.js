import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "1rem", textAlign: "center", background: "#f4f4f4" }}>
      <p>© {new Date().getFullYear()} Ebook Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
