import { ServiceType } from "./service";

interface DiscountType {
  type: string;
  amount: number;
  endDate: string;
}

export interface CourseType {
  id: number;
  name: string;
  title: string;
  description1: string;
  description2: string;
  category: string;
  image: string;
  fee: number;
  discount: DiscountType;
  metorIds: number[];
  services: ServiceType[];
}
