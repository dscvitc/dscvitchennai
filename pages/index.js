import Head from "next/head";
import Index from "../components/Index";
import Vision from "../components/Vision";
export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC VIT Chennai</title>
        <meta name="description" content="GDSC VIT Chennai" />
        <link rel="icon" href="gdsc.png" />
      </Head>
      <div>
        <div className="mx-auto md:max-w-4xl lg:max-w-7xl ">
          {/* Width snap for the whole content. Must be added to the root of every "page" */}
          <Index />
          <Vision />
        </div>
      </div>
    </>
  );
}
