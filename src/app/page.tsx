// app/page.tsx
import Stats from "@/components/ui/Stats";
import Hero from "@/components/sections/Hero";
import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <Stats />
      </div>
    </div>
  );
}
