"use client";

import { useState } from "react";

type ClassScheduleProps = {
  schedule: {
    day: string;
    time: string;
    classType: string;
    instructor: string;
  }[];
};

const ClassSchedule: React.FC<ClassScheduleProps> = ({ schedule }) => {
  const [filters, setFilters] = useState({
    time: "",
    classType: "",
    instructor: "",
  });

  // Filter the schedule based on selected filters
  const filteredSchedule = schedule.filter((item) => {
    const matchesTime = !filters.time || item.time.includes(filters.time);
    const matchesClassType =
      !filters.classType || item.classType.includes(filters.classType);
    const matchesInstructor =
      !filters.instructor || item.instructor.includes(filters.instructor);

    return matchesTime && matchesClassType && matchesInstructor;
  });

  return (
    <div className="p-4 bg-[#ffcdbd] rounded-lg shadow">
      <h1 className="text-2xl font-bold text-center mb-6">
        Weekly Class Schedule
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 hover:will-change-transform">
        <select
          className="p-2 border rounded"
          value={filters.time}
          onChange={(e) => setFilters({ ...filters, time: e.target.value })}
        >
          <option value="">All Times</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>

        <select
          className="p-2 border rounded"
          value={filters.classType}
          onChange={(e) =>
            setFilters({ ...filters, classType: e.target.value })
          }
        >
          <option value="">All Class Types</option>
          <option value="Yoga">Yoga</option>
          <option value="Pilates">Pilates</option>
          <option value="Zumba">Zumba</option>
        </select>

        <select
          className="p-2 border rounded"
          value={filters.instructor}
          onChange={(e) =>
            setFilters({ ...filters, instructor: e.target.value })
          }
        >
          <option value="">All Instructors</option>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Charlie">Charlie</option>
        </select>
      </div>

      {/* Schedule Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border border-gray-300">Day</th>
            <th className="p-3 border border-gray-300">Time</th>
            <th className="p-3 border border-gray-300">Class Type</th>
            <th className="p-3 border border-gray-300">Instructor</th>
          </tr>
        </thead>
        <tbody>
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-3 border border-gray-300">{item.day}</td>
                <td className="p-3 border border-gray-300">{item.time}</td>
                <td className="p-3 border border-gray-300">{item.classType}</td>
                <td className="p-3 border border-gray-300">
                  {item.instructor}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-3 text-center">
                No classes match the selected filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClassSchedule;
