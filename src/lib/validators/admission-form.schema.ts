import { z } from "zod";
import { englishRegex, validateContactNo } from "./common-rules";

export const admissionFormSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .min(1, { message: "নাম আবশ্যক" })
    .regex(englishRegex, { message: "নাম ইংরেজি ভাষায় হতে হবে" }),
  contactNo: validateContactNo,
  courseId: z.number({ message: "কোর্স সিলেক্ট করুন" }),
  courseFee: z.number(),
  address: z.string().optional(),
});

export type CreateAdmissionFormInput = z.infer<typeof admissionFormSchema>;
export type AdmissionFormType = Required<CreateAdmissionFormInput>;
