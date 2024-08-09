import Container from "@/components/container";
import Image from "next/image";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-card ">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 xl:gap-0 place-items-center">
          {/* social and logo  */}
          <div className="flex flex-col items-center xl:items-start">
            <Image
              className="w-36 h-auto object-contain mb-5"
              src="/logo/logo.png"
              alt="Moon IT Logo"
              width="0"
              height="0"
              sizes="100vw"
            />

            <p className="font-bold mb-2">কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
            <div className="flex gap-3 text-3xl">
              <FaFacebook className="cursor-pointer rounded-full" />
              <FaInstagramSquare className="cursor-pointer rounded-full" />
              <FaLinkedin className="cursor-pointer rounded-full" />
            </div>
          </div>

          {/* contact and address  */}
          <div>
            <h3 className="font-bold text-xl mb-2">যোগাযোগ-</h3>

            <div className="flex gap-3 items-center mb-3">
              <IoLocationSharp className="text-2xl" />
              <p>
                মনোয়ারা ম্যানশন, স্টেডিয়াম রোড, একাডেমী <br /> (আইয়ুব আলী
                চেম্বার/নূরীয় মসজিদ সংলগ্ন), ফেনী।
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <IoIosCall className="text-2xl" />
              <p className="text-lg">01785-882381, 01820-008479</p>
            </div>
          </div>

          {/* quick links */}
          <div className="hidden xl:block">
            <h3 className="font-bold text-xl mb-2">কুইক লিংক-</h3>
            <div className="flex flex-col gap-1">
              <p className="cursor-pointer">ফটো গ্যালারী</p>
              <p className="cursor-pointer">জয়েন ফ্রি সেমিনার</p>
              <p className="cursor-pointer">সব কোর্স</p>
              <p className="cursor-pointer">আমাদের সম্পর্কে</p>
              {/* <p className="cursor-pointer">যোগাযোগ</p> */}
            </div>
          </div>

          {/* popular courses  */}
          <div className="hidden xl:block">
            <h3 className="font-bold text-xl mb-2">জনপ্রিয় কোর্স সমূহ-</h3>
            <div className="flex flex-col gap-1">
              <p className="cursor-pointer">প্রফেশনাল গ্রাফিক্স ডিজাইন</p>
              <p className="cursor-pointer">ডিজিটাল মার্কেটিং</p>
              <p className="cursor-pointer">
                ফাইন আর্টস (<span className="font-sans">১</span> বছর মেয়াদী)
              </p>
              <p className="cursor-pointer">
                কম্পিউটার টেকনোলজি (<span className="font-sans">১</span> বছর
                মেয়াদী)
              </p>
            </div>
          </div>
        </div>

        <hr className="border border-border my-10" />

        <p className="text-center">
          কপিরাইট ©{new Date().getFullYear()} মুন আইটি ট্রেইনিং ইনস্টিটিউট।
          সর্বস্বত্ব সংরক্ষিত।
        </p>
      </Container>
    </div>
  );
};

export default Footer;
