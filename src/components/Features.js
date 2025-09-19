import React from "react";

export default function Features({ items }) {
  return (
    <section style={{ padding: "2rem 1rem", background: "#fafafa" }}>
      <h3>Features</h3>
      <ul>
        {items.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </section>
  );
}
