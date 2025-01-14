"use client";
import Button from "@/app/commonui/button/Button";
// import { useRouter } from "next/navigation";
import React from "react";

const CallToAction: React.FC = () => {
  //   const router = useRouter();

  //   const handleSignUp = () => {
  //     router.push("/signup");
  //   };

  //   const handleBookSession = (): void => {
  //     router.push("/book-session");
  //   };

  return (
    <section className="bg-gradient-to-r from-primary to-accent py-16 px-8 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your Fitness Journey Today!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join our fitness community to achieve your goals with expert trainers
          and world-class facilities.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            buttonName="Sign Up"
            // onClick={handleSignUp}
          ></Button>
          <Button
            buttonName="Book a Session"
            // onClick={handleBookSession}
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
