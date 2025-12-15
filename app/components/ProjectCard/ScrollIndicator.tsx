"use client";

import React from "react";

interface ScrollIndicatorProps {
  totalItems: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

const ScrollIndicator = ({
  totalItems,
  activeIndex,
  onDotClick,
}: ScrollIndicatorProps) => {
  return (
    <div className="fixed top-20 sm:top-24 lg:top-32 right-4 sm:right-6 lg:right-8 z-50 flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-all duration-300 rounded-full cursor-pointer ${
            index === activeIndex
              ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 scale-125"
              : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-800/30 hover:bg-yellow-800/60"
          }`}
          title={`Go to Project ${index + 1}`}
          aria-label={`Scroll to project ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
