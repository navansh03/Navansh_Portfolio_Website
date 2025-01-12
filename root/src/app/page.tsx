import {Header} from "@/sections/Header";
import Head from 'next/head';
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import {AboutSection} from "@/sections/About"; 
import {ContactSection} from "@/sections/Contact"; 
import {Footer} from "@/sections/Footer";
import favicon from "@/app/favicon.ico";

export default function Home()  {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href={favicon.src} /> 
      </Head>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="tape">
        <TapeSection />
      </section>
      <section id="resume">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
