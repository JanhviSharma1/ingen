"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const team = [
  {
    name: "John Hammond",
    designation: "Founder & Visionary",
    src: "/Team/John_Hammond.png",
    about:
      "The man who dared to dream, Hammond believed that science should inspire awe. His legacy lives on in every InGen innovation, reminding the team that progress should always balance wonder and responsibility.",
  },
  {
    name: "Simon Masrani",
    designation: "CEO & Visionary Leader",
    src: "/Team/Simon_Masrani.png",
    about:
      "The driving force behind Jurassic World’s creation, Masrani inherited John Hammond’s dream and elevated it to a global attraction. His leadership brought InGen into a new age of entertainment, science, and corporate expansion.",
  },
  {
    name: "Claire Dearing",
    designation: "Park Operations Manager",
    src: "/Team/Claire_Dearing.jpg",
    about:
      "Claire ensures the seamless day-to-day operations of Jurassic World. With a sharp focus on efficiency, safety, and guest experience, she balances the park’s corporate vision with the responsibility of managing living, unpredictable creatures.",
  },
  {
    name: "Owen Grady",
    designation: "Velociraptor Trainer & Behavioral Specialist",
    src: "/Team/Owen_Grady.jpg",
    about:
      "A former Navy veteran, Owen leads InGen’s Raptor Response Unit. His groundbreaking work with Velociraptors has redefined how humans and dinosaurs can interact, making him a vital asset in asset containment and research.",
  },
  {
    name: "Vic Hoskins",
    designation: "Head of InGen Security Division",
    src: "/Team/Vic_Hoskins.png",
    about:
      "Hoskins believes InGen’s genetic advancements hold military potential. As head of security, he oversees containment strategies and asset weaponization programs, ensuring that InGen’s research has defensive applications beyond entertainment.",
  },
  {
    name: "Dr. Henry Wu",
    designation: "Chief Geneticist",
    src: "/Team/Henry_Wu.png",
    about:
      "Returning as the mastermind of InGen’s scientific breakthroughs, Dr. Wu continues to lead research in hybrid genome development. His work includes the creation of the Indominus rex and Indoraptor, pushing genetic science to unprecedented levels.",
  },
  {
    name: "Franklin Webb",
    designation: "IT Specialist & Systems Analyst",
    src: "/Team/Franklin_Webb.png",
    about:
      "Tech-savvy and resourceful, Franklin manages system diagnostics, network security, and technical troubleshooting. His expertise helps InGen’s digital infrastructure remain resilient under constant pressure.",
  },
  {
    name: "Zia Rodriguez",
    designation: "Paleo-Veterinarian",
    src: "/Team/Zia_Rodriguez.png",
    about:
      "Dedicated to the health of prehistoric life, Zia specializes in dinosaur medicine and field treatment. Her compassion and expertise make her a vital member of InGen’s rescue and recovery teams.",
  },
];

type TeamMember = {
  about: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTeam = ({ autoplay = false }: { autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + team.length) % team.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <motion.h1
        className="aboreto text-2xl pt-1 p-11 sm:text-4xl md:text-5xl lg:text-7xl text-center text-[#919375]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        MEET THE TEAM
      </motion.h1>

      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {team.map((member, index) => (
                <motion.div
                  key={member.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : team.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={member.src}
                    alt={member.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between py-1">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-[#96AB2F] aboreto">
              {team[active].name}
            </h3>
            <p className="text-sm text-gray-500">{team[active].designation}</p>
            <motion.p className="mt-8 text-lg text-white">
              {team[active].about.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#9b9898]"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#9b9898]"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
