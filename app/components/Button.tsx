import React from 'react'

export const LinkButton = ({ url ="#" , text = "Button Text"}) => {
  return (
    <button className="z-[2] relative group text-white">
        <a href={url} className="flex items-center justify-center text-center cursor-pointer bg-black font-semibold absolute w-[200px] h-[50px]">
            {text}
        </a>
        <div className=" transiton-all ease-in duration-100 absolute w-[200px] group-hover:left-[0px] group-hover:bottom-[-52px] left-[7px] bottom-[-58px] border-black z-[-1] border-[2px] h-[50px]"></div>
    </button>
  )
}