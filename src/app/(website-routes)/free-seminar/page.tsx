import PageHeader from "@/app/pages/free-seminar/page-header/page-header";
import SeminarContent from "@/app/pages/free-seminar/seminar-content/seminar-content";
import SeminarImageWrap from "@/app/pages/free-seminar/seminar-image-wrap/seminar-image-wrap";
import Container from "@/components/container";
import LineShapes from "@/components/shapes/line-shapes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Free Seminar'
}

const FreeSeminar = () => {
  return (
    <>
      <PageHeader />

      <Container className="py-10 flex flex-col xl:flex-row gap-10 items-center relative">
        <LineShapes />
        <SeminarContent />
        <SeminarImageWrap />
      </Container>
    </>
  );
};

export default FreeSeminar;
