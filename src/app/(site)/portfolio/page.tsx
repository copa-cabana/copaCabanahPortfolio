import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Your Name",
};

const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];
    
    return (
        <>
            <HeroSub
                title="My Portfolio"
                description="YOUR PORTFOLIO PAGE DESCRIPTION - Explore my collection of projects"
                breadcrumbLinks={breadcrumbLinks}
            />
            <Portfolio />
        </>
    );
};

export default PortfolioList;