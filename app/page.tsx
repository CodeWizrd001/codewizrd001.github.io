import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";

export default function HomePage() {
  return (
    <main className="relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
