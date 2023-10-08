"use client";
import { useState } from "react";
import  Carousel  from "@/components/carousal";
import { ProductDisplay } from "@/components/productDisplay";
export default function BrandPage() {

  return (
    <div className="bg-white">
      <Carousel
        perPage={1}
        perPage640={1}
        autoplay={true}
        interval={4000}
        image={[{imgURL:"https://assets.hyugalife.com/banner/feature/1440-x-360-28__1.jpg"}]}
        classes="aspect-9/16 rounded"
      />
     <ProductDisplay/>
    </div>
  );
}
