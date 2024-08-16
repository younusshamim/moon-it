"use client";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import affiliatedList from "@/data/affiliated-list";
import Image from "next/image";
const AffilietedBy = () => {
  return (
    <div className="pt-10 pb-14">
      <Container className="xl:p-10 flex flex-col xl:flex-row items-center xl:gap-10 bg-card rounded-card shadow-lg shadow-gray-200 dark:shadow-gray-900 border border-border ">
        <div className="w-full mt-10 xl:mt-0 xl:w-1/4 xl:pl-10 flex flex-col items-center xl:items-start">
          <Image
            className="w-20 h-auto mb-3"
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

        <div className="w-full xl:w-3/4 grid grid-cols-1 xl:grid-cols-2 gap-5 xl:pr-10 ">
          {affiliatedList.map((item, index) => (
            <div key={item.title + index} className="flex items-start gap-2 xl:gap-4 z-40 bg-background p-5 rounded-card hover:scale-[1.02] transition-all duration-500 ">
              <Image
                className="w-16 h-auto"
                sizes="100vw"
                width={0}
                height={0}
                src={item.icon}
                alt={item.title}
              />

              <div className="space-y-1">
                <a href={item.website} target="_blank" rel="noopener noreferrer">
                  <h2 className="font-bold xl:w-2/4 text-sm xl:text-base text-primary cursor-pointer">
                    <GradientText>{item.title}</GradientText>
                  </h2>
                </a>

                <p className="text-gray-700">{item.description}</p>
                <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                  <p className="text-secondary">[{item.affiliatedNo}]</p>
                </a>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AffilietedBy;
