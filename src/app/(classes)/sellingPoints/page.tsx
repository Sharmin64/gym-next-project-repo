"use client";
import React from "react";
import { motion } from "framer-motion";

const SellingPoints: React.FC = () => {
  const uspFeatures = [
    {
      title: "State-of-the-Art Equipment",
      description:
        "Experience workouts with the latest and most advanced gym equipment.",
      icon: "🏋️",
      bgColor: "bg-[#ff794e]",
    },
    {
      title: "Flexible Class Timings",
      description:
        "Join classes at times that suit your schedule, morning or evening.",
      icon: "⏰",
      bgColor: "bg-[#ffbca7]",
    },
    {
      title: "Experienced Trainers",
      description:
        "Get guidance from certified trainers with years of expertise.",
      icon: "🤝",
      bgColor: "bg-[#ffa21a]",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#ff5722] via-[#66230e] to-[#ffd699] py-16 px-8 mt-16 mb-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Why <span className="text-yellow-300">Choose Us?</span>
        </h2>
        <p className="mt-4 text-gray-200">
          Discover the benefits of training with us. Here is what sets us apart.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {uspFeatures.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`rounded-xl shadow-lg p-6 text-white transform transition duration-300 ${feature.bgColor}`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SellingPoints;
