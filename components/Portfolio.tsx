'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  // Branding Projects
  {
    id: 1,
    title: "Multivendor E-commerce",
    category: "MERN stack",
    image: "/projects/multivendor_ecom.png",
    description: "Multivendor E-commerce",
    link: 'https://github.com/Jatinvaish/Basic_ECommerce_1'
  },
  {
    id: 7,
    title: "Meeting Class",
    category: "MERN stack",
    image: "/projects/project_meet_1.png",
    description: "meeting class ",
    link: 'https://meetingclass.netlify.app/'
  },
  {
    id: 3,
    title: "Movie Site",
    category: "MERN stack",
    image: "/projects/project_movie_1.png",
    description: "Using IMDB API create movies clone",
    link: 'https://moviesclone.onrender.com/'
  },

  {
    id: 4,
    title: "Invoicer APP",
    category: "React JS",
    image: "/projects/project_invoicer1.png",
    description: "Asthetic Invoicer platform design",
    link: 'https://invoicerui.netlify.app/'
  },
  {
    id: 5,
    title: "Project Management",
    category: "Next JS",
    image: "/projects/project_plura_1.png",
    description: "Modern Project management tool",
    link: 'https://github.com/Jatinvaish/plura'
  },
  {
    id: 6,
    title: "Prompt App",
    category: "Next JS",
    image: "/projects/project_prompt_1.png",
    description: "Propmp App- Frontend research",
    link: 'https://next-js-propmt.vercel.app/'
  },

  // Motion Projects
  {
    id: 2,
    title: "Accounting Software",
    category: ".Net",
    image: "/projects/project_biz_1.png",
    description: "User friendly Accounting Platform",
    link: 'https://biz.tririd.com/'
  },
  {
    id: 8,
    title: "POS system",
    category: ".Net",
    image: "/projects/project_invoicer_4.png",
    description: "POS and inventory management",
    link: 'https://biz.tririd.com/'
  },
  {
    id: 9,
    title: "3D- Portfolio",
    category: "Next JS",
    image: "/projects/project_3d_1.png",
    description: "Animated 3d portfolio",
    link: 'https://jatinvaishnav.netlify.app/'
  },

  // Photography Projects
  {
    id: 10,
    title: "Portfolio - template",
    category: "React JS",
    image: "/projects/project_portfolio_grey_1.png",
    description: "Simple and modern portfolio",
    link: 'https://vaishnavjatin.vercel.app/'
  },
  {
    id: 11,
    title: "Event Management",
    category: "MERN stack",
    image: "/projects/project_feedback_1.png",
    description: "Crud operation with mern stack",
    link: 'https://eventfeedbackbasic.netlify.app/'
  },
  {
    id: 12,
    title: "Quiz APP",
    category: "React JS",
    image: "/projects/project_quiz_basic_1.png",
    description: "Basi Quiz app with redux",
    link: 'http://quizappbasicagreemtech.netlify.app/'
  },

];

const categories = ["All", "MERN stack", "Next JS", "React JS", ".Net"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="relative min-h-screen py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(123,31,162,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,rgba(59,130,246,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-grid"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Featured Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my latest projects and creative endeavors across various factors 
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'glass-card text-gray-400 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card"
              >
                <Link href={project?.link || 'https://github.com/Jatinvaish'}> 
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-2">
                      <span className="text-sm text-purple-400">{project.category}</span>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </div>
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
