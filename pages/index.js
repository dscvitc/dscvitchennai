/* eslint-disable */
import Footer from "../components/Footer";
import Head from "next/head";
import Index from "../components/Index";
import Vision from "../components/Vision";
import Boardmembers from "../components/Boardmembers";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>GDSC VIT Chennai</title>
        <meta name="description" content="GDSC VIT Chennai" />
        <link rel="icon" href="gdsc.png" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Index />
      <Vision />
      <Boardmembers />
      <Events />
      <Footer />

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      <script>AOS.init();</script>
    </div>
  );
}
