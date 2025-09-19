import React from "react";

export default function Testimonials({ items }) {
  return (
    <section style={{ padding: "2rem", background: "#f7f7fa" }}>
      <h3>Testimonials</h3>
      {items.map((t, i) => (
        <blockquote key={i}>
          <p>{t}</p>
        </blockquote>
      ))}
    </section>
  );
}
