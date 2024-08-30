export interface BaseModel {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type BaseResponseModel<T = null> = {
  data?: T | T[] | null;
  status: "success" | "error";
  message: string;
} | null;
