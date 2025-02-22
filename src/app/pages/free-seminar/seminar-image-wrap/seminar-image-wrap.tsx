import SpringyScroll from "@/components/animations/SpringyScroll";
import Image from "next/image";

const SeminarImageWrap = () => {
  return (
    <SpringyScroll className="w-full px-3 xl:p-0 xl:w-2/5 z-40" delay={0.3}>
      <Image
        className="w-full h-[400px] object-cover object-center hover:scale-[1.02] transition-all duration-500"
        sizes="100vw"
        width={0}
        height={0}
        src="/illustration/seminar.png"
        alt="Moon IT Seminar"
      />
    </SpringyScroll>
  );
};

export default SeminarImageWrap;
