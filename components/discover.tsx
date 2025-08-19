"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";
import Image from "next/image";

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="aboreto text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center  text-[#919375]">
        DISCOVER
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] p-8 md:p-2 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">Scientific Name:</span>{" "}
            Velociraptor mongoliensis
          </p>

          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">Period:</span> Lived
            during the Late Cretaceous period, about 75 to 71 million years ago.
          </p>

          <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700">Size:</span>{" "}
            <ul>
              <li>Length: About 2 meters (6.5 feet).</li>
              <li>Height: Roughly 0.5 meters (1.6 feet) at the hip.</li>
              <li>Weight: Around 15 kilograms (33 pounds).</li>
            </ul>
          </p>

          <Image
            src="/Velociraptor.jpg"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "",
    title: "Velociraptor",
    src: "/Velociraptor.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Dilophosaurus",
    src: "/Dilophosaurus.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Tyrannosaurus-Rex",
    src: "/T-rex.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Pliosaurus",
    src: "/Pliosaurus.jpg",
    content: <DummyContent />,
  },
];
