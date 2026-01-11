// src/App.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import "./styles/media-queries.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Summary />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </>
  );
}

export default App;
