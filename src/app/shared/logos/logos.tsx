import Container from "@/components/container";
import Image from "next/image";

const Logos = () => {
  const logos = [
    { label: "Moon IT Anniversary", src: "/logo/moon-aniversary.png" },
    {
      label: "Bangladesh Goverment",
      src: "/logo/BD_Government_Sea.png",
    },
    {
      label: "Bangladesh Technical Education Board (BTEB)",
      src: "/logo/BTEB-Logo.png",
    },
    {
      label: "Prodhan Montrir Karjaloy",
      src: "/logo/NSDA.png",
    },
    {
      label: "Jubo Unnoyon",
      src: "/logo/Jubo-unnoion.png",
    },
    { label: "Moon Youth Socity", src: "/logo/MYS-LOGO.png" },
    {
      label: "Moon Language Club",
      src: "/logo/Moon-Language-Club-Logo-Update.png",
    },
  ];

  return (
    <div className="">
      <Container className="pb-20 flex flex-wrap gap-10 justify-center items-center ">
        {logos.map((item, index) => (
          <Image
            key={index}
            className="w-[70px] h-20 lg:w-24 lg:h-20 object-contain hover:scale-110 duration-500"
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
