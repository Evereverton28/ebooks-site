import React from "react";

export default function Pricing({ price, file }) {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h3>Price: ${price}</h3>
      <a href={file} download>
        <button>Download</button>
      </a>
    </section>
  );
}
