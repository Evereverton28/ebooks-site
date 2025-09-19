import React from "react";

export default function Hero({ title, cover }) {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{title}</h1>
      {cover && <img src={cover} alt={title} style={{ maxWidth: "200px" }} />}
    </section>
  );
}
