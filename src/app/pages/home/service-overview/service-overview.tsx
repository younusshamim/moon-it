import Container from "@/components/container";

const ServiceOverview = () => {
  return (
    <div className="border-b border-muted hidden xl:block">
      <Container className="py-8 flex items-center justify-center gap-5 font-semibold text-foreground">
        <p className="border-r-2 border-foreground pr-5">
          প্রফেশনাল আইটি/কম্পিউটার কোর্স
        </p>
        <p className="border-r-2 border-foreground pr-5">ল্যাঙ্গুয়েজ কোর্স</p>
        <p className="border-r-2 border-foreground pr-5">
          এডভান্সড সার্টিফিকেট কোর্স (<span className="font-sans">১</span> বছর)
        </p>
        <p>ডিপ্লোমা ইন্ড্রাষ্ট্রিয়াল ট্রেনিং</p>
      </Container>
    </div>
  );
};

export default ServiceOverview;
