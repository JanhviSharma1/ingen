import About from "@/components/about";
import Navbar from "@/components/navbar";

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
    </div>
  );
}
