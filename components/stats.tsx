import React from "react";

type StatsProps = {
  title: string;
  stat: string;
};

const Statstemp = ({ title, stat }: StatsProps) => {
  return (
    <div className="text-left p-3 sm:p-4 md:p-6">
      <h1 className="aboreto text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#96AB2F]">
        {stat}
      </h1>
      <h2 className="aboreto text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mt-1 md:mt-2">
        {title}
      </h2>
    </div>
  );
};

const Stats = () => {
  return (
    <section>
      <Statstemp title="RECOVERED DNA SAMPLES" stat="1,248"></Statstemp>

      <Statstemp title="SPECIES RESURRECTED" stat="32"></Statstemp>

      <Statstemp title="HYBRID PROJECTS" stat="5"></Statstemp>
    </section>
  );
};
export default Stats;
