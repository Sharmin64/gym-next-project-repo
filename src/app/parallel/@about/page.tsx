"use client";
// import About from "@/app/components/ui/About";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Fitness Hub</title>
        <meta
          name="description"
          content="Learn more about Fitness Hub, our mission, vision, and expert trainers."
        />
      </Head>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Your journey to a healthier lifestyle starts here.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-2">
              At Fitness Hub, our mission is to empower individuals to lead
              healthier lives through expert training, nutrition guidance, and a
              supportive community.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              We envision a world where everyone has the knowledge and
              motivation to stay fit and strong, both physically and mentally.
            </p>
          </div>
        </div>

        {/* Team Section */}
        {/* <About /> */}
        {/*todo  team section will be imported from other component */}

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 text-white text-center p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Join Our Fitness Community</h2>
          <p className="mt-2 text-lg">
            Get access to expert coaching, workout plans, and a supportive
            environment.
          </p>
          <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

// const AboutPage = () => {
//   return (
//     <div className="h-[500px] mt-20">
//       <div>
//         <h3>For more detail click here👇</h3>
//         <Link href={"/parallel/about-gym"}>About Gym</Link>
//       </div>
//       <h1 className=" text-5xl text-center mt-14">
//         About page will be render here. kutta !!!!
//       </h1>
//     </div>
//   );
// };

// export default AboutPage;
