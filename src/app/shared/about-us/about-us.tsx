import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import Image from "next/image";
import React from "react";
import LineShapes from "../../../components/shapes/line-shapes";

const AboutUs = () => {
  return (
    <div className="relative">
      <LineShapes lightClassName="left-[500px]" />

      <Container className="pt-20 pb-10 flex gap-20 items-center">
        <div className="w-1/2 z-40">
          <p className="font-bold text-xl mb-1">প্রতিষ্ঠান সম্পর্কে কিছু কথা</p>

          <h2 className="text-4xl text-foreground-dark font-extrabold mb-4">
            <GradientText>
              সাফল্যের <span className="font-sans">১৮</span> বছর
            </GradientText>{" "}
            আইটি এক্সপার্ট
            <br /> তৈরির জগতে বিশ্বস্ত প্রতিষ্ঠান
          </h2>

          <p className=" text-justify">
            সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই
            উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত
            এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে
            নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের
            সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে
            পারেন। সেমিনারে উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি
            সহজেই উপযুক্ত কোর্স বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে
            উপস্থিত এক্সপার্ট কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স
            বেছে নেওয়ার সিদ্ধান্ত নিতে পারেন। সেমিনারে উপস্থিত এক্সপার্ট
            কাউন্সেলরের সাথে কথা বলে আপনি সহজেই উপযুক্ত কোর্স বেছে নেওয়ার
            সিদ্ধান্ত নিতে পারেন।
          </p>
        </div>

        <div className="w-1/2 z-40">
          <Image
            className="w-full h-[380px] object-cover object-bottom shadow-lg shadow-slate-400 dark:shadow-slate-700 rounded-card hover:scale-[1.02] transition-all duration-500"
            sizes="100vw"
            width={0}
            height={0}
            src="/photo/technical-school.jpg"
            alt="Moon IT Seminar"
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
