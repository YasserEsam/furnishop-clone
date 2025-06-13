"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

const testimonialsData = [
  {
    id: 1,
    avatar: "/user-1.png",
    name: "Josh Smith",
    title: "Manager of The New York Times",
    quote:
      "They are a perfect touch for make something so professional ,interest and useful for a lot of people .",
    image: "/living-room-modern.png",
  },
  {
    id: 2,
    avatar: "/user-2.png",
    name: "Jane Doe",
    title: "CEO of Tech Solutions",
    quote:
      "An outstanding team that delivers beyond expectations. FurniShop transformed our space with incredible design and quality.",
    image: "/living-room.png",
  },
  {
    id: 3,
    avatar: "/user-3.png",
    name: "Mark Johnson",
    title: "Chief Architect at Design Co.",
    quote:
      "The attention to detail and innovative solutions provided by FurniShop are truly remarkable. Highly recommend!",
    image: "/modern-kitchen.png",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What People Are Saying About Us"
          description=""
          data-aos="fade-down"
          data-aos-duration="400"
        />

        <div className="relative">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop={true}
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                    <div
                      className="flex items-center mb-4"
                      data-aos="fade-in"
                      data-aos-delay="100"
                      data-aos-duration="400"
                    >
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-base sm:text-lg text-gray-800 leading-relaxed italic mb-8"
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="400"
                    >
                      “{testimonial.quote}”
                    </p>
                  </div>

                  <div
                    className="w-full md:w-1/2 relative h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  >
                    <Image
                      src={testimonial.image}
                      alt="Interior scene for testimonial"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="flex justify-center space-x-4 mt-8 md:mt-0 md:absolute md:bottom-0 md:left-0 md:translate-y-full md:z-10"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="400"
          >
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-white text-[#286F6C] flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-[#286F6C] text-white flex items-center justify-center shadow-md hover:bg-opacity-90 transition-opacity duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
