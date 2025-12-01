import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Services from "@/components/Home/Services";

export const metadata: Metadata = {
    title: "Services | Your Name",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  
  return (
    <>
      <HeroSub
        title="My Services"
        description="YOUR SERVICES PAGE DESCRIPTION - Professional services tailored to meet your needs"
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services/>
    </>
  );
};

export default page;