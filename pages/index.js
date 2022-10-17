/* eslint-disable */
import Navbar from "../components/Navbar";
import Index from "../components/Index";
import Vision from "../components/Vision";
import Footer from "../components/Footer";
import Boardmembers from "../components/Boardmembers";
export default function Home() {
  return (
    <div>
      {/* <div className="sticky top-0"> */}
      <Navbar />
      {/* </div> */}
      <Index />
      <Vision />
      <Boardmembers />
      <Footer />
    </div>
  );
}
