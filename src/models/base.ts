export interface BaseModel {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type BaseResponseModel<T = null> =
  | {
      data?: T[] | null;
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{ path: string; message: string }>;
    }
  | null;
