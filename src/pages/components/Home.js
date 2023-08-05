import React from "react";

const Home = () => {
  return (
    <div className="relative top-0 left-0 h-full items-center bg-transparent rounded-3xl p-8 border-double border-4 border-red-300 bg-pink-300 bg-opacity-50 shadow-2xl shadow-pink-400/30 z-3" style={{ fontFamily: "'Lexend Variable', sans-serif" }}>
        <h1 className="text-6xl font-bold text-center text-white pb-5">Welcome to my website!</h1>
        <p className="text-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nulla vel purus hendrerit, eu finibus tellus fringilla. Proin
          malesuada, nisi nec malesuada eleifend, nunc velit venenatis velit,
          a tincidunt nibh nunc eget tortor.
        </p>
    </div>
  );
};

export default Home;
