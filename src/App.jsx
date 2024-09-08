import React from "react";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <AboutMe />
      <Projects />
      
      <Footer/>
    </div>
  );
}

export default App;
