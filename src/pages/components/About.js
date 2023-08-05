import React from "react";

const About = () =>{
    return (
        <div className="
            relative 
            top-0 
            left-0 
            h-full 
            items-center 
            bg-transparent 
            rounded-3xl 
            p-8 
            outline-double 
            outline-4 
            outline-emerald-800
            border-8 
            border-emerald-800 
            bg-lime-300 
            bg-opacity-75 
            shadow-2xl 
            shadow-emerald-800/30" 
        style={{ fontFamily: "'VT323', sans-serif" }}>

            <h1 className="text-6xl font-bold text-center text-white pb-4">
                About
            </h1>

            <div className="overflow-auto bg-opacity-25 rounded-full" style={{ maxHeight: 'calc(100vh - 400px)' }}>

                <div className=" text-center" style={{ fontFamily: "'VT323', sans-serif" }}>

                    <details>
                        <summary class=" text-5xl p-4">
                            DropDown 1
                        </summary>

                        <div class=" text-3xl p-4">
                            <p>
                                Praesent posuere nisi vel diam congue varius. Praesent lacus nulla, congue nec rhoncus nec, suscipit et enim. Donec ultrices nec arcu et pharetra.
                            </p>
                        </div>
                    </details>


                    <details>
                        <summary class="p-6 text-5xl">
                            DropDown 2
                        </summary>
                        <div class="text-3xl p-4">
                            <p>
                                Just some dummy content. Just some dummy content. Just some dummy content. Just some dummy content. Just some dummy content. Just some dummy content
                            </p>
                        </div>
                    </details>


                    <details>
                        <summary class="p-4 text-5xl">DropDown 3</summary>
                        <div class="text-3xl p-4">
                            <ul>
                                <li>List Item 1</li>
                                <li>List Item 2</li>
                            </ul>
                        </div>
                    </details>
                </div>
        </div>
    </div>
    );
};
export default About