import PageHeader from "@/app/pages/free-seminar/page-header/page-header";
import SeminarForm from "@/app/pages/free-seminar/seminar-form/seminar-form";
import SeminarImageWrap from "@/app/pages/free-seminar/seminar-image-wrap/seminar-image-wrap";
import Container from "@/components/container";

const FreeSeminar = () => {
  return (
    <>
      <PageHeader />

      <Container className="py-10 flex gap-10 items-center">
        <SeminarForm />
        <SeminarImageWrap />
      </Container>
    </>
  );
};

export default FreeSeminar;