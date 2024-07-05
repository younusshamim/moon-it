import Image from "next/image";
import React from "react";

const Shape1 = () => {
  return (
    <Image
      className="dark:hidden w-[180px] h-auto object-cover object-center absolute left-0 top-4"
      sizes="100vw"
      width={0}
      height={0}
      src="/svg/shape_flipped1.svg"
      alt="Moon IT Seminar"
    />
  );
};

export default Shape1;
