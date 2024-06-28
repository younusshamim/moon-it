import PrimaryButton from "@/components/primary-button";
import Select from "@/components/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import courseList from "@/data/course-list";
import { convertToBanglaNumber } from "@/lib/utils";
import Image from "next/image";

const AdmissionForm = () => {
  const courseOptions = courseList.map(course => {
    return { label: course.name, value: course.id.toString() }
  })

  return (
    <div className="flex flex-col gap-7 px-10 py-5">
      <div className="flex flex-col items-center">
        <Image
          src="/logo/logo.png"
          alt="Moon IT"
          className="w-[180px] h-auto object-contain mb-5"
          height={0}
          width={0}
          sizes="100vw"
        />
        <h1 className="text-3xl font-black text-primary mb-1">
          নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন
        </h1>
        <h3 className="font-semibold">
          ফর্মটি পূরণ করার পর আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
        </h3>
      </div>

      <form className="grid grid-cols-2 gap-5">
        <Input
          label="আপনার নাম (Only English)"
          placeholder="ইংরেজিতে আপনার নাম লিখুন"
        />
        <Input
          label="ফোন নাম্বার (Only English)"
          placeholder="ইংরেজিতে ফোন নাম্বার লিখুন"
        />

        <Select
          label="আপনি যে কোর্সটি করতে চাচ্ছেন"
          placeholder="আপনি যে কোর্সটি করতে চাচ্ছেন"
          options={courseOptions}
        />

        <Input
          label="ডিস্কাউন্টে কোর্স ফি"
          value={`${convertToBanglaNumber(1350)}/-`}
          inputClassName="disabled:opacity-100 font-sans"
          disabled
        />
        <Textarea label="আপনার ঠিকানা" placeholder="আপনার ঠিকানা লিখুন" className="col-span-2" />

        <PrimaryButton className="col-span-2 mt-5">সাবমিট করুন</PrimaryButton>
      </form>
    </div>
  );
};

export default AdmissionForm;
