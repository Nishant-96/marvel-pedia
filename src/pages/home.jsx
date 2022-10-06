import React from "react";
import { Card, Footer } from "../components";

export function Home() {
  return (
    <div className="flex flex-col md:h-[calc(100vh-80px)] gap-16 p-6 mt-[80px] md:mt-0">
      <div className="flex justify-evenly items-center basis-5/6 flex-col md:flex-row gap-8">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
