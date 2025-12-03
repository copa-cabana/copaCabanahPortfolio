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
        description="I’m a software developer passionate about building clean, user-focused digital experiences. Skilled in frontend technologies and real-world projects, I combine creativity, problem-solving, and continuous learning to deliver meaningful solutions."
        breadcrumbLinks={breadcrumbLinks}
      />
       <Counter isColorMode={true} />
       <Progresswork isColorMode={true} />
    </>
  );
};

export default page;