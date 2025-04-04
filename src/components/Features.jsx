import { features } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Features = () => {
    return (
      <Section id="features" crosses className="!px-0 !py-10" backgroundCustomColor="#eaeaea">
        <div className="container relative z-2 mt-10">
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="New Platform Features"
          /><br />
  
          <div className="flex flex-wrap gap-10 mb-10 mx-auto text-center">
            {features.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] mx-auto"
                key={item.id}
              >
                <h5 className="h5 mb-5">{item.title}</h5>
                <img src={item.imageUrl} alt="" className="mx-auto center"/>
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <p className="body-2 mb-6 text-n-6">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  };
  

export default Features;