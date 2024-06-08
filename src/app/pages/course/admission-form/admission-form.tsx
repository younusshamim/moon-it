import PrimaryButton from "@/components/primary-button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { convertToBanglaNumber } from "@/lib/utils";
import Image from "next/image";

const AdmissionForm = () => {
  return (
    <div className="flex flex-col gap-7 py-5  w-2/3 place-self-center">
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

      <form className="flex flex-col gap-5 w-full">
        {/* <Input
          label="আপনার নাম (Only English)"
          placeholder="ইংরেজিতে আপনার নাম লিখুন"
        />
        <Input
          label="ফোন নাম্বার (Only English)"
          placeholder="ইংরেজিতে ফোন নাম্বার লিখুন"
        />{" "}
        <Input
          label="ডিস্কাউন্টে কোর্স ফি"
          value={convertToBanglaNumber(7350)}
          disabled
        />
        <Textarea label="আপনার ঠিকানা" placeholder="আপনার ঠিকানা লিখুন" /> */}
        <PrimaryButton size="lg">সাবমিট করুন</PrimaryButton>
      </form>
    </div>
  );
};

export default AdmissionForm;
