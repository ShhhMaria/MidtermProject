import React from "react";
import ProfileImage from "../../assets/Photo.jpg";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-[#ffc0cb] text-pink-900 px-4 py-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="text-center z-10 px-4 relative">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
        />

        <h1
          className="text-5xl md:text-6xl font-bold mb-6 text-center text-pink-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hello Maria here!
        </h1>

        <p className="text-lg mb-8 max-w-3xl mx-auto relative z-10">
          Welcome! <br />
          I'm someone who thrives on curiosity, creativity, and connection.
          Whether I'm exploring new ideas, building meaningful projects, or
          simply enjoying the little things, this space reflects what inspires
          me.
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto relative z-10">
          Feel free to pick any buttons to know be better
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-pink-500 text-white py-3 px-6 rounded-full font-medium hover:shadow-lg hover:bg-pink-600 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-white text-pink-500 border border-pink-300 py-3 px-6 rounded-full font-medium hover:bg-pink-100 transition-all"
          >
            Let's Get in Touch
          </a>
          <a
            href="#about"
            className="bg-white text-pink-500 border border-pink-300 py-3 px-6 rounded-full font-medium hover:bg-pink-100 transition-all"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
