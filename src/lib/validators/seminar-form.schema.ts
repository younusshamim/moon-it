import { z } from "zod";
import {
  englishRegex,
  validateContactNo,
  validateOptionalEmail,
} from "./common-rules";

export const seminarFormSchema = z.object({
  id: z.number().optional(),
  name: z
    .string()
    .min(1, { message: "নাম আবশ্যক" })
    .regex(englishRegex, { message: "নাম ইংরেজি ভাষায় হতে হবে" }),
  contactNo: validateContactNo,
  courseId: z.number({ message: "কোর্স সিলেক্ট করুন" }),
  email: validateOptionalEmail,
  address: z.string().optional(),
});

export type CreateSeminarFormInput = z.infer<typeof seminarFormSchema>;
export type SeminarFormType = Required<CreateSeminarFormInput>;
