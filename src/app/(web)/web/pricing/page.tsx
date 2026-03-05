import Navbar from "@/modules/web/navbar";
import Pricing from "@/modules/web/Pricing";
import Footer from "@/modules/web/Footer";

export const metadata = {
  title: "Pricing — Wekraft",
  description:
    "Simple, transparent pricing for every kind of team. From solo devs to scaling studios.",
};

const PricingPage = () => {
  return (
    <div className="bg-black scroll-smooth selection:bg-sky-500/20">
      <Navbar />
      <Pricing />
      <Footer />
    </div>
  );
};

export default PricingPage;
