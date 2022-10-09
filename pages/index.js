import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
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
      <Navbar />
      <Index />
      <Vision />
    </div>
    </>
  );
}
