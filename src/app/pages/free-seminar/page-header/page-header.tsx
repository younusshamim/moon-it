import Container from "@/components/container";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const PageHeader = () => {
  return (
    <Container>
      <div
        style={{ backgroundImage: `url(/photo/seminar.jpg)` }}
        className="my-5 w-full h-[250px] bg-center bg-no-repeat bg-cover rounded-md text-white"
      >
        <div className="bg-black bg-opacity-65 w-full h-full  text-white text-4xl text-center py-20 rounded-md flex gap-3 items-center justify-center">
          <h1 className="spacing font-black">ফ্রি সেমিনার</h1>
          {/* <h1 className="spacing font-black">প্রফেশনাল গ্রাফিক্স ডিজাইন</h1> */}
          <IoCheckmarkCircle />
        </div>
      </div>
    </Container>
  );
};

export default PageHeader;