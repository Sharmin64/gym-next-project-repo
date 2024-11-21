interface Description {
  description: string;
}

const Button = ({ description }: Description) => {
  return (
    <div className="flex justify-center items-center">
      <button className="relative group px-6 py-3 font-medium text-white overflow-hidden border-4 border-[#ffddd3] rounded-2xl">
        {/* Yellow background (default) */}
        <span className="absolute bg-[#ffddd3] inset-0 translate-y-full transition-transform group-hover:translate-y-20 duration-500 ease-in-out "></span>

        {/* Indigo background (slides in on hover) */}
        <span className="absolute inset-0 bg-[#b33d18] translate-y-full transition-transform transform group-hover:translate-y-0 duration-500 ease-in-out rounded-lg"></span>

        {/* Button Text */}
        <span className="relative z-10 text-black hover:text-white animate-pulse">
          {description}
        </span>
      </button>
    </div>
  );
};

export default Button;
