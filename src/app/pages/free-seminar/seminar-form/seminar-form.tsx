"use client";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import courseList from "@/data/course-list";

const SeminarForm = () => {
  const courseOptions = courseList
    .filter(
      (item) => item.category !== "industrial" && item.category !== "advanced"
    )
    .map((course) => {
      return { name: course.name, value: course.id };
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="py-20 flex justify-center">
      <div className="w-2/3 ">
        <h1 className="spacing text-3xl mb-[6px] font-black text-foreground-dark text-center">
          জয়েন <GradientText>ফ্রি সেমিনার</GradientText>
        </h1>
        <p className="text-center mb-10">
          ফর্মটি পূরণ করার পর আমাদের প্রতিনিধি শীঘ্রই সেমিনারের সময় এবং
          বিস্তারিত আপনাকে জানিয়ে দিবেন।
        </p>

        <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
          {/* <Input label="পুরো নাম" placeholder="নাম লিখুন" type="text" />
          <Input
            label="মোবাইল"
            placeholder="মোবাইল নাম্বার লিখুন"
            type="text"
          />

          <SelectCom
            label="কোর্স সিলেক্ট"
            placeholder="কোর্স সিলেক্ট করুন"
            options={courseOptions}
          />

          <Input label="ইমেইল" placeholder="ইমেইল লিখুন" type="text" />
          <Textarea
            label="ঠিকানা"
            placeholder="ঠিকানা লিখুন"
            className="col-span-2"
          /> */}

          <div className="col-span-2 flex justify-center">
            <PrimaryButton type="submit" className="px-20">
              সাবমিট
            </PrimaryButton>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SeminarForm;
