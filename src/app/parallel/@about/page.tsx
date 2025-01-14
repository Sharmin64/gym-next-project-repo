import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="h-[500px] mt-20">
      <nav>
        <h3>For more detail click here👇</h3>
        <Link href={"/parallel/about-gym"}>About Gym</Link>
      </nav>
      <h1 className=" text-5xl text-center mt-14">
        About page will be render here. kutta !!!!
      </h1>
    </div>
  );
};

export default AboutPage;
