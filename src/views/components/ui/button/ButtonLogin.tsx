import { MouseEventHandler } from "react";

interface Props {
  icon: string;
  text: string;
  disable?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ButtonLogin = ({ icon, text, disable, onClick }: Props) => {
  return (
    <button
      className={`${
        disable ? "bg-gray-300" : "hover:border-blue-400"
      } group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  focus:bg-blue-50 active:bg-blue-100`}
      onClick={onClick}
      disabled={disable}
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <img
          src={icon}
          alt="icon..."
          className={`${disable && "opacity-50"} w-6 h-6 absolute left-0 `}
        />
        <span
          className={`${
            disable ? "" : "group-hover:text-blue-600 text-gray-700"
          } block w-max font-semibold tracking-wide  text-sm transition duration-300 sm:text-base`}
        >
          {text}
        </span>
      </div>
    </button>
  );
};
