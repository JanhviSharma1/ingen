import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type StatsProps = {
  title: string;
  stat: string;
};

const Statstemp = ({ title, stat }: StatsProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, parseInt(stat.replace(/,/g, "")), {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [stat, count]);

  return (
    <div className="text-left p-13 sm:p-4 md:p-6">
      <motion.h1
        className="aboreto text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#96AB2F] font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        {rounded}
      </motion.h1>

      <h2 className="aboreto text-lg xs:text-lg sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white mt-2 md:mt-3 font-semibold">
        {title}
      </h2>
    </div>
  );
};

const Stats = () => {
  return (
    <section>
      <Statstemp title="RECOVERED DNA SAMPLES" stat="1248" />
      <Statstemp title="SPECIES RESURRECTED" stat="32" />
      <Statstemp title="HYBRID PROJECTS" stat="5" />
    </section>
  );
};

export default Stats;
