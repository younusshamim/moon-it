import Container from "@/components/container";
import categories from "@/data/categories";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div>
      <Container className="py-10">
        <p className="text-lg justify-center mb-5">
          প্রতিটি কোর্সের সিলেবাস ব্যাসিক টু এডভান্স লেভেল পর্যন্ত এমনভাবে
          সাজানো হয়েছে, যাতে আপনি কোর্স শেষে প্রতিটি টপিকে কাজ করার আত্মবিশ্বাস
          পান।
        </p>

        <div className="grid grid-cols-4 gap-5">
          {categories.map((category, index) => (
            <div
              key={category.label + index}
              className={"bg-background2 dark:bg-card shadow-sm p-8 rounded-card text-center"}
            >
              <Image
                src={category.icon}
                height={0}
                width={0}
                sizes="100vw"
                className="w-[50px] h-auto object-contain mx-auto mb-2"
                alt={category.label}
              />
              <p className="text-lg font-semibold">{category.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
