import { ServiceType } from "./service";

type DiscountType = {
  type: "amount" | "percentage";
  value: number;
  endDate: string;
} | null;

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
