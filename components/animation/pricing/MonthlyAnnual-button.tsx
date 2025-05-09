"use client";

interface TogglePlanButtonProps {
  toggled: boolean;
  setToggled: (toggled: boolean) => void;
}

const TogglePlanButton: React.FC<TogglePlanButtonProps> = ({
  toggled,
  setToggled,
}) => {
  return (
    <div className="ml-2 flex h-full items-center justify-center">
      <button
        onClick={() => setToggled(!toggled)}
        className="flex h-5 w-fit rotate-36 transform items-center justify-center rounded-lg bg-gradient-to-r from-red-400 via-rose-500 to-red-600 px-1.5 font-sans text-[7px] leading-none font-medium text-white uppercase transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:cursor-pointer hover:rounded-md hover:shadow-[2px_2px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none md:text-[10px]"
      >
        <span>{toggled ? "Monthly" : "Annual"}</span>
      </button>
    </div>
  );
};

export default TogglePlanButton;
