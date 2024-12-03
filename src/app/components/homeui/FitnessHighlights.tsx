import Image from "next/image";
import Link from "next/link";
import fitImg from "@/assets/transform-img/fitB.jpg";

const FitnessHighlights: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src={fitImg} // Replace with your image URL
            alt="Fitness Transformation"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 md:ml-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Transform Your Fitness Journey
          </h2>
          <p className="mt-4 text-gray-600">
            Explore inspiring fitness transformation stories, get insights into
            state-of-the-art gym interiors, and discover activities that help
            you achieve your goals. Your fitness journey starts here!
          </p>
          <Link href={"/feature-details"}>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Explore Features
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FitnessHighlights;
