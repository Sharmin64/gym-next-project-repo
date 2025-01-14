import Image from "next/image";
import bannerImg from "@/assets/banner/banner-3.avif";
import Link from "next/link";
import Button from "@/app/commonui/button/Button";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] ">
      {/* Background Image */}
      <Image
        src={bannerImg} // Replace with your image path
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="bg-fixed inset-0 z-10"
        priority // Ensures faster loading
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start pt-[12em] h-full px-8">
        <div className="text-white">
          <h1 className="text-3xl font-bold">Build Your Strong Body!!!</h1>
          <p className="mt-2 text-lg">
            Join us to explore more and grow together.
          </p>
        </div>
        <Link href={"/class"}>
          <Button buttonName="Join_Us" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
