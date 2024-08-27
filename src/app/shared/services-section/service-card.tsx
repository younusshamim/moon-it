import { cn } from "@/lib/utils";
import { ServiceType } from "@/types/service";
import Image from "next/image";

type PropsTypes = {
  service: ServiceType;
  index: number;
  dataLength: number;
}

const ServiceCard = ({ service, index, dataLength }: PropsTypes) => {
  return (
    <div
      className={cn("p-5 xl:p-10 text-center border-muted",
        { 'xl:border-r': (index + 1) % 3 !== 0 },
        { 'xl:border-b': dataLength - 3 > index },
        { 'border-t xl:border-t-0': index !== 0 },
      )}>
      <div className="hover:scale-105 transition-all duration-500 flex flex-col items-center gap-1">
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
    </div>
  );
};

export default ServiceCard;
