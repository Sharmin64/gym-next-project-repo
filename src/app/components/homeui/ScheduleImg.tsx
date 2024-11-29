import Image from "next/image";
import scheduleImg from "../../../assets/bg-images/fitness-orange.jpg";

const ScheduleImg = () => {
  return (
    <>
      <div className="">
        <Image
          src={scheduleImg}
          width={500}
          height={500}
          alt="schedule image"
        />
      </div>
    </>
  );
};

export default ScheduleImg;
