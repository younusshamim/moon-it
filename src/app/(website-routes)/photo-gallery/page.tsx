import PageHeading from "@/components/page-heading";
import BTEBCertified from "@/app/pages/about-us/bteb-certified/bteb-certified";
import Gallery from "@/app/pages/about-us/gallery/gallery";
import Mentors from "@/app/pages/about-us/mentors/mentors";
import AboutUsComp from "@/app/shared/about-us/about-us";

const PhotoGallery = () => {
  return (
    <>
      <PageHeading label="ফটো গ্যালারী" />
      <Gallery />
    </>
  );
};

export default PhotoGallery;
