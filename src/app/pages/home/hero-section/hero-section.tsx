import React from "react";
import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import { MdOutlineComputer } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import GradientText from "@/components/gradient-text";
import Link from "next/link";
import LineShapes from "./line-shapes";
import { Carousel } from "@/components/carousel";
import { CarouselItem } from "@/components/ui/carousel";

const images = [
  { img: '/photo/protait1.jpg', title: 'Protait' },
  { img: '/photo/seminar.jpg', title: 'Seminar' },
  { img: '/photo/technical-school.jpg', title: 'Technical School' },
]

const HeroSection = () => {
  return (
    <div className="relative">
      <LineShapes />

      <Container className="py-9 flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-28">
        <div className="w-full flex flex-col gap-7 z-40 items-center xl:items-start text-center xl:text-start">
          <h2 className="font-bold text-[17px] shadow-md rounded-btn w-fit px-3 py-1">
            <BsStars className="inline text-xl text-primary mr-1" />
            ফেনীর সেরা আইটি ট্রেনিং ইনষ্টিটিউটে
          </h2>

          <h2 className="text-foreground-dark font-extrabold text-[40px] xl:text-[52px] leading-snug">
            নিজেকে গড়ে তুলুন <GradientText>আইটি এক্সপার্ট</GradientText> {""}
            ‍হিসেবে।
          </h2>

          <h1 className="xl:text-justify xl:text-lg">
            বৃহত্তর ফেনী/নোয়াখালীতে সর্বোচ্চ আসন ও ডিপার্টমেন্ট সমৃদ্ধ আইটি
            ইনষ্টিটিউট। অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ‘মুন আইটি’
            প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়।
          </h1>

          <div className="flex gap-4 z-40 w-full xl:w-fit">
            <Link href="free-seminar" className="w-1/2 xl:w-fit">
              <PrimaryButton size="lg" iconRight={<MdOutlineComputer />} className="w-full xl:w-fit">
                ফ্রি সেমিনার
              </PrimaryButton>
            </Link>

            <Link href="courses" className="w-1/2 xl:w-fit">
              <PrimaryButton
                iconRight={<MdOutlineComputer className="text-primary" />}
                variant="outline"
                size="lg" className="w-full xl:w-fit"
              >
                সব কোর্স
              </PrimaryButton>
            </Link>
          </div>

          {/* <div className="flex items-center gap-2 xl:gap-4 z-40 ">
            <Image
              className="w-16 h-auto"
              sizes="100vw"
              width={0}
              height={0}
              src="/logo/BTEB-Logo.png"
              alt="Bangladesh Technical Education Board (BTEB)"
            />
            <h2 className="font-semibold w-full xl:w-2/4 text-left xl:text-justify text-sm xl:text-base">
              বাংলাদেশ কারিগরি শিক্ষা বোর্ড কর্তৃক অনুমোদিত আইটি ট্রেনিং
              ইনষ্টিটিউট।
            </h2>
          </div> */}
        </div>

        <div className="w-full z-40">
          <Carousel className="shadow-lg shadow-gray-400 dark:shadow-gray-700 rounded-card hover:scale-[1.02] transition-all duration-500" imgOverlaySlider={true}>
            {images.map(item => (
              <CarouselItem key={item.title}>
                <Image
                  className="w-full h-[300px] xl:h-[420px] object-cover rounded-card"
                  sizes="100vw"
                  width={0}
                  height={0}
                  src={item.img}
                  alt={item.title}
                />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
