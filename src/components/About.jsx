import React from 'react'
import Heading from "./Heading";
import Section from "./Section"

const About = () => {
  return (
    <Section crosses className="!px-0 !py-10" backgroundCustomColor="#eaeaea">
      <div>
        <div className="container relative z-2 mt-20">
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center"
            title="About Us"
          />
            <p className="body-1 mx-auto mb-10 text-n-11 lg:mb-2">Mission</p>
            <p className="mx-auto mb-10 text-n-11 lg:mb-8">At Reflex Technologies we are committed to transforming athletics by developing...</p>
            <p className="body-1 mx-auto mb-10 text-n-11 lg:mb-2">Who Are We</p>
            <p className="mx-auto mb-10 text-n-11 lg:mb-8">Reflex Technologies is a team of young researchers dedicated to developing new technologies to improve athletic performance in athelets. The team consists of graduate researchers at Pennsylvania State University who have experience designing, building, and releasing wearable IoT technologies, focused in the sport and athletic spaces.</p>
        </div>
      </div>
    </Section>
  )
}

export default About