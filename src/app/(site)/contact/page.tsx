import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Your Name",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  
  return (
    <>
      <HeroSub
        title="Get In Touch"
        description="Have a project in mind, need a developer to bring your ideas to life, or want to explore potential collaboration opportunities? I’m always open to discussing new challenges, creative ideas, or strategic partnerships.
Reach out and let’s turn your vision into a real, impactful solution."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      {/* <Location /> */}
    </>
  );
};

export default page;