import { MentorType } from "@/lib/types/mentor";
import Image from "next/image";
import React from "react";

const MentorCard = ({ mentor }: { mentor: MentorType }) => {
  return (
    <div className="text-background bg-slate-800 bg-opacity-10 rounded-card shadow-lg">
      <Image
        className="w-full h-[200px] object-contain object-top rounded-t-card bg-sky-100 "
        sizes="100vw"
        width={0}
        height={0}
        src={mentor.picture}
        alt="Moon IT Seminar"
      />
      <div className="px-5 py-2">
        <p className="text-xl font-semibold">{mentor.name}</p>
        <p className="text-slate-300">{mentor.title}</p>
      </div>
    </div>
  );
};

export default MentorCard;