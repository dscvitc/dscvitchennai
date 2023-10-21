"use client";
import React from "react";

import Boardmembers from "../components/Boardmembers";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Index from "../components/Index";
import Navbar from "../components/Navbar";
import Vision from "../components/Vision";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Index />
      <Vision />
      <Boardmembers />
      <Events />
      <Footer />

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>

      <script>AOS.init();</script>
    </div>
  );
}
