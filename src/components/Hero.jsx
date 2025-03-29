import { homeModel  } from "../assets";
import Section from "./Section";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    
    <Section
      className="pt-[12rem] -mt-[5.25rem] !px-0 !py-10"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <img
      src={ homeModel  } 
      className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
      width={102}
      height={49}
      alt="Reflex"      
      />
    
      <div className="container relative back " ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Unlock the Potential Within {` `}
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-5 lg:mb-8">
            Reflex is the first wearable designed for athletes to track muscle activation and fatigue in real-time, helping you train smarter and recover faster.
          </p>
        </div>

      </div>

    </Section >
  );
};

export default Hero;