import React from "react";

export const LinkButton = ({ url = "#", text = "Button Text" }) => {
  return (
    <button className="z-[2] relative group text-white">
      <a
        href={url}
        className="flex items-center justify-center text-center cursor-pointer bg-black font-semibold absolute w-[160px] sm:w-[180px] lg:w-[200px] h-[44px] sm:h-[48px] lg:h-[50px] text-sm sm:text-base"
      >
        {text}
      </a>
      <div className="transiton-all ease-in duration-100 absolute w-[160px] sm:w-[180px] lg:w-[200px] group-hover:left-[0px] group-hover:bottom-[-46px] sm:group-hover:bottom-[-50px] lg:group-hover:bottom-[-52px] left-[5px] sm:left-[6px] lg:left-[7px] bottom-[-51px] sm:bottom-[-55px] lg:bottom-[-58px] border-black z-[-1] border-[2px] h-[44px] sm:h-[48px] lg:h-[50px]"></div>
    </button>
  );
};
