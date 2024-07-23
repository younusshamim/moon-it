"use client"
import AboutUs from "../shared/about-us/about-us";
import Courses from "../pages/home/courses/courses";
import FreeSeminar from "../pages/home/free-seminar/free-seminar";
import HeroSection from "../pages/home/hero-section/hero-section";
import Logos from "../shared/logos/logos";
import ServiceOverview from "../pages/home/service-overview/service-overview";
import Services from "../pages/home/services/services";
import Navbar from "../shared/navbar/navbar";
import { useTheme } from "next-themes";
import AffilietedBy from "../pages/home/affilieted-by/affilieted-by";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div
        style={{
          backgroundImage: theme === 'light' ? "url(svg/hero-bg-light-pattern.svg)" : "url(svg/hero-bg-dark-pattern.svg)",
          backgroundRepeat: "repeat",
        }}
      >
        <Navbar />
        <HeroSection />
        {/* <ServiceOverview /> */}
        <AffilietedBy />
      </div>

      <Courses />
      <Services />
      <AboutUs />
      <Logos />
      <FreeSeminar />
    </>
  );
}
