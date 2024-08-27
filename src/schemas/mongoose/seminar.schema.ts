import mongoose from "mongoose";

const SeminarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 50,
    },
    contactNo: {
      type: String,
      required: true,
      unique: true,
      max: 20,
    },
    courseId: {
      type: Number,
      required: true,
    },
    attendPosibility: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
      max: 200,
    },
  },
  { timestamps: true }
);

export interface ISeminar extends Document {
  name: string;
  contactNo: string;
  courseId: number;
  attendPosibility: string;
  address?: string;
}

export const Seminar =
  mongoose.models?.Seminar ||
  mongoose.model<ISeminar>("Seminar", SeminarSchema);
