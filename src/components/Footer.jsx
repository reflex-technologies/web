import React from "react";
import Section from "./Section";
import Button from "./Button";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section id="footer" crosses className="!px-0 !py-10" backgroundCustomColor="#102437">
      <div className="text-center">
      <Button className="lg:flex mr-4" href="/contact" textWhite={true}>
          Contact Us
      </Button>
      </div>
      <div className="text-center">
      <Button className="lg:flex mr-4" href="/about" textWhite={true}>
          About
      </Button>
      </div>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. Reflex Technologies LLC.
        </p>

        <ul className="flex gap-5 flex-wrap right-0 relative">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;