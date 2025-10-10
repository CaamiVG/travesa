import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkLines from "@/components/WorkLines";
import Team from "@/components/Team";
import Milestones from "@/components/Milestones";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WorkLines />
        <Team />
        <Milestones />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
