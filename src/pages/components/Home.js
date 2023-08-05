import React from "react";

const Home = () => {
  return (
    <div className="
      relative 
      top-0 
      left-0 
      items-center 
      bg-transparent 
      rounded-3xl 
      p-8  
      border-4 
      border-red-400 
      outline-double 
      outline-8 
      outline-red-400 
      bg-pink-300 
      bg-opacity-75 
      shadow-2xl 
      shadow-pink-400/30" 
      style={{ fontFamily: "'VT323', sans-serif"}}>

    <h1 className="
    text-6xl 
    font-bold 
    text-center 
    text-white 
    pb-5 
    tracking-wider">
      Hello, my name is Nolan. 
    <br/>Welcome to my website!
    </h1>

    <div className="overflow-auto shadow-2xl shadow-rounded rounded-xl shadow-pink-500/40" style={{ maxHeight: 'calc(100vh - 400px)' }}>

      <p className="text-3xl text-center" style={{ fontFamily: "'VT323', sans-serif" }}>
        My goal is to provide simple, innovative, reusable and relaible code.
      </p>

        <p className="text-3xl text-center" style={{ fontFamily: "'VT323', sans-serif" }}>
          
        </p>
      </div>
    </div>
  );
};

export default Home;
