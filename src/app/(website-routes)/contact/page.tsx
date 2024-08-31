import Address from "@/app/pages/contact/address/address";
import PageHeading from "@/components/page-heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact'
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
