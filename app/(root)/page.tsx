import About from "@/components/about";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Stats from "@/components/stats";
import { CardsCarousel } from "@/components/discover";

export default function Home() {
  return (
    <div>
      <section id="home" className="section hero">
        <Navbar />
        <h1 className="text-6xl aboreto">
          <span className="alegreya text-[#F4E432]">
            <i>Engineering</i>
          </span>{" "}
          the Past.
        </h1>

        <h1 className="text-6xl aboreto">
          Shaping the{" "}
          <span className="alegreya text-[#F4E432]">
            <i>Future.</i>
          </span>
        </h1>
        <p className="alegreya text-2xl max-w-[900px]">
          International Genetics Incorporated (InGen) pioneers the resurrection
          of extinct species through advanced genetic engineering, combining
          science and innovation to create unprecedented breakthroughs in
          bioengineering.
        </p>
      </section>
      <br />

      <section
        id="about"
        className="flex justify-center items-center text-center py-10 px-6 md:py-16 md:px-20 lg:py-20 lg:px-32"
      >
        <About />
      </section>

      <section id="services" className="flex flex-col items-center py-10">
        <Services />
      </section>

      <section className="relative pl-[30px] py-10 bg-[url('/stats-bg.png')] bg-cover bg-center bg-no-repeat">
        <Stats />
      </section>
      <br />

      <section id="discover">
        <CardsCarousel />
      </section>
    </div>
  );
}
