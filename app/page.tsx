/* eslint-disable */
"use client";
import React from "react";
import Footer from "../components/Footer";
import Index from "../components/Index";
import Vision from "../components/Vision";
import Boardmembers from "../components/Boardmembers";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
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
