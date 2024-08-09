"use client"
import { useTheme } from "next-themes";
import AffilietedBy from "../pages/home/affilieted-by/affilieted-by";
import Courses from "../pages/home/courses/courses";
import FreeSeminar from "../pages/home/free-seminar/free-seminar";
import HeroSection from "../pages/home/hero-section/hero-section";
import Services from "../pages/home/services/services";
import AboutUs from "../shared/about-us/about-us";
import Logos from "../shared/logos/logos";
import Navbar from "../shared/navbar/navbar";

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