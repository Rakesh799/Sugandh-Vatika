"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  const images = [
    "/images/stick-images/sticks-1.png",
    "/images/stick-images/sticks-2.png",
    "/images/stick-images/sticks-3.png",
  ];

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="absolute inset-0 z-10 h-full w-full overflow-hidden bg-black/70">
        <div className="relative flex h-full items-center justify-center text-center px-6">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-3xl md:text-7xl font-bold text-white leading-tight">Pure Fragrance for <br /><span
              className="italic font-light">Peaceful Living</span></h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto">Experience the essence of
              tranquility with our handcrafted natural incense, made from botanical extracts.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                className="bg-brown hover:bg-brown/90 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-xl shadow-primary/20 w-full sm:w-auto">Shop
                Now</button>
              <button
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-semibold transition-all w-full sm:w-auto">
                Explore Fragrances
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

