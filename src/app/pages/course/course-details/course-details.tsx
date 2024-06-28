"use client";
import React from "react";
import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import { convertToBanglaNumber } from "@/lib/utils";
import Image from "next/image";
import { CourseType } from "@/lib/types/course";
import AdmissionForm from "../admission-form/admission-form";
import Modal from "@/components/modal";

const CourseDetails = ({ course }: { course: CourseType }) => {
  return (
    <Container className="py-10 flex gap-20">
      <div className="w-1/2">
        <h1 className="text-4xl text-foreground font-extrabold mb-4">
          {course.name}
        </h1>
        <div className="text-justify flex flex-col gap-3 mb-7 text-[17px]">
          <p>{course.description1}</p>
          <p>{course.description2}</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold my-7">
            কোর্স ফি ৳ {convertToBanglaNumber(course.fee)} টাকা
          </h3>

          <div className="flex items-center gap-5 mb-2">
            <Modal
              triggerBtn={<PrimaryButton size="lg">ডিস্কাউন্টে ভর্তি হোন</PrimaryButton>}
              className="bg-card "
            >
              <AdmissionForm />
            </Modal>

            <h3 className="text-2xl font-bold text-primary-lighter">৳ ৭৩৫০ টাকা</h3>
          </div>
          <p className="font-semibold text-[17px]">
            আগামী ০৭/০৩/২০২৪ ইং তারিখ পর্যন্ত ৫০% ডিস্কাউন্টে কোর্স ফি মাত্র ৳
            ৭৩৫০/- টাকা
          </p>
        </div>
      </div>

      <div className="w-1/2">
        <Image
          className="w-full h-[350px] object-cover object-center rounded-card shadow-lg "
          sizes="100vw"
          width={0}
          height={0}
          src={course.image}
          alt={course.name}
        />
      </div>
    </Container>
  );
};

export default CourseDetails;
