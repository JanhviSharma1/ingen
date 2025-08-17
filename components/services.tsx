"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ServiceCardProps {
  title: string;
  description: string;
  images: string;
}

// Single Card Component
const ServiceCard = ({ title, description, images }: ServiceCardProps) => {
  return (
    <CardContainer className="p-3 sm:p-1 md:p-2 lg:p-3 justify-center">
      <CardBody
        className="
          bg-[#919375]/40 text-white
          w-auto sm:w-[30rem] h-auto
          rounded-xl p-6
        "
      >
        {/* Title */}
        <CardItem translateZ="50" className="text-xl aboreto text-white">
          {title}
        </CardItem>

        {/* Image + Description */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={images}
            alt={title}
            height={205}
            width={411}
            className="
              h-60 w-full object-cover rounded-xl
              group-hover/card:shadow-xl
            "
          />
          <CardItem
            as="p"
            translateZ="60"
            className="text-white alegreya text-1xl max-w-sm mt-2"
          >
            {description}
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

// Section Component
const Services = () => {
  return (
    <div className="py-10 px-6">
      {/* Heading */}
      <h1 className="aboreto text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center text-[#919375] mb-10">
        SERVICES
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        <ServiceCard
          title="DNA RECOVERY UNIT"
          description="Extracts and preserves genetic material from prehistoric fossils using proprietary Gen-Lock cryogenic systems."
          images="dna-recovery.jpg"
        />

        <ServiceCard
          title="GENETIC ENGINEERING LAB"
          description="Designs and modifies genetic sequences for enhanced traits and controlled breeding."
          images="genetic-engineering.jpg"
        />

        <ServiceCard
          title="PALEO-CLONING DIVISION"
          description="Designs and modifies genetic sequences for enhanced traits and controlled breeding."
          images="genetic-engineering.jpg"
        />
      </div>
    </div>
  );
};

export default Services;
