"use client";

import Image from "next/image";
import Link from "next/link";
import {
  abrilFatface,
  mulish,
  mulishBold,
  mulishMedium,
  mulishSemibold,
} from "./fonts";
import Header from "./components/Header";
import { LinkButton } from "./components/Button";
import Highlight from "./components/Highlight";
import CardContainer from "./components/ProjectCard/CardContainer";
import Project from "./components/ProjectCard/Project";
import { configs } from "./configs";

export default function Home() {
  const projects = [
    {
      id: "locatory",
      supertitle: "latest work",
      title: "Locatory",
      description:
        "In this project, I designed a backend API enabling users to create or review places, while others could express their liking or disliking of reviews. I implemented a notification system to inform users about likes on their reviews. Additionally, I integrated the Google Places API for place autocompletion and used the Google Maps SDK to convert place names into latitude and longitude coordinates. To enhance user experience, I developed a custom algorithm for finding nearby places. Lastly, I created endpoints for review tracking and monitoring previously added places.",
      image: "/assets/locatory.webp",
      tags: [
        "Database design",
        "Multiple API Integration",
        "Social Media Concept",
      ],
    },
    {
      id: "devbd",
      supertitle: "Hackathon Winning Project",
      title: "DevBD",
      description:
        "I developed the backend REST API for efficiently managing the Bangladesh Government's projects, featuring five distinct roles with varying authority levels. This included a mechanism where projects based on their budget can be approved by the ministry of planning or another organization. I optimized scheduling using a topological sorting algorithm to prevent time slot overlaps, and I organized projects into measurable components while prioritizing security and confidentiality for project details.",
      image: "/assets/devbd.webp",
      tags: [
        "Database design",
        "Multiple API Integration",
        "Social Media Concept",
      ],
    },
    {
      id: "tripify",
      supertitle: "A business Solution",
      title: "Tripify",
      description:
        "I designed a backend API for a travel agency, enabling users to search for flights, book seats based on availability, receive invoices, and access their booking history. Travel agents can generate sales reports, while admin/business owners can access in-depth analytics, including top customer data, best-selling flights, weekly sales trends, and the total revenue, making it a versatile platform for both travel booking and comprehensive business reporting.",
      image: "/assets/tripify.webp",
      tags: [
        "Database design",
        "Multiple API Integration",
        "Social Media Concept",
      ],
    },
    {
      id: "tripify",
      supertitle: "A business Solution",
      title: "Tripify",
      description:
        "I designed a backend API for a travel agency, enabling users to search for flights, book seats based on availability, receive invoices, and access their booking history. Travel agents can generate sales reports, while admin/business owners can access in-depth analytics, including top customer data, best-selling flights, weekly sales trends, and the total revenue, making it a versatile platform for both travel booking and comprehensive business reporting.",
      image: "/assets/tripify.webp",
      tags: [
        "Database design",
        "Multiple API Integration",
        "Social Media Concept",
      ],
    },
  ];

  const skills = [
    {
      title: "Development",
      description:
        "I develop versatile backend REST APIs, handling NoSQL and SQL databases with strong route security for authorized access and efficient data handling, all while emphasizing clean, modular code.",
    },
    {
      title: "Architecture Design",
      description:
        "I excel in designing database schemas and possess a deep understanding of system architectures, encompassing both monolithic and microservices paradigms. Additionally, I have knowledge about caching deployments and mitigating latency issues, ensuring optimal system performance.",
    },
    {
      title: "Documentation",
      description:
        "I have exceptional documentation skills, creating clear project understanding through use case, system, ER, UML, and schema diagrams for seamless team collaboration.",
    },
  ];

  return (
    <>
      <main className="min-h-screen snap-y snap-mandatory scroll-smooth">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-8 bg-amber-50 snap-start min-h-[60vh] md:min-h-[calc(100vh-80px)] flex flex-col justify-center">
          <div className="w-full lg:w-5/7 mt-4 sm:mt-6 lg:mt-8">
            <p
              className={`${abrilFatface.className} text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight`}
            >
              Hi, I'm Sinthia, <Highlight>Backend</Highlight> Developer and{" "}
              <span className="highlight">API</span> Engineer.
            </p>
          </div>

          <div
            className={`${mulish.className} w-full sm:w-4/5 lg:w-3/5 my-6 sm:my-8 lg:my-10`}
          >
            <p className="font-semibold text-sm sm:text-base lg:text-lg">
              I specialize in developing highly efficient REST APIs that
              seamlessly integrate with complex database systems. My expertise
              centers around crafting data-driven solutions, merging in-depth
              knowledge of API development with robust database architecture to
              build scalable systems.
            </p>
          </div>
          <LinkButton url="#works" text="See my works" />
        </section>

        {/* Projects Section */}
        <section id="works">
          <CardContainer>
            {projects.map((item, index) => {
              return <Project key={index} {...item} />;
            })}
          </CardContainer>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="mt-16 sm:mt-24 lg:mt-32 snap-start px-4 sm:px-8 lg:px-0"
        >
          <div className="mx-4 sm:mx-8 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            <h2
              className={`${abrilFatface.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 lg:mb-12 text-center lg:text-center`}
            >
              What I <Highlight>Do</Highlight>
            </h2>
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h3
                    className={`${mulishSemibold.className} text-lg sm:text-xl font-bold mb-2`}
                  >
                    {skill.title}
                  </h3>
                  <p className="leading-relaxed text-sm sm:text-base">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="bg-amber-50 mt-16 sm:mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 px-4 sm:px-8 lg:px-20 pt-12 sm:pt-20 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
            <div>
              <h2
                className={`${abrilFatface.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 lg:mb-8`}
              >
                Want to <Highlight>connect?</Highlight>
              </h2>
            </div>
            <p
              className={`${mulishMedium.className} text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed`}
            >
              If you're looking for someone to craft a fantastic backend REST
              API, complete with top-notch documentation and seamless
              collaboration with the frontend team, feel free to reach out to me
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline gap-4 sm:gap-0 px-4 sm:px-8 lg:px-20 pb-6 sm:pb-8">
            <h3 className="text-gray-500 text-xs sm:text-sm font-semibold order-2 sm:order-1">
              {new Date().getFullYear()} © Sinthia
            </h3>
            <button
              className={`${mulishMedium.className} bg-yellow-200 hover:bg-yellow-300 text-yellow-700 hover:text-yellow-900 px-4 py-2 rounded-md flex justify-center items-center gap-2 transition-all duration-150 ease-in font-medium text-sm sm:text-base order-1 sm:order-2`}
            >
              <Link href={configs.github_url} target="_blank">
                View My Github
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                role="img"
                className="iconify iconify--akar-icons"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                ></path>
              </svg>
            </button>
          </div>
        </footer>
      </main>
    </>
  );
}
