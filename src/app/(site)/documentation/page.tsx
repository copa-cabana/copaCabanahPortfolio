import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Documentation | Software Developer",
};

export default function Page() {
    return (
        <>
        <Documentation/>
        </>
    );
};