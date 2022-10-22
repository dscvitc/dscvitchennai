import Footer from "../components/Footer";
import Head from "next/head";
import Index from "../components/Index";
import Vision from "../components/Vision";
import Boardmembers from "../components/Boardmembers";
import Events from "../components/Events";
export default function Home() {
  return (
    <div>
      <Head>
        <title>GDSC VIT Chennai</title>
        <meta name="description" content="GDSC VIT Chennai" />
        <link rel="icon" href="gdsc.png" />
      </Head>
      <Index />
      <Vision />
      <Boardmembers />
      <Events />
      <Footer />
    </div>
  );
}
