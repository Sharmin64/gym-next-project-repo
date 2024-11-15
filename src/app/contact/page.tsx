// import React from "react";

// const ContactUsPage = () => {
//   return (
//     <div>
//       <h1 className="text-5xl text-center">
//         this contact page will be render in hear!!!!!!
//       </h1>
//     </div>
//   );
// };

// export default ContactUsPage;

const DynamicButton: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="relative group px-6 py-3 font-medium text-white overflow-hidden">
        {/* Yellow background (default) */}
        <span className="absolute inset-0 bg-yellow-500 translate-x-full transition-transform transform group-hover:translate-x-20 duration-500 ease-in-out"></span>

        {/* Indigo background (slides in on hover) */}
        <span className="absolute inset-0 bg-indigo-600 translate-x-full transition-transform transform group-hover:translate-x-3 duration-500 ease-in-out"></span>

        {/* Button Text */}
        <span className="relative z-10">Hover Me</span>
      </button>
    </div>
  );
};

export default DynamicButton;
