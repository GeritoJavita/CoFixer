import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-[#09090B] text-white">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
    </main>
  );
}