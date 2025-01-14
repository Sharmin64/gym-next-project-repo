"use client";
import React from "react";
import { motion } from "framer-motion";

const fitnessPrograms = [
  {
    name: "Weight Loss",
    description:
      "Achieve your weight loss goals with a structured plan that works for you.",
    icon: "🔥",
    bgColor: "bg-red-500",
  },
  {
    name: "Strength Training",
    description:
      "Build muscle and gain strength with personalized workout plans.",
    icon: "💪",
    bgColor: "bg-blue-500",
  },
  {
    name: "Yoga",
    description:
      "Enhance your flexibility and mental peace with our yoga programs.",
    icon: "🧘",
    bgColor: "bg-green-500",
  },
  {
    name: "Cardio Fitness",
    description: "Boost your heart health with our engaging cardio sessions.",
    icon: "🏃",
    bgColor: "bg-yellow-500",
  },
];

const FitnessPrograms: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Explore Our <span className="text-indigo-500">Fitness Programs</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Tailored programs designed to help you achieve your fitness goals with
          ease and efficiency.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {fitnessPrograms.map((program, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-xl shadow-lg p-6 text-white transform transition duration-300 ${program.bgColor}`}
          >
            <div className="text-5xl mb-4">{program.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
            <p>{program.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FitnessPrograms;
