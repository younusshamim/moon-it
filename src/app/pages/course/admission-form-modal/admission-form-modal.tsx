import ControlledSelect from "@/components/controlled-select";
import Modal from "@/components/modal";
import PrimaryButton from "@/components/primary-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import courseList from "@/data/course-list";
import { convertToBanglaNumber } from "@/lib/utils";
import { admissionFormSchema, CreateAdmissionFormInput } from "@/lib/validators/admission-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

type PropsTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
}

const AdmissionFormModal = ({ isOpen, setIsOpen }: PropsTypes) => {
  const methods = useForm<CreateAdmissionFormInput>({
    resolver: zodResolver(admissionFormSchema),
    // defaultValues: aaaa,
  });

  const { register,
    handleSubmit,
    control,
    watch,
    formState: { errors }, } = methods;

  const onSubmit: SubmitHandler<CreateAdmissionFormInput> = (data: CreateAdmissionFormInput) => console.log(data)

  const courseOptions = courseList.map(course => {
    return { label: course.name, value: course.id.toString() }
  })

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-12 px-0 xl:px-10 py-5">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo/logo.png"
            alt="Moon IT"
            className="w-[150px] h-auto object-contain mb-7"
            height={0}
            width={0}
            sizes="100vw"
          />
          <h1 className="text-3xl font-extrabold text-primary mb-3 xl:mb-1">
            নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন
          </h1>
          <h3 className="font-medium w-4/5 xl:w-full">
            ফর্মটি পূরণ করার পর আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 xl:gap-5">
          <Input
            label="আপনার নাম (Only English)"
            placeholder="ইংরেজিতে আপনার নাম লিখুন"
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
            label="যে কোর্সটি করতে চাচ্ছেন"
            placeholder="যে কোর্সটি করতে চাচ্ছেন"
            name="courseId"
            options={courseOptions}
            control={control}
            error={errors.courseId?.message as string}
          />
          <Input
            label="ডিস্কাউন্টে কোর্স ফি"
            value={`${convertToBanglaNumber(1350)}/-`}
            inputClassName="disabled:opacity-100 font-sans"
            disabled
            {...register("courseFee")}
            error={errors.courseFee?.message as string}
          />
          <Textarea
            label="আপনার ঠিকানা"
            placeholder="আপনার ঠিকানা লিখুন"
            className="col-span-2"
            {...register("address")}
            error={errors.address?.message as string}
          />

          <PrimaryButton type="submit" className="col-span-2 mt-5">সাবমিট করুন</PrimaryButton>
        </form>
      </div>
    </Modal>
  );
};

export default AdmissionFormModal;
