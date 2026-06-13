import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Solutions from "@/components/Solutions";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import WorkProcess from "@/components/WorkProcess";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Solutions />
        <Projects />
        <Gallery />
        <WorkProcess />
        <Achievements />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
