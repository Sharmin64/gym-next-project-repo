"use client";
import React from "react";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import dynamic from "next/dynamic";

interface SponsorProps {
  name: string;
  image: string;
}
const sponsors: SponsorProps[] = [
  {
    name: "Fitness Pro",
    image: "https://i.postimg.cc/rwV7HRgb/fitness-pro.jpg",
  },
  {
    name: "Gym Gear",
    image: "https://i.postimg.cc/wBPP3fH8/gym-gear.png",
  },
  {
    name: "Health Hub",
    image: "https://i.postimg.cc/hPLq6BnJ/health-hub.jpg",
  },
  {
    name: "Workout World",
    image: "https://i.postimg.cc/Y9vHsL2k/workout-world.jpg",
  },
  {
    name: "Fit Life",
    image: "https://i.postimg.cc/44rJjPh0/fitlife.png",
  },
  {
    name: "Active Wear",
    image: "https://i.postimg.cc/3r6Mdw80/active-wear.png",
  },
  {
    name: "Muscle Factory",
    image: "https://i.postimg.cc/VN1PmHY7/muscle-factory.jpg",
  },
  {
    name: "Wellness Co",
    image: "https://i.postimg.cc/PrPtRcxY/wellness-co.jpg",
  },
  {
    name: "Strength Shop",
    image: "https://i.postimg.cc/RZGxCLN4/strength-shop.png",
  },
  {
    name: "Endurance Gear",
    image: "https://i.postimg.cc/dQdMZYLW/endurance-gear.jpg",
  },
];

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const Sponsor = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-4xl font-extrabold mb-6">Our Sponsors</h2>
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="px-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                height={60}
                width={60}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {sponsor.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsor;
