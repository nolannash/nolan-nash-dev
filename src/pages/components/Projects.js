import React, { useState } from "react";
import ProjectObjects from "./portfolio/ProjectObjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);
    const isPTagVisible = isHovered;
    const projectCardsContainerMarginTop = isPTagVisible ? "mt-8 md:mt-6 lg:mt-4" : "mt-0 md:mt-2 lg:mt-1";
    const projects = ProjectObjects
    return (
        <div
            className={`relative top-0 left-0 h-full items-center bg-transparent rounded-3xl outline-double outline-8 outline-sky-700 border-4 border-sky-700 shadow-2xl shadow-pink-400/30 ${projectCardsContainerMarginTop}`}
            style={{ fontFamily: "'VT323', sans-serif" }}
        >
            <h1
                className={`text-6xl font-bold text-center text-white ${
                    isHovered ? "glow-effect" : ""
                } transition-all transition-all`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Portfolio
            </h1>
            <p
                className={`text-center ${
                    isHovered ? "visible opacity-100 mb-4 text-xl" : "invisible opacity-0 mt-0"
                } transition-opacity duration-300`}
            >
                Hi there and welcome to my portfolio. Please feel free to take a look at my projects. I am always looking to start new projects.
            </p>
            <div
                className="overflow-y overflow-auto shadow-2xl rounded-3xl p-2"
                style={{ maxHeight: 'calc(100vh - 350px)' }}
            >
                {projects.map(project => (
                    <div
                        key={project.name}
                        className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl shadow-rounded hover:bg-opacity-100"
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
