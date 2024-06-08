import Container from "@/components/container";
import Image from "next/image";
import React from "react";

const Logos = () => {
  const logos = [
    { label: "Moon IT 18 years anniversary", src: "/logo/18-Years-Logo.png" },
    {
      label: "Bangladesh Goverment",
      src: "/logo/BD_Government_Sea.png",
    },
    {
      label: "Bangladesh Technical Education Board (BTEB)",
      src: "/logo/BTEB-Logo.png",
    },
    { label: "Moon IT", src: "/logo/logo.png" },
    { label: "Moon Youth Socity", src: "/logo/MYS-LOGO.png" },
    {
      label: "Moon Language Club",
      src: "/logo/Moon-Language-Club-Logo-Update.png",
    },
  ];

  return (
    <div>
      <Container className="pb-20 flex gap-10 justify-center items-center">
        {logos.map((item, index) => (
          <Image
            key={index}
            className="w-24 h-20 object-contain"
            sizes="100vw"
            width={0}
            height={0}
            src={item.src}
            alt={item.label}
          />
        ))}
      </Container>
    </div>
  );
};

export default Logos;
