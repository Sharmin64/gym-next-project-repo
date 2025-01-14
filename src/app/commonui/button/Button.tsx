import { FaArrowRight } from "react-icons/fa";
interface ButtonName {
  buttonName: string;
  onClick?: () => void;
}

const Button = ({ buttonName }: ButtonName) => {
  return (
    // <div className="flex justify-center items-center">
    //   <button className="relative group px-6 py-3 font-medium text-white overflow-hidden border-4 border-[#ffddd3] rounded-2xl">
    //     {/* Yellow background (default) */}
    //     <span className="absolute bg-transparent inset-0 translate-y-full transition-transform group-hover:translate-y-20 duration-500 ease-in-out "></span>

    //     {/* Indigo background (slides in on hover) */}
    //     <span className="absolute inset-0 bg-[#b33d18] translate-y-full transition-transform transform group-hover:translate-y-0 duration-500 ease-in-out rounded-lg"></span>

    //     {/* Button Text */}
    //     <span className="relative z-10 text-[#804c00] hover:text-white animate-spin">
    //       {description}
    //     </span>
    //   </button>
    // </div>
    <>
      <button className=" text-xl font-medium text-[#b33d18] border-2 border-[#66230e] px-12 py-2 rounded-full hover:text-white hover:text-center group relative flex items-center text-center overflow-hidden indent-0">
        <span className="absolute left-0 w-full h-0 transition-all bg-[#ff5722] opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease-in"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease-in ml-4">
          <FaArrowRight />
        </span>
        <span className="relative right-6 flex items-center justify-center  w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease-in">
          {buttonName}
        </span>
      </button>
    </>
  );
};

export default Button;
