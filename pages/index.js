import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Index from "../components/Index";
export default function Home() {
  return (
    <div>
      {/* <div className="sticky top-0"> */}
      <Navbar />
      {/* </div> */}
      <Index />
    </div>
  );
}
