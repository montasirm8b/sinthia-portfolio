import { abrilFatface, mulish } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { LinkButton } from "../Button";
import Tag from "./Tag";

interface ProjectProps {
  id: string;
  supertitle: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Project = ({
  id,
  supertitle,
  title,
  description,
  image,
  tags,
}: ProjectProps) => {
  return (
    <div
      key={id}
      className="min-h-screen sm:h-screen snap-start snap-always flex items-center justify-center px-4 sm:px-8 lg:px-20 py-8 sm:py-0"
    >
      <div className="w-full">
        <div className="text-[10px] sm:text-[12px] lg:text-[16px] text-gray-400 font-bold uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[6px]">
          {supertitle}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start justify-between py-4 w-full">
          <div className="order-2 lg:order-1">
            <h2
              className={`${abrilFatface.className} text-[32px] sm:text-[40px] lg:text-[56px] mb-[12px] sm:mb-[16px] lg:mb-[20px] leading-tight`}
            >
              {title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
            <p
              className={`${mulish.className} mt-[20px] sm:mt-[30px] lg:mt-[40px] mb-6 sm:mb-8 lg:mb-10 text-[13px] sm:text-[15px] lg:text-[18px] font-medium leading-relaxed`}
            >
              {description}
            </p>
            <LinkButton url="https://devbd.netlify.app/" text="Test API" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <Image
                src="https://fahmida.dev/assets/devbd.webp"
                alt={title}
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
