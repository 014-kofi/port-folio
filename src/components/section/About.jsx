import React from 'react'
const About = () => {
    const frontendSkills = ["React", "Vue", "Typescript", "TailwindCSS"];
    const backendSkills = ["Node.js", "Express", "MySQL", "MongoDB"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">

                {/* Title */}
                <h2 className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center text-3xl">
                    About Me
                </h2>

                {/* Main Card */}
                <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">

                    {/* About */}
                    <p className="text-gray-300 mb-6">
                        I’m a passionate and motivated developer who enjoys creating
                        websites and learning new technologies. I’m currently improving
                        my frontend and backend skills as I work toward becoming a
                        full-stack developer.
                    </p>

                    {/* Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Frontend */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Backend
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                        {/* Education */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>

                            <p className="text-gray-300 font-semibold">
                                Computer Science & Web Development
                            </p>

                            <p className="text-gray-400 mt-2">
                                Rwanda
                            </p>

                            <p className="text-gray-400 mt-2">
                                Currently learning and improving my skills in
                                frontend and backend development.
                            </p>
                        </div>

                        {/* Work Experience */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>

                            <p className="text-gray-300 font-semibold">
                                Junior Web Developer
                            </p>

                            <p className="text-gray-400 mt-2">
                                Rwanda
                            </p>

                            <p className="text-gray-400 mt-2">
                                Worked on personal and small web projects,
                                building responsive websites using modern
                                frontend and backend technologies.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
