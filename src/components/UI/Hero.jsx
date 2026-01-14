"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Upgrade Your Everyday Tech",
    description:
      "Discover premium gadgets designed to make your life smarter and easier.",
    image: "/slide1.jpg",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    title: "Smart Devices, Smarter Living",
    description:
      "Explore modern technology built for performance, style, and comfort.",
    image: "/slide2.jpg",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 3,
    title: "Power Your Passion with Innovation",
    description:
      "From gaming to productivity, find gadgets that match your lifestyle.",
    image: "/slide3.jpg",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-[500px]">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-10 left-0">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <h1 className="text-3xl md:text-5xl font-extrabold max-w-2xl">
                    {slide.title}
                  </h1>

                  <p className="my-4 max-w-xl text-sm md:text-base text-gray-200">
                    {slide.description}
                  </p>

                  <Link
                    href={slide.buttonLink}
                    className="bg-teal-500 px-5 p-2 rounded-2xl"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
