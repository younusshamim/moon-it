"use server";

import { BaseResponseModel } from "@/models/base";
import { admissionSchema } from "@/schemas/zod/admission.schema";
import { ZodError } from "zod";
import { connectToDatabase } from "../config/db";
import { convertToEnglishNumber } from "../lib/utils";
import { Admission } from "../schemas/mongoose/admission.schema";

export const onAdmission = async (
  prevState: BaseResponseModel,
  formData: FormData
): Promise<BaseResponseModel> => {
  try {
    const data = admissionSchema.parse(formData);
    const newData = {
      ...data,
      courseFee: Number(convertToEnglishNumber(data.courseFee)),
    };

    await connectToDatabase();
    const admission = new Admission(newData);
    await admission.save();

    return {
      status: "success",
      message: `Welcome, Your form submitted successfully!`,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }

    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
};

// console.log("actionData", newData);
// revalidatePath(routes.home());
// revalidateTag('contact');
// redirect(routes.contactId({ contactId }));
