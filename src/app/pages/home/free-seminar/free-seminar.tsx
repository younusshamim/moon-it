import React from "react";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import PrimaryButton from "@/components/primary-button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const FreeSeminar = () => {
  return (
    <div className="bg-primary">
      <Container className="py-20 flex gap-20 items-center">
        <div className="w-1/2 ">
          <Image
            className="w-full h-[350px] object-cover object-center rounded-card shadow-lg"
            sizes="100vw"
            width={0}
            height={0}
            src="/photo/seminar.jpg"
            alt="Moon IT Seminar"
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-4xl font-extrabold mb-3 text-slate-100">
            অংশ নিন ফ্রি সেমিনারে
          </h2>

          <p className="text-justify text-slate-200">
            সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই
            উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত
            এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে
            নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের
            সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে
            পারেন।
          </p>

          <PrimaryButton
            size="lg"
            className="mt-7 border-white text-white"
            iconRight={<FaArrowRight className="text-white" />}
          >
            জয়েন ফ্রি সেমিনার
          </PrimaryButton>
        </div>
      </Container>
    </div>
  );
};

export default FreeSeminar;