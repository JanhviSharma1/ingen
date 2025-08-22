"use client";

import About from "@/components/about";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Stats from "@/components/stats";
import { CardsCarousel } from "@/components/discover";
import { AnimatedTeam } from "@/components/team";
import { InfiniteMovingCardsDemo } from "@/components/testimonials";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="home"
        className="section hero flex flex-col justify-center items-center text-center min-h-screen px-6 pt-20"
      >
        <Navbar />

        <motion.h1
          className="text-6xl aboreto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="alegreya text-[#F4E432]">
            <i>Engineering</i>
          </span>{" "}
          the Past.
        </motion.h1>

        <motion.h1
          className="text-6xl aboreto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Shaping the{" "}
          <span className="alegreya text-[#F4E432]">
            <i>Future.</i>
          </span>
        </motion.h1>

        <motion.p
          className="alegreya text-2xl max-w-[900px] mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          International Genetics Incorporated (InGen) pioneers the resurrection
          of extinct species through advanced genetic engineering, combining
          science and innovation to create unprecedented breakthroughs in
          bioengineering.
        </motion.p>
      </section>
      <br />

      {/* ABOUT */}
      <section
        id="about"
        className="flex justify-center items-center text-center py-2 px-0 md:py-16 md:px-20 lg:py-20 lg:px-32"
      >
        <About />
      </section>

      {/* SERVICES */}
      <section id="services" className="flex flex-col items-center py-2 pt-7">
        <Services />
      </section>

      {/* STATS */}
      <section className="relative pl-[30px] py-10 bg-[url('/stats-bg.png')] bg-cover bg-center bg-no-repeat">
        <Stats />
      </section>

      {/* TEAM */}
      <section id="team" className="flex flex-col items-center py-2 pt-7">
        <AnimatedTeam autoplay />
      </section>

      {/* TESTIMONIALS */}
      <section>
        <InfiniteMovingCardsDemo />
      </section>
    </div>
  );
}
