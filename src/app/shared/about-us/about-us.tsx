import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import Image from "next/image";
import React from "react";
import LineShapes from "../../../components/shapes/line-shapes";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant2 } from "@/lib/animations/variants";

const AboutUs = () => {
  return (
    <div className="relative">
      <LineShapes lightClassName="left-[500px]" />

      <Container className="pt-5 xl:pt-20 pb-10 flex flex-col-reverse xl:flex-row gap-20 items-center">
        <div className="w-full xl:w-1/2 z-40 flex flex-col gap-2">
          <p className="font-bold text-xl">প্রতিষ্ঠান সম্পর্কে কিছু কথা</p>

          <h2 className="text-4xl text-foreground-dark font-extrabold mb-4">
            <GradientText>
              সাফল্যের <span className="font-sans">১৯</span> বছর
            </GradientText>{" "}
            আইটি এক্সপার্ট তৈরির জগতে ফেনীর বিশ্বস্ত প্রতিষ্ঠান
          </h2>

          <p className="text-justify text-[17px]">

          </p>

          {/* <p className="text-justify mb-3 text-[17px]">
            বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ আইটি
            ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’
            প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ আইটি ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’
            ইনস্টিটিউট।
          </p>

          <p className="text-justify text-[17px]">
            অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’ প্রস্তুত আপনার  ক্যারিয়ার গড়ার অগ্রযাত্রায়। বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ আইটি ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’
            প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ আইটি ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’
            ইনস্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’ প্রস্তুত আপনার  ক্যারিয়ার গড়ার অগ্রযাত্রায়।
          </p> */}
        </div>

        <div className="w-full xl:w-1/2 z-40">
          <ScrollAnimation variants={variant2}>
            <Image
              className="w-full h-[380px] object-cover object-bottom shadow-lg shadow-slate-400 dark:shadow-slate-700 rounded-card hover:scale-[1.02] transition-all duration-500"
              sizes="100vw"
              width={0}
              height={0}
              src="/photo/technical-school.jpg"
              alt="Moon IT Seminar"
            />
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
