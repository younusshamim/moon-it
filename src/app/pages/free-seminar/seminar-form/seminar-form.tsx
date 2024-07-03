"use client";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import Select from "@/components/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import courseList from "@/data/course-list";

const SeminarForm = () => {
  const courseOptions = courseList.map(course => {
    return { label: course.name, value: course.id.toString() }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-3/5 p-10">
      <h1 className="spacing text-3xl mb-[6px] font-black text-foreground-dark text-center">
        জয়েন <GradientText>ফ্রি সেমিনার</GradientText>
      </h1>
      <p className="text-center mb-10">
        ফর্মটি পূরণ করার পর আমাদের প্রতিনিধি শীঘ্রই সেমিনারের সময় এবং
        বিস্তারিত আপনাকে জানিয়ে দিবেন।
      </p>

      <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
        <Input
          label="আপনার নাম (Only English)"
          placeholder="ইংরেজিতে আপনার নাম লিখুন"
          inputClassName="bg-white"
        />
        <Input
          label="ফোন নাম্বার (Only English)"
          placeholder="ইংরেজিতে ফোন নাম্বার লিখুন"
        />

        <Select
          label="কোর্স সিলেক্ট"
          placeholder="কোর্স সিলেক্ট করুন"
          options={courseOptions}
          inputClassName="bg-white"
        />
        <Input
          label="ইমেইল" placeholder="ইমেইল লিখুন"
          inputClassName="bg-white"
        />
        <Textarea
          label="আপনার ঠিকানা"
          placeholder="আপনার ঠিকানা লিখুন"
          className="col-span-2"
          inputClassName="bg-white"
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
