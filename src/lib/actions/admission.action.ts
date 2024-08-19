"use server";

import { Admission } from "../models/admission.model";
import { convertToEnglishNumber } from "../utils";
import { connectToDatabase } from "../utils/db";
import { AdmissionType } from "../validators/admission.schema";

export const onAdmission = async (data: AdmissionType) => {
  const newData = {
    ...data,
    courseFee: Number(convertToEnglishNumber(data.courseFee)),
  };
  try {
    await connectToDatabase();
    const response = await Admission.create(newData);
    return response.toObject();
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong!" };
  }
};

// console.log("actionData", newData);
//   revalidatePath(routes.home());
//   revalidateTag('contact');
//   redirect(routes.contactId({ contactId }));
