"use client";

import React, { useEffect, useState, useRef } from "react";
import ScrollIndicator from "./ScrollIndicator";

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    childRefs.current.forEach((child, index) => {
      if (child) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                setActiveIndex(index);
              }
            });
          },
          {
            threshold: [0.5],
            rootMargin: "-20% 0px -20% 0px",
          }
        );

        observer.observe(child);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [children]);

  const childrenArray = React.Children.toArray(children);

  const scrollToIndex = (index: number) => {
    const targetChild = childRefs.current[index];
    if (targetChild) {
      targetChild.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <ScrollIndicator
        totalItems={childrenArray.length}
        activeIndex={activeIndex}
        onDotClick={scrollToIndex}
      />
      <div ref={containerRef} className="snap-y snap-mandatory">
        {childrenArray.map((child, index) => (
          <div
            key={index}
            ref={(el) => {
              childRefs.current[index] = el;
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardContainer;
