import ReachUs from "@/modules/web/ReachUs";
import Navbar from "@/modules/web/navbar";
import Footer from "@/modules/web/Footer";

export default function ReachUsPage() {
  return (
    <main className="bg-black selection:bg-blue-500/30">
      <Navbar />
      <ReachUs />
      <Footer />
    </main>
  );
}
