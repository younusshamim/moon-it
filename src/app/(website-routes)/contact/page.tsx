import Address from "@/app/pages/contact/address/address";
import PageHeading from "@/components/page-heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'যোগাযোগ',
  description: 'ফোন নাম্বার - 01785-882381, 01820-008479 | ঠিকানা - মনোয়ারা ম্যানশন, স্টেডিয়াম রোড, একাডেমী (আইয়ুব আলী চেম্বার/নূরীয়া মসজিদ সংলগ্ন), ফেনী।'
}

const Contact = () => {
  return (
    <>
      <PageHeading label="যোগাযোগ" />
      <Address />
    </>
  );
};

export default Contact;
