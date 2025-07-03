import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 'locatory',
      title: 'Locatory',
      description: 'In this project, I designed a backend API enabling users to create or review places, while others could express their liking or disliking of reviews. I implemented a notification system to inform users about likes on their reviews. Additionally, I integrated the Google Places API for place autocompletion and used the Google Maps SDK to convert place names into latitude and longitude coordinates. To enhance user experience, I developed a custom algorithm for finding nearby places. Lastly, I created endpoints for review tracking and monitoring previously added places.',
      image: '/assets/locatory.webp',
      tag: 'latest work'
    },
    {
      id: 'devbd',
      title: 'DevBD',
      description: 'I developed the backend REST API for efficiently managing the Bangladesh Government\'s projects, featuring five distinct roles with varying authority levels. This included a mechanism where projects based on their budget can be approved by the ministry of planning or another organization. I optimized scheduling using a topological sorting algorithm to prevent time slot overlaps, and I organized projects into measurable components while prioritizing security and confidentiality for project details.',
      image: '/assets/devbd.webp',
      tag: 'Hackathon Winning Project'
    },
    {
      id: 'tripify',
      title: 'Tripify',
      description: 'I designed a backend API for a travel agency, enabling users to search for flights, book seats based on availability, receive invoices, and access their booking history. Travel agents can generate sales reports, while admin/business owners can access in-depth analytics, including top customer data, best-selling flights, weekly sales trends, and the total revenue, making it a versatile platform for both travel booking and comprehensive business reporting.',
      image: '/assets/tripify.webp',
      tag: 'A business Solution'
    }
  ]

  const skills = [
    {
      title: 'Development',
      description: 'I develop versatile backend REST APIs, handling NoSQL and SQL databases with strong route security for authorized access and efficient data handling, all while emphasizing clean, modular code.'
    },
    {
      title: 'Architecture Design',
      description: 'I excel in designing database schemas and possess a deep understanding of system architectures, encompassing both monolithic and microservices paradigms. Additionally, I have knowledge about caching deployments and mitigating latency issues, ensuring optimal system performance.'
    },
    {
      title: 'Documentation',
      description: 'I have exceptional documentation skills, creating clear project understanding through use case, system, ER, UML, and schema diagrams for seamless team collaboration.'
    }
  ]

  return (
    <>
      <Head>
        <title>Fahmida Ara | Backend Engineer</title>
        <meta name="description" content="Backend Developer and API Engineer specializing in developing highly efficient REST APIs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Fahmida Ara
            </div>
            <div className="flex space-x-6">
              <Link href="#work" className="text-gray-300 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm Fahmida,
            </h1>
            <h2 className="text-3xl md:text-4xl text-purple-300 mb-8">
              Backend Developer and API Engineer
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I specialize in developing highly efficient REST APIs that seamlessly integrate with complex database systems. My expertise centers around crafting data-driven solutions, merging in-depth knowledge of API development with robust database architecture to build scalable systems.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.id} className="mb-20">
                <div className="text-sm text-purple-400 mb-2 uppercase tracking-wide">
                  {project.tag}
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <h3 className="text-3xl font-bold text-white mb-6">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gray-800 rounded-lg p-1">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              What I Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 hover:bg-gray-800/70 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Want to connect?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              If you're looking for someone to craft a fantastic backend REST API, complete with top-notch documentation and seamless collaboration with the frontend team, feel free to reach out to me
            </p>
            <div className="flex justify-center space-x-6">
              <Link 
                href="https://www.linkedin.com/in/fahmida-reem/"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </Link>
              <Link 
                href="https://github.com/fahmida-reem"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find me on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-400">
            2024 © Fahmida Ara
          </p>
        </footer>
      </main>
    </>
  )
}