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
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant2 } from "@/lib/animations/variants";

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

        <ScrollAnimation variants={variant2}>
          <ServiceOverview />
        </ScrollAnimation>
      </div>

      <Courses />
      <Services />
      <AboutUs />
      <Logos />
      <FreeSeminar />
    </>
  );
}
