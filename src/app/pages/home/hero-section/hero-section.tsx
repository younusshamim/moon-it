import React from "react";
import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import { MdOutlineComputer } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import GradientText from "@/components/gradient-text";
import Link from "next/link";
import LineShapes from "./line-shapes";

const HeroSection = () => {
  return (
    <div className="relative">
      <LineShapes />

      <Container className="h-[550px] flex items-center justify-between gap-28 ">
        <div className="w-full flex flex-col gap-7">
          <h2 className="font-bold text-[17px] shadow-md rounded-btn w-fit px-3 py-1">
            <BsStars className="inline text-xl text-primary mr-1" />
            ফেনীর সেরা আইটি ট্রেনিং ইনষ্টিটিউটে
          </h2>

          <h2 className="text-foreground-dark font-extrabold text-[52px] leading-tight">
            নিজেকে গড়ে তুলুন <GradientText>আইটি এক্সপার্ট</GradientText> {""}
            ‍হিসেবে।
          </h2>

          <h1 className="text-justify text-lg">
            বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ আইটি
            ইনষ্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’
            প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়।
          </h1>

          <div className="flex gap-4 ">
            <Link href="free-seminar">
              <PrimaryButton size="lg" iconRight={<MdOutlineComputer />}>
                ফ্রি সেমিনার
              </PrimaryButton>
            </Link>

            <Link href="courses">
              <PrimaryButton
                iconRight={<MdOutlineComputer className="text-primary" />}
                variant="outline"
                size="lg"
              >
                সব কোর্স
              </PrimaryButton>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Image
              className="w-16 h-auto"
              sizes="100vw"
              width={0}
              height={0}
              src="/logo/BTEB-Logo.png"
              alt="Bangladesh Technical Education Board (BTEB)"
            />
            <h2 className="font-semibold w-2/4 text-justify text-md">
              বাংলাদেশ কারিগরি শিক্ষা বোর্ড কর্তৃক অনুমোদিত আইটি ট্রেনিং
              ইনষ্টিটিউট।
            </h2>
          </div>
        </div>

        <div className="w-full">
          <Image
            className="w-full h-[400px] object-cover rounded-card shadow-lg shadow-slate-400 dark:shadow-slate-700"
            sizes="100vw"
            width={0}
            height={0}
            src="/photo/protait1.jpg"
            alt="Moon IT Lab Computers"
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
