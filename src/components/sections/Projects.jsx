import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen"; // Adjust path if needed

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#ffc0cb] text-pink-900 px-4 py-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-pink-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white/60 rounded-xl p-6 border border-pink-300 shadow-md hover:shadow-lg transition-all">
            <h3
              className="text-2xl font-semibold text-pink-700 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              BarterTaBai
            </h3>
            <p className="text-pink-900 text-sm mb-4">
              This is a web-based antque barter trading platform that allows
              users to trade antiques and collectibles. It features user
              authentication, item listings, search functionality, and a
              messaging system for negotiations.
            </p>
            <a
              href="#"
              className="inline-block bg-pink-500 text-white py-2 px-4 rounded-full text-sm hover:shadow-md transition-all"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white/60 rounded-xl p-6 border border-pink-300 shadow-md hover:shadow-lg transition-all">
            <h3
              className="text-2xl font-semibold text-pink-700 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Personal Portfolio
            </h3>
            <p className="text-pink-900 text-sm mb-4">
              This site! A playful yet polished portfolio showcasing my
              creativity, integrity, and technical skills—with pastel tones and
              animated transitions.
            </p>
            <a
              href="#"
              className="inline-block bg-pink-500 text-white py-2 px-4 rounded-full text-sm hover:shadow-md transition-all"
            >
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white/60 rounded-xl p-6 border border-pink-300 shadow-md hover:shadow-lg transition-all">
            <h3
              className="text-2xl font-semibold text-pink-700 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Calorie Tracker IN THE FUTURE AHHA
            </h3>
            <p className="text-pink-900 text-sm mb-4">
              This is a mobile application, for tracking daily calorie intake
              and exercise. It includes features like barcode scanning, meal
              logging, and progress tracking to help users achieve their fitness
              goals.
            </p>
            <a
              href="#"
              className="inline-block bg-pink-500 text-white py-2 px-4 rounded-full text-sm hover:shadow-md transition-all"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
