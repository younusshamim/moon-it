"use client";
import Container from "@/components/container";
import LineShapes from "@/components/shapes/line-shapes";
import Image from "next/image";
import React from "react";
import { IoIosCall, IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdAccessTime } from "react-icons/md";

const Address = () => {
  return (
    <Container className="pt-10 pb-20">
      <p className="text-lg justify-center">
        যে কোনো প্রয়োজনে যোগাযোগ করতে সরাসরি আমাদের অফিস ভিজিট করতে পারেন।
        তাছাড়া হটলাইন নম্বরে কল করে জেনে নিতে পারেন ট্রেইনিং সংক্রান্ত যেকোনো
        তথ্য। এছাড়াও উল্লেখিত মেইলে কিংবা ফেসবুক ম্যাসেঞ্জারেও নক দিতে পারেন।
      </p>

      <div className="flex items-center gap-10 relative">
        <LineShapes />

        <div className="w-3/5 z-50">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-50 dark:bg-card p-5 rounded-card flex flex-col justify-center">
              <h3 className="font-bold text-lg">ঠিকানা-</h3>
              <div className="flex gap-3 items-center mb-3">
                <IoLocationSharp className="text-2xl" />
                <p className="w-full">
                  মনোয়ারা ম্যানশন, স্টেডিয়াম রোড, একাডেমী (আইয়ুব আলী
                  চেম্বার/নূরীয়া মসজিদ সংলগ্ন), ফেনী।
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-card p-5 rounded-card flex flex-col justify-center">
              <h3 className="font-bold text-lg">অফিস ভিজিটের সময়-</h3>
              <div className="flex gap-3 items-center mb-3">
                <MdAccessTime className="text-2xl" />
                <p>
                  শনিবার - বৃহস্পতিবার <br /> সকাল ৯ টা থেকে রাত ৮ টা
                </p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-card p-5 rounded-card flex flex-col justify-center">
              <h3 className="font-bold text-lg">ফোন নাম্বার-</h3>
              <div className="flex gap-3 items-center mb-3">
                <IoIosCall className="text-2xl" />
                <div>
                  <p>01785-882381</p>
                  <p>01820-008479</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-card p-5 rounded-card flex flex-col justify-center">
              <h3 className="font-bold text-lg">ই-মেইল-</h3>
              <div className="flex gap-3 items-center mb-3">
                <MdEmail className="text-2xl" />
                <p>moon69032@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 z-50">
          <Image
            className="w-full h-auto"
            sizes="100vw"
            src="/illustration/location (2).png"
            width={0}
            height={0}
            alt="Address illustration"
          />
        </div>
      </div>
    </Container>
  );
};

export default Address;
