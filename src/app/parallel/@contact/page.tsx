import React from "react";

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-500 p-8 lg:p-16 gap-8">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col items-start space-y-6">
        <span className="text-orange-500 font-semibold text-lg">
          CONTACT US
        </span>
        <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a3 3 0 01-3 3h-13.5a3 3 0 01-3-3V6.75"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Email:</p>
              <p className="text-gray-800">info@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.25v8.25c0 1.5.75 3 2.25 3H19.5a2.25 2.25 0 002.25-2.25v-9"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Call Now:</p>
              <p className="text-gray-800">+91 987 3654 365</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3h7.5c.75 0 1.5.75 1.5 1.5V19.5"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Location:</p>
              <p className="text-gray-800">
                13 Sunset Blvd Los Angeles, CA 90026, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 bg-gray-800 text-white p-8 lg:p-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Get Appointment</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-gray-700 border-none p-4 rounded-md focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-gray-700 border-none p-4 rounded-md focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Phone No."
            className="w-full bg-gray-700 border-none p-4 rounded-md focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Message..."
            className="w-full bg-gray-700 border-none p-4 rounded-md focus:ring-2 focus:ring-orange-500"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-4 rounded-md hover:bg-orange-600 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
