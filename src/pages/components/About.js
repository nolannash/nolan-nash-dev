import React from "react";
import pfp from '../../images/IMG-1069.jpg'

const About = () => {
    return (
        <div className="relative 
        top-0 
        left-0 
        h-full 
        items-center
        rounded-3xl 
        p-8 
        outline-double 
        outline-4 
        outline-emerald-800 
        border-8 
        border-emerald-800 
        shadow-2xl" 
        style={{ fontFamily: "'VT323', sans-serif"}}>

        <h1 className="text-6xl font-bold text-center text-white pb-4">
            About
        </h1>

        <div className="overflow-auto 
        bg-opacity-25 
        rounded-3xl 
        grid grid-cols-3 
        gap-6 
        shadow-2xl 
        inner-shadow-2xl" 
        style={{ maxHeight: 'calc(100vh - 350px)', paddingLeft: "3rem", paddingRight: "3rem" }}>

        <div className="text-center 
        hover:bg-green-400 
        hover:rounded-3xl 
        hover:bg-opacity-25 
        hover:shadow-2xl" 
        style={{ fontFamily: "'VT323', sans-serif", maxHeight: 'calc(100vh - 450px)', overflowY: 'auto' }}>

            <details>
                <summary className="text-5xl p-4">Get to know me</summary>
                <div className="text-3xl p-4 divide-y justify-items-center divide-emerald-800">

                <img src={pfp} alt ='this is me' className="inline-block h-60 w-50 rounded-full pb-2"/>
                    <p>
                        My name is Nolan Nash, I use they/them pronouns and am based in Oakland, California where I live with my partner and our two cats.
                        <br />
                        While I only recently become a software developer, I always loved solving problems, logic games, puzzles, and learning new things. That has made the transition to a software developer more than easy but incredibly fun.
                        <br />
                        I spend my free time going on walks, reading, cooking, doing other crafts like woodworking or crochet, playing video games, or spending time with friends and family.
                        </p>
                    </div>
                </details>
        </div>

        <div className="text-center  
        hover:bg-green-400 
        hover:rounded-3xl 
        hover:bg-opacity-25 
        hover:shadow-2xl" 
        style={{ fontFamily: "'VT323', sans-serif", maxHeight: 'calc(100vh - 450px)', overflowY: 'auto' }}>
            <details>
            <summary className="p-4 text-5xl">Technologies and Skills</summary>
            <div className="text-3xl p-4">
                <ul className="list-none list-inside ">
                    <li className="p-4">
                        <details>
                            <summary>Technologies</summary>
                                <ul>
                                    <li className="p-2">
                                        <details>
                                            <summary>
                                                Front End
                                            </summary>
                                                <ul>
                                                    <li className="p-2">React.js</li>
                                                    <li className="p-2">Tailwind CSS</li>
                                                    <li className="p-2">Next.js</li>
                                                    <li className="p-2">Semantic UI</li>
                                                    <li className="p-2">Material UI</li>
                                                    <li className="p-2">HTML </li>
                                                    <li className="p-2">General CSS </li>
                                                </ul>
                                        </details></li>
                                    <li className="p-2">
                                        <details>
                                            <summary>Back End</summary>
                                                <ul>
                                                    <li className="p-2">item 1</li>
                                                    <li className="p-2">item 1</li>
                                                </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>General Skills</summary>
                                    <ul>
                                        <li></li>
                                    </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </details>
        </div>

        <div className="text-center  
        hover:bg-green-400 
        hover:rounded-3xl 
        hover:bg-opacity-25 
        hover:shadow-2xl " 
        style={{ fontFamily: "'VT323', sans-serif", maxHeight: 'calc(100vh - 450px)', overflowY: 'auto' }}>

            <details>
            <summary className="p-4 text-5xl">Current Happenings</summary>
            <div className="text-3xl p-4 divide-y divide-emerald-800">

            <ul className="list-none list-inside ">
                    <li className="p-4">
                        <details>
                            <summary>In Progress</summary>
                                <ul>

                                    <li className="p-2">I am Looking for a job! Feel free to reach out to me with offers, contacts, information etc.</li>
                                    <li className="p-2">item 1</li>

                                </ul>
                            </details>
                        </li>
                        <li className="p-4">
                            <details>
                                <summary>Planned Projects</summary>
                                    <ul>
                                        <li></li>
                                    </ul>
                            </details>
                        </li>
                        <li className="p-4">
                            <details>
                                <summary>Learning Goals</summary>
                                    <ul>
                                        <li>I am currently enrolled in a bootcamp with The CloudBootCamp learning about cloud development and multicloud</li>
                                        <li>I have also completed several courses via W3 schools on AWS development and AWS development with python. Until I have more money I will likely not be able to actually earn any of the certificates</li>
                                    </ul>
                            </details>
                        </li>
                        <li className="p-4">
                            <details>
                                <summary>Life Stuff</summary>
                                    <ul>
                                        <li>I recently moved to Oakland CA from Seattle WA</li>
                                        <li>I am currently learning the crochet style of arumiguri in my spare time</li>

                                    </ul>
                            </details>
                        </li>
                    </ul>
            </div>
            </details>
        </div>
        </div>
    </div>
    );
};

export default About;
