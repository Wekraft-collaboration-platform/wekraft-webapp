import Navbar from "@/modules/web/navbar";
import Hero from "@/modules/web/hero";
import dynamic from "next/dynamic";

// Dynamically importing components----------
const Section1 = dynamic(() => import("@/modules/web/Section1"));
const Section2 = dynamic(() => import("@/modules/web/Section2"));
const Section3 = dynamic(() => import("@/modules/web/Section3"));
const NewSection4 = dynamic(() => import("@/modules/web/NewSection4"));
const Section5 = dynamic(() => import("@/modules/web/Section5"));
const Footer = dynamic(() => import("@/modules/web/Footer"));

const Home = () => {
  return (
    <div className="bg-black scroll-smooth selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <NewSection4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Home;
