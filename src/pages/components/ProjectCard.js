import React, { useState } from "react";

const ProjectCard = ({ project, }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="outline outline-solid outline-4 outline-sky-700 rounded-lg m-8 justify-items hover:bg-opacity-75 pl-2 pb-2">
            <h1 className="text-6xl text-center font-bold pt-2">{project.name}</h1>
            <p className="text-xl text-bold text-center mt-2 mb-2">{project.blurb}</p>
            <div className="flex justify-center items-center mb-4">
                <span className="text-2xl mr-4 ">
                    <strong className="text-3xl">Project Status:</strong> {project.status}
                </span>
                <div className=" mx-4"></div>
                <a href={project.gh_link} className="text-blue-700 text-2xl text-center hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </a>
            </div>

            <details onClick={toggleDetails}>
                <summary className="text-3xl text-bold mb-2 text-center hover:text-blue-700">
                    {isOpen ? "click to close": "Learn More"  }
                </summary>
                <p className='text-xl p-2 text-bold'>
                    {project.description }
                </p>
                <p className="text-xl m-2 pl-8"><strong className="text-3xl">Technologies: </strong>{project.technologies.join(", ")}</p>
                <details className=" text-xl pl-8 pb-2"><summary><strong className="text-3xl">Personal Notes/Thoughts/Upcoming Changes </strong></summary>{project.notes_and_thoughts}</details>
            </details>

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
