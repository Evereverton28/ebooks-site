import React from "react";

export default function About({ text }) {
  return (
    <section style={{ padding: "2rem 1rem", maxWidth: 800, margin: "0 auto" }}>
      <h2>About this Ebook</h2>
      <p>{text}</p>
    </section>
  );
}
