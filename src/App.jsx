import ButtonGradiant from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Button from "./components/Button"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration"
import Roadmap from "./components/Roadmap";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Pricing />
        <Collaboration />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradiant/>
    </>
  );
};

export default App
