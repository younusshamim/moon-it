"use client";
import React from "react";
import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import { convertToBanglaNumber } from "@/lib/utils";
import Image from "next/image";
import { CourseType } from "@/lib/types/course";
import AdmissionForm from "../admission-form/admission-form";
import Modal from "@/components/modal";
import NumSpan from "@/components/num-span";
import LineShapes from "@/components/shapes/line-shapes";

const CourseDetails = ({ course }: { course: CourseType }) => {
  const { name, description1, description2, fee, discount, image } = course;
  const { type, amount, endDate } = discount;

  const generateDiscount = () => {
    const discountEndDate = convertToBanglaNumber(endDate);
    const discountAmountText = formatDiscountAmount(type, amount);
    const feeAfterDiscount = convertToBanglaNumber(calculateFeeAfterDiscount(fee, type, amount));
    return { discountEndDate, discountAmountText, feeAfterDiscount };
  };
  const { discountEndDate, discountAmountText, feeAfterDiscount } = generateDiscount();

  return (
    <Container className="py-10 flex gap-20 relative">
      <LineShapes lightClassName="left-[350px]" />

      <div className="w-1/2 z-40">
        <h1 className="text-4xl text-foreground font-extrabold mb-4">
          {name}
        </h1>
        <div className="text-justify flex flex-col gap-3 mb-7 text-[17px]">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold my-7">
            কোর্স ফি ৳ <NumSpan>{convertToBanglaNumber(fee)}</NumSpan> টাকা
          </h3>

          <div className="flex items-center gap-5 mb-2">
            <Modal
              triggerBtn={<PrimaryButton size="lg">ডিস্কাউন্টে ভর্তি হোন</PrimaryButton>}
            >
              <AdmissionForm />
            </Modal>

            <h3 className="text-2xl font-bold text-primary-lighter">৳ <NumSpan>{feeAfterDiscount}</NumSpan> টাকা</h3>
          </div>
          <p className="font-semibold text-[17px]">
            আগামী <NumSpan>{discountEndDate}</NumSpan> ইং তারিখ পর্যন্ত <NumSpan>{discountAmountText}</NumSpan> ডিস্কাউন্টে কোর্স ফি মাত্র ৳ <NumSpan>{feeAfterDiscount}</NumSpan>/- টাকা
          </p >
        </div >
      </div>

      <div className="w-1/2 z-40">
        <Image
          className="w-full h-[350px] object-cover object-center rounded-card shadow-lg  hover:scale-[1.02] transition-all duration-500"
          sizes="100vw"
          width={0}
          height={0}
          src={image}
          alt={name}
        />
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