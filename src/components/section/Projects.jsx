import React from 'react'
const Projects = () => {
    const projects = [
        {
            title: "Cloud Platform",
            description:
                "A scalable cloud platform designed to manage applications, services, and resources through a simple and user-friendly interface.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
        },
        {
            title: "E-Commerce Website",
            description:
                "A responsive online shopping platform where users can browse products, add items to their cart, and manage their orders.",
            technologies: ["React", "TailwindCSS", "Node.js", "MySQL"],
        },
        {
            title: "Task Management App",
            description:
                "A simple task management application that helps users create, organize, update, and track their daily tasks.",
            technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
        },
        {
            title: "Portfolio Website",
            description:
                "A modern and responsive personal portfolio website showcasing my skills, projects, and experience as a developer.",
            technologies: ["React", "TailwindCSS", "JavaScript"],
        },
    ]

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">

                <h2 className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center text-3xl">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-5">
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-300 transition"
                                >
                                    Live Demo →
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects
