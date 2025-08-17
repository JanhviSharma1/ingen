"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ServicesProps {
  title: string;
  description: string;
  images: string;
}

const Services = ({ title, description, images }: ServicesProps) => {
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

        {/* Image and Description */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={images}
            alt="thumbnail"
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

export default Services;
