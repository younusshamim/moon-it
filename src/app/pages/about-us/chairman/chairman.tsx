import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import Image from "next/image";
import React from "react";

const Chairman = () => {
  return (
    <Container className="py-20 flex gap-28 items-center justify-center">
      <div className="w-1/2 flex justify-end relative">
        <Image
          className="w-[350px] h-[400px] object-cover object-center rounded-card -rotate-3 z-10 border-white border-4 shadow-lg"
          sizes="100vw"
          width={0}
          height={0}
          src="/instructor/yousuf.jpg"
          alt="Moon IT Seminar"
        />
        <div className="w-[350px] h-[400px] bg-foreground rounded-card absolute top-10 -right-10 z-0 border-white border-4 shadow-lg"></div>
      </div>

      <div className="w-1/2  text-white">
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

        <div>
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
