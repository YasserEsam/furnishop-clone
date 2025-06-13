// app/page.tsx
import Stats from "@/components/ui/Stats";
import Hero from "@/components/sections/Hero";
import React from "react";
import AboutUs from "@/components/sections/About";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <Stats />
        <AboutUs />
      </div>
    </div>
  );
}
