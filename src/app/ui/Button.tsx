interface Description {
  description: string;
}

const Button = ({ description }: Description) => {
  return (
    <div className="flex justify-center items-center">
      <button className="relative group px-6 py-3 font-medium text-white overflow-hidden">
        {/* Yellow background (default) */}
        <span className="absolute inset-0 bg-yellow-500 translate-x-full transition-transform transform group-hover:translate-x-20 duration-500 ease-in"></span>

        {/* Indigo background (slides in on hover) */}
        <span className="absolute inset-0 bg-indigo-600 translate-x-full transition-transform transform group-hover:translate-x-3 duration-500 ease-in border-r-8"></span>

        {/* Button Text */}
        <span className="relative z-10 text-black hover:text-white">
          {description}
        </span>
      </button>
    </div>
  );
};

export default Button;
