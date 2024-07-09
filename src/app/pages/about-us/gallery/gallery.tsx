"use client";
import Container from "@/components/container";
import galleryImages from "@/data/gallery-images";
import TabsAnimation from "@/lib/animations/tabs-animation";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import EmblaCarousel from "./embla-carousel";
import "./embla.css";
import ScrollAnimation from "@/lib/animations/scroll-animation";
import { variant4 } from "@/lib/animations/variants";

const imageCategories = [
  { id: "lab", title: "প্রশিক্ষণের স্থান এবং স্টুডেন্টস" },
  { id: "office", title: "অফিস" },
  { id: "events", title: "ইভেন্টস" },
  { id: "exam", title: "BTEB এক্সাম" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(imageCategories[0]);
  const filteredImages = galleryImages.filter(
    (item) => item.category === selected.id
  );

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

        <ScrollAnimation variants={variant4}>
          <TabsAnimation selected={selected.id}>
            <EmblaCarousel filteredImages={filteredImages} />
          </TabsAnimation>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Gallery;
