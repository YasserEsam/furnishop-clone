// app/page.tsx
import Stats from "@/components/ui/Stats";
import Hero from "@/components/sections/Hero";
import React from "react";
import AboutUs from "@/components/sections/About";
import FurnitureManufacturer from "@/components/sections/FurnitureManufacturer";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <Stats />
        <AboutUs />
        <FurnitureManufacturer/>
      </div>
    </div>
  );
}
