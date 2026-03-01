import Footer from "@/modules/web/Footer";
import NewSection4 from "@/modules/web/NewSection4";
import Section1 from "@/modules/web/Section1";
import Section2 from "@/modules/web/Section2";
import Section3 from "@/modules/web/Section3";
import Section5 from "@/modules/web/Section5";
import Hero from "@/modules/web/hero";
import Navbar from "@/modules/web/navbar";

const Home = () => {
  return (
    <div className="bg-black scroll-smooth selection:bg-blue-500/30">
      <Navbar />
      <div className="relative z-0">
        <Hero />
        <Section1 />
        <Section2 />
      </div>
      <div className="relative z-10 shadow-[0_-50px_100px_rgba(0,0,0,0.3)]">
        <Section3 />
      </div>
      <NewSection4 />
      <Section5/>
      <Footer/>
    </div>
  );
};

export default Home;
