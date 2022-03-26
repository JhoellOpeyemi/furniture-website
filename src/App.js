import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import OrderProcess from "./components/OrderProcess";

function App() {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
        <Gallery />
        <OrderProcess />
      </div>
    </>
  );
}

export default App;
