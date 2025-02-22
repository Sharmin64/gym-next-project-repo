// "use client";
// import React from "react";

// import { useGetTeamQuery } from "@/redux/api/teamApi";
// import Image from "next/image";
// type TTeam = {
//   id: string;
//   image: string;
//   name: string;
//   role: string;
// };

// const About = () => {
//   const { data: team, isLoading, error } = useGetTeamQuery({});
//   return (
//     <div>
//       <div className="mt-16">
//         <h2 className="text-3xl font-semibold text-center text-gray-800">
//           Meet Our Trainers
//         </h2>
//         {isLoading && (
//           <p className="text-center text-gray-500 mt-4">Loading team...</p>
//         )}
//         {error && (
//           <p className="text-center text-red-500 mt-4">Failed to load team.</p>
//         )}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
//           {team?.map((member: TTeam) => (
//             <div
//               key={member.id}
//               className="bg-white p-6 rounded-lg shadow-md text-center"
//             >
//               <Image
//                 height={100}
//                 width={100}
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 mx-auto rounded-full object-cover"
//               />
//               <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
//               <p className="text-gray-500">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
