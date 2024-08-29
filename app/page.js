import Image from "next/image";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
export default function Home() {
  return (
    <div className="bgp">
      <Hero />
      <Navbar />
      <Footer />
    </div>
  );
}
