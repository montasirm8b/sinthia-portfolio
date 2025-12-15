import React from "react";

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <span
      key={tag}
      className="bg-pink-100 flex items-center justify-center px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[11px] lg:text-[14px] font-bold text-center leading-tight"
    >
      {tag}
    </span>
  );
};

export default Tag;
