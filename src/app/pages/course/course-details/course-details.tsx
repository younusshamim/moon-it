"use client";
import Container from "@/components/container";
import FormSubmittedModal from "@/components/modals/form-submitted-modal";
import NumSpan from "@/components/num-span";
import PrimaryButton from "@/components/primary-button";
import LineShapes from "@/components/shapes/line-shapes";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant2 } from "@/lib/animations/variants";
import { convertToBanglaNumber } from "@/lib/utils";
import { CourseType } from "@/types/course";
import { format } from 'date-fns';
import Image from "next/image";
import { useState } from "react";
import AdmissionFormModal from "../admission-form-modal/admission-form-modal";

const CourseDetails = ({ course }: { course: CourseType }) => {
  const { id, name, description1, description2, fee, discount, image } = course;
  const { type, value, endDate } = discount || { type: '', value: 0, endDate: '' };

  const [formModal, setFormModal] = useState(false);
  const [submittedModal, setSubmittedModal] = useState(false)

  const generateDiscount = () => {
    const discountEndDate = endDate;
    const discountAmountText = formatDiscountAmount(type, value);
    const feeAfterDiscount = calculateFeeAfterDiscount(fee, type, value);
    return { discountEndDate, discountAmountText, feeAfterDiscount };
  };
  const { discountEndDate, discountAmountText, feeAfterDiscount } = generateDiscount();


  const endOfDay = new Date(discountEndDate);
  endOfDay.setHours(23, 59, 59, 999);
  const isDiscount = feeAfterDiscount > 0 && fee !== feeAfterDiscount && new Date() <= endOfDay;

  return (
    <Container className="pb-10 lg:py-10 flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 relative">
      <LineShapes lightClassName="left-[350px]" />

      <div className="flex flex-col gap-5 w-full lg:w-1/2 z-40">
        <h1 className="text-4xl text-foreground font-extrabold">
          {name}
        </h1>
        <div className="text-justify flex flex-col gap-3 text-[17px]">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          {fee > 0 && (
            <h3 className="text-2xl font-bold">
              কোর্স ফি ৳ <NumSpan>{convertToBanglaNumber(fee)}</NumSpan> টাকা
            </h3>
          )}

          <div className="flex items-center gap-3 lg:gap-5">
            <AdmissionFormModal
              isOpen={formModal}
              setIsOpen={setFormModal}
              setSubmittedModal={setSubmittedModal}
              courseId={id}
              isDiscount={isDiscount}
              feeAfterDiscount={feeAfterDiscount}
            />
            <FormSubmittedModal isOpen={submittedModal} setIsOpen={setSubmittedModal} />

            <PrimaryButton size="lg" onClick={() => setFormModal(true)}>
              {isDiscount ? 'ডিস্কাউন্টে ভর্তি হোন' : 'ভর্তি হোন'}
            </PrimaryButton>

            {isDiscount && (
              <h3 className="text-2xl font-bold text-primary-lighter">৳ <NumSpan>{convertToBanglaNumber(feeAfterDiscount)}</NumSpan> টাকা</h3>
            )}
          </div>

          {isDiscount && (
            <p className="font-semibold text-[17px] text-secondary mt-1">
              [আগামী <NumSpan>{convertToBanglaNumber(format(new Date(discountEndDate), 'dd/MM/yyyy'))}</NumSpan> ইং তারিখ পর্যন্ত <NumSpan>{discountAmountText}</NumSpan> ডিস্কাউন্টে কোর্স ফি মাত্র ৳ <NumSpan>{convertToBanglaNumber(feeAfterDiscount)}</NumSpan>/- টাকা]
            </p >
          )}
        </div >
      </div>

      <div className="w-full lg:w-1/2 z-40">
        <ScrollAnimation variants={variant2}>
          <Image
            className="w-full lg:h-[390px] object-cover object-center rounded-card shadow-lg  hover:scale-[1.02] transition-all duration-500"
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


const calculateFeeAfterDiscount = (fee: number, type: string, value: number) => {
  if (fee === 0) return 0;
  return type === 'amount' ? fee - value : fee - (fee * value / 100);
};
const formatDiscountAmount = (type: string, value: number) => {
  return type === 'amount' ? `${convertToBanglaNumber(value)}/-` : `${convertToBanglaNumber(value)}%`;
};