import { ServiceType } from "@/lib/types/service";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type PropsTypes = {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: PropsTypes) => {
  const borderRight =
    (index === 0 || index === 1 || index === 3 || index === 4) && "border-r ";
  const borderBottom =
    (index === 0 || index === 1 || index === 2) && "border-b ";
  const classNames = [borderRight, borderBottom];

  return (
    <div
      className={cn(
        "px-8 py-5 text-center border-gray-100 flex flex-col items-center gap-1",
        classNames
      )}
    >
      <Image
        className="w-16 h-16 mb-1"
        sizes="100vw"
        width={0}
        height={0}
        src={service.image}
        alt={service.title}
      />
      <h3 className="text-xl font-bold text-foreground-dark">{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
