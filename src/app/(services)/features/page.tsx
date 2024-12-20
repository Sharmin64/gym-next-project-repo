import ClassSchedule from "@/app/commonui/ClassSchedule";
import ScheduleImg from "@/app/commonui/ScheduleImg";
import React from "react";

const FeaturesPage: React.FC = () => {
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
      {/* <h1 className="text-5xl mt-24 bg-teal-400">
        Featre page will be render here..........
      </h1> */}
      <div className="min-h-screen flex items-center justify-around">
        <ClassSchedule schedule={weeklySchedule} />
        <ScheduleImg />
      </div>
    </>
  );
};

export default FeaturesPage;
