"use client";
import Container from "@/components/container";
import FormSubmittedModal from "@/components/modals/form-submitted-modal";
import NumSpan from "@/components/num-span";
import PrimaryButton from "@/components/primary-button";
import LineShapes from "@/components/shapes/line-shapes";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant2 } from "@/lib/animations/variants";
import { CourseType } from "@/lib/types/course";
import { convertToBanglaNumber } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import AdmissionFormModal from "../admission-form-modal/admission-form-modal";

const CourseDetails = ({ course }: { course: CourseType }) => {
  const { name, description1, description2, fee, discount, image } = course;
  const { type, amount, endDate } = discount;
  const [formModal, setFormModal] = useState(false);
  const [submittedModal, setSubmittedModal] = useState(false)

  const generateDiscount = () => {
    const discountEndDate = convertToBanglaNumber(endDate);
    const discountAmountText = formatDiscountAmount(type, amount);
    const feeAfterDiscount = convertToBanglaNumber(calculateFeeAfterDiscount(fee, type, amount));
    return { discountEndDate, discountAmountText, feeAfterDiscount };
  };
  const { discountEndDate, discountAmountText, feeAfterDiscount } = generateDiscount();

  return (
    <Container className="pb-10 xl:py-10 flex flex-col-reverse xl:flex-row gap-10 xl:gap-20 relative">
      <LineShapes lightClassName="left-[350px]" />

      <div className="flex flex-col gap-5 w-full xl:w-1/2 z-40">
        <h1 className="text-4xl text-foreground font-extrabold">
          {name}
        </h1>
        <div className="text-justify flex flex-col gap-3 text-[17px]">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <h3 className="text-2xl font-bold">
            কোর্স ফি ৳ <NumSpan>{convertToBanglaNumber(fee)}</NumSpan> টাকা
          </h3>

          <div className="flex items-center gap-3 xl:gap-5">
            <AdmissionFormModal isOpen={formModal} setIsOpen={setFormModal} setSubmittedModal={setSubmittedModal} />
            <FormSubmittedModal isOpen={submittedModal} setIsOpen={setSubmittedModal} />

            <PrimaryButton size="lg" onClick={() => setFormModal(true)}>
              ডিস্কাউন্টে ভর্তি হোন
            </PrimaryButton>

            <h3 className="text-2xl font-bold text-primary-lighter">৳ <NumSpan>{feeAfterDiscount}</NumSpan> টাকা</h3>
          </div>

          <p className="font-semibold text-[17px] text-secondary mt-1">
            [আগামী <NumSpan>{discountEndDate}</NumSpan> ইং তারিখ পর্যন্ত <NumSpan>{discountAmountText}</NumSpan> ডিস্কাউন্টে কোর্স ফি মাত্র ৳ <NumSpan>{feeAfterDiscount}</NumSpan>/- টাকা]
          </p >
        </div >
      </div>

      <div className="w-full xl:w-1/2 z-40">
        <ScrollAnimation variants={variant2}>
          <Image
            className="w-full xl:h-[390px] object-cover object-center rounded-card shadow-lg  hover:scale-[1.02] transition-all duration-500"
            sizes="100vw"
            width={0}
            height={0}
            src={image}
            alt={name}
          />
        </ScrollAnimation>
      </div>
    </Container >
  );
};

export default CourseDetails;


const calculateFeeAfterDiscount = (fee: number, type: string, amount: number) => {
  return type === 'taka' ? fee - amount : fee - (fee * amount / 100);
};
const formatDiscountAmount = (type: string, amount: number) => {
  return type === 'taka' ? `${convertToBanglaNumber(amount)}/-` : `${convertToBanglaNumber(amount)}%`;
};