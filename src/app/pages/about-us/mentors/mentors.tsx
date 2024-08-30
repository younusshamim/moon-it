import { Carousel } from "@/components/carousel";
import Container from "@/components/container";
import { CarouselItem } from "@/components/ui/carousel";
import mentorList from "@/data/mentor-list";
import MentorCard from "../../../shared/mentor-card/mentor-card";
import Chairman from "../chairman/chairman";

const Mentors = () => {
  return (
    <div className="bg-primary dark:bg-background2 space-y-32 lg:space-y-40">
      <Chairman />

      <Container className="pb-20">
        <h2 className="text-4xl text-white font-extrabold text-center mb-6">
          ইন্ডাস্ট্রি এক্সপার্ট ইনস্ট্রাক্টর
        </h2>

        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-8">
          {mentorList.map((mentor, index) => (
            <MentorCard mentor={mentor} key={mentor.name + index} />
          ))}
        </div>

        <Carousel className="block sm:hidden" sliderDots={true} >
          {mentorList.map((mentor, index) => (
            <CarouselItem key={mentor.name + index} className="basis-1/2 ">
              <MentorCard mentor={mentor} />
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Mentors;
