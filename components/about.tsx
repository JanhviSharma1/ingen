"use client";
import React from "react";
import { motion } from "framer-motion";

type AboutProps = {
  title: string;
  content: string;
};

const About = ({ title, content }: AboutProps) => {
  return (
    <div className="p-5 text-center max-w-[700px] mx-auto">
      <motion.h1
        className="aboreto text-2xl sm:text-4xl md:text-5xl lg:text-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="alegreya text-base sm:text-lg md:text-xl lg:text-xl mt-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {content}
      </motion.p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section>
      <About
        title="OUR VISION"
        content="At InGen, we envision a future where science bridges the gap between prehistory and today  unlocking the potential of ancient DNA to inspire, educate, and innovate responsibly."
      />
      <About
        title="WHAT WE DO"
        content="From fossilized DNA extraction and advanced cloning to hybrid genome engineering and habitat simulation, our research divisions pioneer breakthroughs in genetic science while maintaining the highest standards of safety and control."
      />
      <About
        title="OUR MISSION"
        content="To lead the world in responsible de-extinction, restore lost ecosystems, and share the wonder of scientific achievement with future generations."
      />
    </section>
  );
};

export default AboutSection;
