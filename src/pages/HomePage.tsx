import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TrustedBy } from "../components/TrustedBy";
import { TechStack } from "../components/TechStack";
import { Features } from "../components/Features";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustedBy />
            <TechStack />
            <Features />
            <CTA />
            <Footer />
        </>
    );
}
