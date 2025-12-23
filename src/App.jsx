import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkmode, setDrakMode] = useState(false);

  return (
    <>
      <div className={darkmode ? "dark" : ""}>
        <Navbar />
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
