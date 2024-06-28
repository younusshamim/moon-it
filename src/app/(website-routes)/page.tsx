import AboutUs from "../shared/about-us/about-us";
import Courses from "../pages/home/courses/courses";
import FreeSeminar from "../pages/home/free-seminar/free-seminar";
import HeroSection from "../pages/home/hero-section/hero-section";
import Logos from "../shared/logos/logos";
import ServiceOverview from "../pages/home/service-overview/service-overview";
import Services from "../pages/home/services/services";
import Navbar from "../shared/navbar/navbar";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(svg/hero-bg.svg)",
          backgroundRepeat: "repeat",
        }}
      >
        <Navbar />
        <HeroSection />
        <ServiceOverview />
      </div>

      <Courses />
      <Services />
      <AboutUs />
      <Logos />
      <FreeSeminar />
    </>
  );
}
