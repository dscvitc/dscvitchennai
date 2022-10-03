import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Index from "../components/Index";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Index />
    </div>
  );
}
