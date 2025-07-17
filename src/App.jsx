import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
      {/* Add other components like Contact, Footer, etc. here */}
    </div>
  );
};

export default App;
