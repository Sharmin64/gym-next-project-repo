import React from "react";

interface IconButtonProps {
  icon: React.ReactNode; // Accepts any icon as a child
  color?: "green" | "red" | "orange" | "purple" | "sky"; // Color options
  onClick?: () => void; // Click handler
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = "green",
  onClick,
}) => {
  const colors = {
    green: "bg-green-400 hover:bg-green-700 ring-green-400",
    red: "bg-red-400 hover:bg-red-700 ring-red-400",
    orange: "bg-orange-400 hover:bg-orange-700 ring-orange-400",
    purple: "bg-purple-400 hover:bg-purple-700 ring-purple-400",
    sky: "bg-sky-400 hover:bg-sky-700 ring-sky-400",
  };

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center w-15 h-15 rounded-full 
        overflow-hidden text-white transition duration-300 shadow-lg 
        focus:ring-4 focus:outline-none ${colors[color]}`}
    >
      <span className="text-3xl">{icon}</span>
    </button>
  );
};

export default IconButton;
