import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
        <Gallery />
      </div>
    </>
  );
}

export default App;
