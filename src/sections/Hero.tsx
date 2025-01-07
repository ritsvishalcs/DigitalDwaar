import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      className="realtive pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 
    max-md:pt-36 max-md:pb-60"
    >
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Digital Dwaar
            </div>
            <h1
              className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 
                max-md:mb-4 max-md:texl-5xl max-md:leading-12"
            >
              Affordable & Reliable{" "}
              <span className="text-p3">Digital Marketing</span> Services​
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Digital Dwaar is a leading Digital marketing agency in Dhanbad
              offering Services like, Website Development, SEO Services, Google
              advertisement, Social Media Advertisement and Social Media
              Management at an affordable cost, with a focus on delivering
              measurable results.
            </p>
            <LinkScroll to="footer" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Contact Us</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              alt="hero"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
