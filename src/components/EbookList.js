import React from "react";
import { Link } from "react-router-dom";
import ebooks from "../data/ebooks.json";

const EbookList = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Ebooks</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {ebooks.map((ebook) => (
          <li key={ebook.id} style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <h3>{ebook.title}</h3>
            <p><em>by {ebook.author}</em></p>
            <p>{ebook.description}</p>
            <Link to={`/ebooks/${ebook.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EbookList;
