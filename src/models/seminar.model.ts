import { BaseModel } from "./base";

export interface SeminarModel extends BaseModel {
  name: String;
  contactNo: String;
  courseId: Number;
  attendPosibility: String;
  address?: String;
}
