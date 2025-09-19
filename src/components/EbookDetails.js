import React from "react";
import { useParams } from "react-router-dom";
import ebooks from "../data/ebooks.json";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

export default function EbookDetails() {
  const { id } = useParams();
  const ebook = ebooks.find((e) => e.id === id);

  if (!ebook) return <div>Ebook not found</div>;

  return (
    <div>
      <Hero title={ebook.title} cover={ebook.cover} />
      <About text={ebook.about} />
      <Features items={ebook.features} />
      <Pricing price={ebook.price} file={ebook.file} />
      <Testimonials items={ebook.testimonials} />
    </div>
  );
}
