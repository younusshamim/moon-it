"use client";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import affiliatedList from "@/data/affiliated-list";
import Image from "next/image";

const AffilietedBy = () => {
  return (
    <div className="pt-10 pb-14">
      <Container className="p-10 flex items-center gap-10 bg-card rounded-card shadow-lg shadow-gray-200 dark:shadow-gray-700 border border-border">
        <div className="w-1/4 pl-10">
          <Image
            className="w-16 h-auto mb-3"
            sizes="100vw"
            width={0}
            height={0}
            src={'/logo/BD_Government_Sea.png'}
            alt={'BD_Government_Sea'}
          />
          <h2 className="text-4xl text-foreground-dark font-extrabold mb-[6px]">
            অনুমোদন সমূহ
          </h2>
          <p className="font-semibold mb-10">
            মুন আইটির সরকারি অনুমোদন সমূহ
          </p>
        </div>

        <div className="w-3/4 grid grid-cols-2 gap-5  pr-10">
          {affiliatedList.map((item, index) => (
            <div key={item.title + index} className="flex items-start gap-2 xl:gap-4 z-40 bg-background p-5 rounded-card">
              <Image
                className="w-16 h-auto"
                sizes="100vw"
                width={0}
                height={0}
                src={item.icon}
                alt={item.title}
              />

              <div className="space-y-1">
                <h2 className="font-bold xl:w-2/4 text-sm xl:text-base text-primary">
                  <GradientText>{item.title}</GradientText>
                </h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-secondary">[{item.affiliatedNo}]</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AffilietedBy;
