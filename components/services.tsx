"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ServicesProps {
  title: string;
  description: string;
  images: string;
}

const Services: React.FC<ServicesProps> = ({ title, description, images }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card 
  bg-[#919375]/40
  text-white text-center 
  border border-black/[0.1] dark:border-white/[0.2] 
  w-auto sm:w-[30rem] h-auto 
  rounded-xl p-6 
  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white-600 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={images}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          <CardItem
            as="p"
            translateZ="60"
            className="text-white-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
        </CardItem>
        <div className="flex justify-between items-center mt-5"></div>
      </CardBody>
    </CardContainer>
  );
};
export default Services;
