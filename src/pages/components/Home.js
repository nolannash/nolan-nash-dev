import React from "react";

const Home = () => {
  return (
    <div className="relative top-0 left-0 items-center bg-transparent rounded-3xl p-8 border-double border-4 border-red-400 bg-pink-200 bg-opacity-50 shadow-2xl shadow-pink-400/30 z-3" style={{ fontFamily: "'VT323', sans-serif"}}>
    <h1 className="text-6xl font-bold text-center text-white pb-5 tracking-wider">Welcome to my Website!</h1>
    <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>
      <p className="text-2xl text-center" style={{ fontFamily: "'Lexend Variable', sans-serif" }}>
        </p>
      </div>
    </div>
  );
};

export default Home;
