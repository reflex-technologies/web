import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="whyus" crosses className="!px-0 !py-10">
      <div className="container relative z-2 mt-10">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Why should you choose Reflex?"
        />
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-5 lg:mb-8">
        We give you the confidence to push your limits, the clarity to track your progress, and the control to train smarter every day.
        </p>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] mx-auto center"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-6">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>




              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;