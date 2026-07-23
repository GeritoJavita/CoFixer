import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Contac from "@/components/Contac";
export default function Home() {
  return (
    <main className="bg-[#09090B] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Process />
      <Contac />
    </main>
  );
}