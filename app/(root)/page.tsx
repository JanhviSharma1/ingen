import About from "@/components/about";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <div>
      <section className="section hero">
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

      <section className="section">
        <About />
      </section>

      <h1 className="aboreto text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center mb-10 text-[#919375]">
        SERVICES
      </h1>
      <section className="services">
        <Services
          title="DNA RECOVERY UNIT"
          description="Extracts and preserves genetic material from prehistoric fossils using proprietary Gen-Lock cryogenic systems."
          images="dna-recovery.jpg"
        />

        <Services
          title="GENETIC ENGINEERING LAB"
          description="Designs and modifies genetic sequences for enhanced traits and controlled breeding."
          images="genetic-engineering.jpg"
        />

        <Services
          title="PALEO-CLONING DIVISION"
          description="Designs and modifies genetic sequences for enhanced traits and controlled breeding."
          images="genetic-engineering.jpg"
        />
      </section>

      <section className="relative pl-[30px] pt-20 bg-[url('/stats-bg.png')] bg-cover bg-center bg-no-repeat">
        <Stats />
      </section>
    </div>
  );
}
