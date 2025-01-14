"use client";
import Image from "next/image";
import React, { useState } from "react";
import fitImage from "@/assets/images/new_image/fitness-session.jpg";

const BookSession = () => {
  const [selectedSession, setSelectedSession] = useState("");

  const handleSessionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSession(event.target.value);
  };

  const handleBookNow = () => {
    if (!selectedSession) {
      alert("Please select a session to continue.");
      return;
    }
    alert(`You have successfully booked the "${selectedSession}" session!`);
  };
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="md:flex">
          {/* Left Side: Image */}
          <div className="md:w-1/2">
            <Image
              width={300}
              height={300}
              src={fitImage}
              alt="Fitness Session"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Form */}
          <div className="md:w-1/2 p-8 bg-gradient-to-r from-primary to-accent text-white">
            <h2 className="text-3xl font-bold mb-4">
              Book Your Fitness Session
            </h2>
            <p className="text-lg mb-6">
              Achieve your fitness goals with our expert-led sessions. Choose
              your preferred type and start your journey today!
            </p>
            <form>
              <label className="block mb-4">
                <span className="text-sm font-semibold">Choose a Session</span>
                <select
                  value={selectedSession}
                  onChange={handleSessionChange}
                  className="mt-2 w-full px-4 py-3 rounded-lg text-gray-700 shadow-md focus:ring-2 focus:ring-secondary"
                >
                  <option value="" disabled>
                    Select a session
                  </option>
                  <option value="Yoga Class">Yoga Class</option>
                  <option value="HIIT Training">HIIT Training</option>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Personal Training">Personal Training</option>
                </select>
              </label>
              <button
                type="button"
                onClick={handleBookNow}
                className="mt-4 w-full bg-secondary text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-accent transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSession;
