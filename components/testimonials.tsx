"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[15rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "At inGen, we don’t just push the boundaries of science — we erase them. Our breakthroughs in genetic engineering have opened doors to a new era of discovery.",
    name: "Dr. Henry Wu",
    title: "Chief Geneticist, inGen",
  },
  {
    quote:
      "The future of biotechnology is here. We’re not imagining tomorrow — we’re building it today, with precision, responsibility, and vision.",
    name: "Claire Dearing",
    title: "Operations Manager, Jurassic World",
  },
  {
    quote:
      "inGen’s work demonstrates the power of science when paired with bold ambition. We’re reshaping what humanity thought was possible.",
    name: "John Hammond",
    title: "Founder, inGen",
  },
  {
    quote:
      "From theory to reality, our research has proven that innovation knows no limits. We don’t just study life — we create it.",
    name: "Dr. Ellie Sattler",
    title: "Paleobotanist Consultant",
  },
  {
    quote:
      "Safety, ethics, and progress guide every decision at inGen. We remain committed to bringing the past into the future — responsibly.",
    name: "Simon Masrani",
    title: "CEO, Masrani Global Corporation",
  },
];
