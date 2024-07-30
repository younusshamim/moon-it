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
import Tabs from "@/components/tabs";
import getOptions from "@/lib/utils/get-options";

const imageCategories = [

  { id: "students", title: "স্টুডেন্টস" },
  // training/class/seminar/exam related jekono valo chobi 
  { id: "institute", title: "ইনস্টিটিউট" },
  { id: "campaign", title: "ক্যাম্পেইন" },
  // job fair/ all fair related jekono valo chobi 
  { id: "tour", title: "আনন্দ ভ্রমন" },
  { id: "fairwell", title: "ফেয়ারওয়েল" },
  { id: "program", title: "অনুষ্ঠান" },
  { id: "social-works", title: "সামাজিক কর্মকান্ড" },
  // jubo unnoyoner related jekono valo chobi 
];

const Gallery = () => {
  const [selected, setSelected] = useState<string | number>(imageCategories[0].id);
  const filteredImages = galleryImages.filter(
    (item) => item.category === selected
  );
  const tabOptions = getOptions(imageCategories, "title", "id");

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

        <Tabs
          tabOptions={tabOptions}
          selected={selected}
          setSelected={setSelected}
        />
        <ScrollAnimation variants={variant4}>
          <TabsAnimation selected={selected}>
            <EmblaCarousel filteredImages={filteredImages} />
          </TabsAnimation>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Gallery;
