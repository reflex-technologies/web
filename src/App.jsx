import ButtonGradiant from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Features from "./components/Features"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Benefits />
        <Footer />
      </div>
      <ButtonGradiant/>
    </>
  );
};

export default App
