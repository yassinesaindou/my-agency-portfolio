import CallToAction from "./sections/CallToAction";
import Contact from "./sections/Contact";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
// import TechStack from "./sections/TechStack";
import WhyUs from "./sections/WhyUs";

export default function Home() {
  return (
    <div className=" max-w-[1140px] mx-auto ">
      <Hero />
      <Services />
      <CallToAction />
      <WhyUs />
      <Faq />
      {/* <TechStack /> */}
      <Contact />
      <Footer />
    </div>
  );
}
