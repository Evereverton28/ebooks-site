// src/pages/EbookPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EbookPage() {
  const { id } = useParams(); // get ebook id from URL
  const [ebook, setEbook] = useState(null);

  useEffect(() => {
    fetch("/data/ebooks.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((e) => e.id === id);
        setEbook(found);
      });
  }, [id]);

  if (!ebook) return <h2>Loading ebook...</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{ebook.title}</h1>
      <img src={ebook.cover} alt={ebook.title} style={{ maxWidth: "200px" }} />
      <p><strong>Price:</strong> ${ebook.price}</p>

      <h3>Features</h3>
      <ul>
        {ebook.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h3>About</h3>
      <p>{ebook.about}</p>

      <h3>Testimonials</h3>
      <ul>
        {ebook.testimonials.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <a href={ebook.file} download>
        <button>Download Ebook</button>
      </a>
    </div>
  );
}

export default EbookPage;
