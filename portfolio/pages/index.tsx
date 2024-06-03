import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Experience from "@/components/Experience";
import Skills from "@/components/Skills"
import Projects from "@/components/Projects";

import data from "@/public/userData"


export default function Home() {
  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-scroll z-0"
    >
      <Head>
        <title>{data.name + "'s Portfolio"}</title>
      </Head>

      <Header data={data.navBar} />

      <section id="hero" className="snap-center">
          <Hero data={data.welcomePage} />
      </section>

      <section id="about" className="snap-center">
          <About data={data.aboutPage} />
      </section>

      <section id="experience" className="snap-center">
        <Experience data={data.experiencePage} />
      </section>

      <section id="skills" className="snap-start">
        <Skills data={ data.skillsPage } />
      </section>

      <section id="projects" className="snap-start">
        <Projects data={data.projectsPage}/>
      </section>


    </div>
  );
}
