import Carousel from "@/components/carousal";
import FeatureBrand from "@/components/featureBrand";
import { ProductCard } from "@/components/productCard";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Carousel
        perPage={1}
        perPage640={1}
        autoplay={true}
        interval={4000}
        image={[
          {
            imgURL: "desktopbanner.avif",
            mobileImgURL: "mobilebanner.webp",
          },
        ]}
        classes="aspect-9/16 rounded"
      />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-baseline justify-between border-b border-gray-200 my-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <div className="w-full flex justify-start items-center overflow-auto">
            {/* Your content */}
            <div className="p-6">
              <ProductCard />
            </div>
            <div className="p-6">
              <ProductCard />{" "}
            </div>
          </div>
        </div>
      </main>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-baseline justify-between border-b border-gray-200 my-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <div className="w-full flex justify-start items-center overflow-auto">
            {/* Your content */}
            <div className="p-6">
              <ProductCard />
            </div>
            <div className="p-6">
              <ProductCard />{" "}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
