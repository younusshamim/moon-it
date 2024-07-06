"use client";
import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import galleryImages from "@/data/gallery-images";
import TabsAnimation from "@/lib/animations/tabs-animation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const imageCategories = [
  { id: "lab", title: "প্রশিক্ষণের স্থান এবং স্টুডেন্টস" },
  { id: "office", title: "অফিস" },
  { id: "events", title: "ইভেন্টস" },
  { id: "exam", title: "BTEB এক্সাম" },
];

type PropsTypes = {
  showAll?: boolean;
}

const Gallery = ({ showAll = false }: PropsTypes) => {
  const [showMore, setShowMore] = useState(false);
  const [selected, setSelected] = useState(imageCategories[0]);
  const filteredImages = galleryImages.filter(
    (item) => item.category === selected.id
  );
  const slicedImages = (showMore || showAll) ? filteredImages : filteredImages.slice(0, 6);

  return (
    <div>
      <Container className="py-20">
        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          ফটো গ্যালারী
        </h2>
        <p className="font-semibold mb-10 text-center">
          শিক্ষার্থী/শিক্ষক-দের কিছু সুন্দর মুহূর্ত দেখতে পাবেন আমাদের
          গ্যালারিতে।
        </p>

        {/* categories display */}

        <div className="flex gap-8 border-b-2 border-b-border mb-8">
          {imageCategories.map((category, index) => {
            return (
              <p
                key={category.id + index}
                className={cn(
                  "text-foreground-dark font-semibold cursor-pointer pb-2 px-2",
                  {
                    "text-primary font-bold border-b-2 border-primary":
                      selected.id === category.id,
                  }
                )}
                onClick={() => setSelected(category)}
              >
                {category.title}
              </p>
            );
          })}
        </div>


        {/* images display  */}
        <TabsAnimation selected={selected.id}>
          <div className="grid grid-cols-3 gap-8">
            {slicedImages.map((item, index) => {
              return (
                <Image
                  className="w-full h-[250px] object-cover rounded-[30px] shadow-lg cursor-pointer hover:scale-105 duration-500"
                  key={item.image + index}
                  src={item.image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  alt="Moon IT Training Institute"
                />
              );
            })}
          </div>
        </TabsAnimation>

        {filteredImages.length > 6 && !showAll && (
          <PrimaryButton
            className="mx-auto mt-10"
            size="lg"
            onClick={() => setShowMore(!showMore)}
            iconRight={
              showMore ? (
                <RiArrowUpSLine className="text-2xl" />
              ) : (
                <RiArrowDownSLine className="text-2xl" />
              )
            }
          >
            {showMore ? "কম দেখুন" : "আরও দেখুন"}
          </PrimaryButton>
        )}
      </Container>
    </div>
  );
};

export default Gallery;
