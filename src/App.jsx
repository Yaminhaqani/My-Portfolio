import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Clients from "./Sections/Clients";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <>
    {/* pt-16 */}
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
    </main>
    </>
  );
};

export default App;
