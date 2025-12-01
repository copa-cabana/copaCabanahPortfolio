import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";

export const metadata: Metadata = {
    title: "About | Your Name",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  
  return (
    <>
      <HeroSub
        title="About Me"
        description="YOUR ABOUT PAGE DESCRIPTION - Learn more about my journey, skills, and passion"
        breadcrumbLinks={breadcrumbLinks}
      />
       <Counter isColorMode={true} />
       <Progresswork isColorMode={true} />
    </>
  );
};

export default page;