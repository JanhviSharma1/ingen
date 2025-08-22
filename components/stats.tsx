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
        className="aboreto text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#96AB2F]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        {rounded}
      </motion.h1>

      <h2 className="aboreto text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mt-1 md:mt-2">
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
