import { ServiceType } from "@/lib/types/service";
import ServiceCard from "./service-card";
import "./service-section.css";

const ServicesSection = ({ servicesData }: { servicesData: ServiceType[] }) => {
  return (
    <div className="service-section bg-background2 grid grid-cols-1 xl:grid-cols-3 gap-0 shadow-sm rounded-card border border-border p-5">
      {servicesData.map((service, index) => {
        return <ServiceCard
          service={service}
          key={index}
          index={index}
          dataLength={servicesData.length}
        />;
      })}
    </div>
  );
};

export default ServicesSection;

