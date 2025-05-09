import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="relative"
        style={{
          width: "calc(3 * 30px + 26px)",
          height: "calc(2 * 30px + 26px)",
        }}
      >
        <div className="square1 absolute h-[26px] w-[26px] rounded-full bg-red-500"></div>
        <div className="square2 absolute h-[26px] w-[26px] rounded-full bg-blue-600"></div>
        <div className="square3 absolute h-[26px] w-[26px] rounded-full bg-green-600"></div>
        <div className="square4 absolute h-[26px] w-[26px] rounded-full bg-yellow-400"></div>
        <div className="square5 absolute h-[26px] w-[26px] rounded-full bg-purple-600"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
