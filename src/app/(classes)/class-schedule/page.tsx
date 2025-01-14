import React from "react";
import ClassSchedule from "@/app/commonui/ClassSchedule";
import ScheduleImg from "@/app/commonui/ScheduleImg";

const ClassDetailsPage = () => {
  const weeklySchedule = [
    { day: "Monday", time: "Morning", classType: "Yoga", instructor: "Alice" },
    { day: "Monday", time: "Evening", classType: "Zumba", instructor: "Bob" },
    {
      day: "Tuesday",
      time: "Afternoon",
      classType: "Pilates",
      instructor: "Charlie",
    },
    {
      day: "Wednesday",
      time: "Morning",
      classType: "Yoga",
      instructor: "Alice",
    },
    { day: "Thursday", time: "Evening", classType: "Zumba", instructor: "Bob" },
    {
      day: "Friday",
      time: "Afternoon",
      classType: "Pilates",
      instructor: "Charlie",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex items-center justify-around">
        <ClassSchedule schedule={weeklySchedule} />
        <ScheduleImg />
      </div>
    </>
  );
};

export default ClassDetailsPage;
