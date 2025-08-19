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
        <CardItem translateZ="50" className="text-xl aboreto text-white">
          {title}
        </CardItem>

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
    <div className="py-2 px-4 sm:py-8 sm:px-8 md:py-10 md:px-16 lg:py-12 lg:px-20">
      <h1 className="aboreto pt-2 text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center text-[#919375] ">
        SERVICES
      </h1>

      <div className="flex flex-wrap justify-center">
        <ServiceCard
          title="DNA RECOVERY UNIT"
          description="Extracts and preserves genetic material from prehistoric fossils using proprietary Gen-Lock cryogenic systems."
          images="dna-recovery.jpg"
        />

        <ServiceCard
          title="HYBRID GENOME INITIATIVE"
          description="Secretive program developing genetically enhanced hybrid species for specialized use."
          images="hybrid-genome.jpg"
        />

        <ServiceCard
          title="PALEO-CLONING DIVISION"
          description="Designs and modifies genetic sequences for enhanced traits and controlled breeding."
          images="paleo.png"
        />

        <ServiceCard
          title="GENETIC ENGINEERING LAB"
          description="Designs and modifies genetic sequences for enhanced traits and controlled breeding."
          images="genetic-engineering.jpg"
        />
      </div>
    </div>
  );
};

export default Services;
