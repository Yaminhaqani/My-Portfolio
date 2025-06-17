import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";

const App = () => {
  return (
    <>
    {/* pt-16 */}
    <main className="max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>
    </main>
    </>
  );
};

export default App;
