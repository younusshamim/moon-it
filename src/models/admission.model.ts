import { BaseModel } from "./base";

export interface AdmissionModel extends BaseModel {
  name: String;
  contactNo: String;
  courseId: Number;
  courseFee: Number;
  address?: String;
}
