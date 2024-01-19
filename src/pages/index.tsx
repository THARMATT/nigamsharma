import Email from "@/components/Email";
import Loader from "@/components/Loader";
import Socialicons from "@/components/Socialicons";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const [showContent, setShowContent] = useState(false);
  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };
  return (
    <div className="App">
      <Head>
        <title>Ni GAM</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <Socialicons />
          <Email />
          <main>
            {" "}
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer/>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
