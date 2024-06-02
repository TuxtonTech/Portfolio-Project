import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      style={{padding:"0", background: ""}}
              
      className="h-screen snap-y snap-mandatory overflow-scroll z-0"
    >
      <Head>
        <title>Grant Pierce Portfolio</title>
      </Head>

      
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      
    </div>
  );
}
