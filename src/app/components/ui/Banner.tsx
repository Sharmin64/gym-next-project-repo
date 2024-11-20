import Image from "next/image";
import bannerImg from "@/assets/banner/banner-3.avif";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] bg-gray-900 ">
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
      <div className="relative z-20 flex items-center justify-between h-full px-8">
        <div className="text-white">
          <h1 className="text-3xl font-bold">Welcome to Our Community</h1>
          <p className="mt-2 text-lg">
            Join us to explore more and grow together.
          </p>
        </div>
        <Link href={"/class"}>
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition">
            Join Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
