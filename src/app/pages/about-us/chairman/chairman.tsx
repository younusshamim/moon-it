import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant3 } from "@/lib/animations/variants";
import Image from "next/image";
import React from "react";

const Chairman = () => {
  return (
    <Container className="pt-20 flex flex-col xl:flex-row gap-20 xl:gap-28 items-center justify-center">
      <div className="w-[calc(100%-50px)] xl:w-1/2 flex justify-start xl:justify-end relative">
        <ScrollAnimation variants={variant3} className="z-10">
          <Image
            className="w-full xl:w-[350px] h-[350px] xl:h-[400px] object-cover object-center rounded-card  border-white border-4 shadow-lg"
            sizes="100vw"
            width={0}
            height={0}
            src="/instructor/yousuf.jpg"
            alt="Moon IT Seminar"
          />
        </ScrollAnimation>
        <div className="w-full xl:w-[350px] h-[350px] xl:h-[400px] bg-primary-lighter dark:bg-background rounded-card absolute top-7 -right-5 xl:top-10 xl:-right-10 z-0 border-white border-4 shadow-lg"></div>
      </div>

      <div className="w-full xl:w-1/2  text-white">
        <p className="text-justify mb-4">
          সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত
          কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট
          কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার
          সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা7
          বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন।
          সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত
          কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন।
        </p>

        <p className=" text-justify mb-7">
          সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত
          কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট
          কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার
          সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা
          বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন।
        </p>

        <div className="flex flex-col items-center xl:items-start">
          <p className="text-lg font-bold">ইউছুপ শাহীন</p>
          <p className="mb-3">চেয়ারম্যান- মুন আইটি।</p>

          <Image
            className="w-24 h-auto"
            src="/logo/logoWhite.png"
            alt="Moon IT Logo"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      </div>
    </Container>
  );
};

export default Chairman;
