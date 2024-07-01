import { ServiceType } from "@/lib/types/service";
import ServiceCard from "./service-card";

const ServicesSection = ({ servicesData }: { servicesData: ServiceType[] }) => {
  return (
    <div className="bg-background2 grid grid-cols-3 gap-0 p-5 shadow-sm rounded-card border border-border">
      {servicesData.map((service, index) => {
        return <ServiceCard service={service} key={index} index={index} />;
      })}
    </div>
  );
};

export default ServicesSection;
