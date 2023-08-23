import React from "react";
import ProjectObjects from "./portfolio/projectObjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className='relative top-0 left-0 h-full items-center bg-transparent rounded-3xl p-1 outline-double outline-8 outline-sky-700 border-4 border-sky-700 shadow-2xl shadow-pink-400/30' style={{ fontFamily: "'VT323', sans-serif"}}>
            <h1 className="text-6xl font-bold text-center text-white pb-5">
                Portfolio
            </h1>
        <p className="text-center">Hi there and welcome to my portfolio please feel free to take a look at my projects <br/> I am always looking to start new projects</p>
            <div className="overflow-y-auto shadow-2xl rounded-3xl p-2" style={{ maxHeight: 'calc(100vh - 400px)' }}>
                {ProjectObjects.map(project => (
                    <div
                        key={project.name}
                        className="transition-transform duration-300  transform hover:scale-105 hover:shadow-xl hover:bg-opacity-100"
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
