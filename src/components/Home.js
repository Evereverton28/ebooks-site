import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1>📚 Welcome to the Ebook Store</h1>
      <p style={{ margin: "1rem 0", fontSize: "1.2rem" }}>
        Your one-stop place to discover and download ebooks.
      </p>
      <Link to="/ebooks">
        <button style={{ marginTop: "1rem", padding: "0.8rem 1.5rem", fontSize: "1rem" }}>
          Browse Ebooks
        </button>
      </Link>
    </div>
  );
};

export default Home;
