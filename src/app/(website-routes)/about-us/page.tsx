import PageHeading from "@/components/page-heading";
import BTEBCertified from "@/app/pages/about-us/bteb-certified/bteb-certified";
import Gallery from "@/app/pages/about-us/gallery/gallery";
import Mentors from "@/app/pages/about-us/mentors/mentors";
import AboutUsComp from "@/app/pages/home/about-us/about-us";

const AboutUs = () => {
  return (
    <>
      <PageHeading label="আমাদের সম্পর্কে" />
      <AboutUsComp />
      <BTEBCertified />
      <Mentors />
      <Gallery />
    </>
  );
};

export default AboutUs;
