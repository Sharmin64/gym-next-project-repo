import Button from "@/app/commonui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const classes = [
  {
    title: "Power Yoga Classes",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "🧘",
    image:
      "https://i.postimg.cc/Gm8djcNv/ramu-aladdin-c-Of-6-Y5n-YUw-unsplash.jpg",
    progress: 90,
  },
  {
    title: "Strength Training",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "💪🏻",
    image: "https://i.postimg.cc/wTJKs8zf/weights.webp",
    progress: 60,
  },
  {
    title: "Weight Lifting Classes",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "🏋️‍♀️",
    image:
      "https://i.postimg.cc/rpwYjv6L/premium-photo-1664298367434-0408974ab0bb.jpg",
    progress: 85,
  },
  {
    title: "Cardio Classes",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "🏃‍♂️",
    image: "https://i.postimg.cc/3x3QzSGq/cardio.jpg",
    progress: 70,
  },
  {
    title: "Pilates Classes",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "🤸‍♀️",
    image: "https://i.postimg.cc/3x3QzSGq/pilates.jpg",
    progress: 80,
  },
  {
    title: "CrossFit Classes",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "🏋️‍♂️",
    image: "https://i.postimg.cc/3x3QzSGq/crossfit.jpg",
    progress: 75,
  },
  {
    title: "Zumba Classes",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "💃",
    image: "https://i.postimg.cc/3x3QzSGq/zumba.jpg",
    progress: 65,
  },
  {
    title: "Boxing Classes",
    description:
      "Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.",
    icon: "🥊",
    image: "https://i.postimg.cc/3x3QzSGq/boxing.jpg",
    progress: 85,
  },
];

const ClassPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <>
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-orange-500 font-bold text-sm uppercase">
            Our Classes
          </h2>
          <h1 className="text-center text-3xl font-extrabold text-gray-900 mt-2">
            Fitness Classes For Every Goal
          </h1>
          <div className="mt-12">
            <Slider {...settings}>
              {classes.map((cls, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <Image
                      width={300}
                      height={300}
                      src={cls.image}
                      alt={cls.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{cls.icon}</span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {cls.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mt-2">{cls.description}</p>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Class Full</span>
                          <span>{cls.progress}%</span>
                        </div>
                        <progress
                          className="progress progress-info w-full"
                          value={cls.progress}
                          max="100"
                        ></progress>
                      </div>
                      <Link href={"/class-details"}>
                        <Button buttonName="see info" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassPage;
