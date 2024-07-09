import React from "react";
import GradientText from "@/components/gradient-text";
import Container from "@/components/container";
import servicesData from "../../../../data/services-data";
import ServicesSection from "@/app/shared/services-section/services-section";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant1, } from "@/lib/animations/variants";

const Services = () => {
  return (
    <div>
      <Container className="pt-20 pb-10">
        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          আমাদের <GradientText>বিশেষ সেবা</GradientText>
        </h2>
        <p className="font-semibold mb-8 text-center">
          কেন মুন আইটি-তে আস্থা রাখবে?
        </p>

        <ScrollAnimation variants={variant1}>
          <ServicesSection servicesData={servicesData} />
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Services;
