import React, { useState } from "react";

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="outline outline-solid outline-4 outline-sky-700 rounded-lg m-8 justify-items hover:bg-opacity-75 pl-2 pb-2">
            <h1 className="text-6xl text-center font-bold pt-2">{project.name}</h1>

            <div className="flex justify-center items-center mb-4">
                <span className="text-2xl mr-4 ">
                    <strong className="text-3xl">Project Status:</strong> {project.status}
                </span>
                <div className=" mx-4"></div>
                <a href={project.link} className="text-blue-700 text-2xl text-center hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </a>
            </div>

            <details onClick={toggleDetails}>
                <summary className="text-3xl mb-2 text-center">
                    {isOpen ? project.description : project.blurb}
                </summary>
                <div className='text-3xl p-2'>
                    {isOpen ? project.blurb : project.description}
                </div>
            </details>
            <p className="text-xl m-2"><strong className="text-3xl">Technologies: </strong>{project.technologies.join(", ")}</p>

            <p className="text-xl m-2"><strong className="text-3xl">Project Notes: </strong>{project.notes_and_thoughts}</p>
            <style>
                {`
                    details > summary::-webkit-details-marker {
                        display: initial;
                        margin-right: 0.5em; 
                        font-size: inherit; 
                    }
                `}
            </style>
        </div>
    );
};

export default ProjectCard;
