"use client";
import ControlledSelect from "@/components/controlled-select";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import Select from "@/components/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import courseList from "@/data/course-list";
import { CreateSeminarFormInput, seminarFormSchema } from "@/lib/validators/seminar-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const SeminarForm = () => {
  // hooks 
  const methods = useForm<CreateSeminarFormInput>({
    resolver: zodResolver(seminarFormSchema),
  });

  const { register,
    handleSubmit,
    control,
    watch,
    formState: { errors }, } = methods;

  // handler 
  const onSubmit: SubmitHandler<CreateSeminarFormInput> = (data: CreateSeminarFormInput) => console.log(data)

  // data 
  const courseOptions = courseList.map(course => {
    return { label: course.name, value: course.id.toString() }
  })

  return (
    <div className="w-3/5 p-10 z-50">
      <h1 className="spacing text-3xl mb-[6px] font-black text-foreground-dark text-center">
        জয়েন <GradientText>ফ্রি সেমিনার</GradientText>
      </h1>
      <p className="text-center mb-10">
        ফর্মটি পূরণ করার পর আমাদের প্রতিনিধি শীঘ্রই সেমিনারের সময় এবং
        বিস্তারিত আপনাকে জানিয়ে দিবেন।
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
        <Input
          label="আপনার নাম (Only English)"
          placeholder="ইংরেজিতে আপনার নাম লিখুন"
          inputClassName="bg-white"
          {...register("name")}
          error={errors.name?.message as string}
        />
        <Input
          label="ফোন নাম্বার (Only English)"
          placeholder="ইংরেজিতে ফোন নাম্বার লিখুন"
          {...register("contactNo")}
          error={errors.contactNo?.message as string}
        />
        <ControlledSelect
          label="কোর্স সিলেক্ট"
          placeholder="কোর্স সিলেক্ট করুন"
          name="courseId"
          options={courseOptions}
          control={control}
          error={errors.courseId?.message as string}
        />
        <Input
          label="ইমেইল" placeholder="ইমেইল লিখুন"
          inputClassName="bg-white"
          {...register("email")}
          error={errors.email?.message as string}
        />
        <Textarea
          label="আপনার ঠিকানা"
          placeholder="আপনার ঠিকানা লিখুন"
          className="col-span-2"
          inputClassName="bg-white"
          {...register("address")}
          error={errors.address?.message as string}
        />

        <div className="col-span-2 flex justify-center mt-5">
          <PrimaryButton type="submit" className="px-12">
            সাবমিট করুন
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default SeminarForm;
