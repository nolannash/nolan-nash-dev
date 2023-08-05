import React from "react";


const Projects = () => {
    return (
    <div className={`
        relative 
        top-0 
        left-0 
        h-full 
        items-center 
        bg-transparent 
        rounded-3xl 
        p-8 
        outline-double 
        outline-8 
        outline-sky-700 
        border-4 
        border-sky-700 
        shadow-2xl 
        shadow-pink-400/30 `}
        style={{ fontFamily: "'VT323', sans-serif"}}>

        <h1 className="text-6xl font-bold text-center text-white pb-5 ">
            Portfolio
        </h1>

        <div className="overflow-auto shadow-2xl rounded-3xl" style={{ maxHeight: 'calc(100vh - 400px)' }}>

        <p className="text-3xl text-center" style={{ fontFamily: "'VT323', sans-serif" }}>
            I unfortunately do not have any deployed or playable applications or sites right now however a fully list of my in progress and upcoming projects is available in the <strong>about</strong> section
        </p>
        </div>
    </div>
    );
};


export default Projects;