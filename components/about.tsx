import React from "react";

type AboutProps = {
  title: string;
  content: string;
};

const About = ({ title, content }: AboutProps) => {
  return (
    <div className="p-5 text-center max-w-[700px]">
      <h1 className="aboreto text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
        {title}
      </h1>
      <p className="alegreya text-base sm:text-lg md:text-xl lg:text-1xl">
        {content}
      </p>
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
