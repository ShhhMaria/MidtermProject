import React from "react";

const About = () => {
  const hobbies = [
    {
      name: "Running",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-600"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="13" cy="4" r="1" />
          <path d="M4 17l5 1l.75 -1.5" />
          <path d="M15 21l0 -4l-4 -3l1 -6" />
          <path d="M7 12l0 -3l5 -1l3 3l3 1" />
        </svg>
      ),
    },
    {
      name: "Dancing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
          />
        </svg>
      ),
    },
    {
      name: "TV Series",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Anime",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12c-1.66 0-3-1.34-3-3s1.34-3 3-3c2.21 0 4 1.79 4 4 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-3.31 2.69-6 6-6s6 2.69 6 6l-1 1-3-3"
          />
        </svg>
      ),
    },
    {
      name: "KDRAMA",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      name: "Documentary",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM8 14s1.5-2 4-2 4 2 4 2m-2-5a1 1 0 11-2 0 1 1 0 012 0zm-4 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-[#ffc0cb] text-pink-900 px-4 py-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-4xl w-full">
        <h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-pink-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Me
        </h2>

        {/* Education */}
        <div className="group rounded-xl p-8 border border-pink-300 mb-8 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <h3
            className="text-2xl font-semibold text-center text-pink-700 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Educational Background
          </h3>
          <div className="flex justify-center items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
              />
            </svg>
            <p className="text-lg leading-relaxed text-center">
              Graduated with a Bachelor of Science in Information Technology
              (2023).
            </p>
          </div>
        </div>

        {/* Hobbies */}
        <div className="group rounded-xl p-8 border border-pink-300 mb-8 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <h3
            className="text-2xl font-semibold text-center text-pink-700 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hobbies & Passions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/50 hover:bg-pink-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                {hobby.icon}
                <span className="mt-2 text-sm font-medium text-pink-800">
                  {hobby.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliations */}
        <div className="group rounded-xl p-8 border border-pink-300 mb-8 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <h3
            className="text-2xl font-semibold text-center text-pink-700 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Affiliations & Achievements
          </h3>
          <ul className="space-y-4 text-lg text-center">
            <li className="flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Member of PSITE</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Member of ICT Bohol Council</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Mentor, Top 10 Team for AiDeas for Impact 2025</span>
            </li>
          </ul>
        </div>

        {/* College Instructor */}
        <div className="group rounded-xl p-8 border border-pink-300 mb-8 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <h3
            className="text-2xl font-semibold text-center text-pink-700 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            College Instructor: Holy Name University – 2024–Present
          </h3>
          <p className="text-lg leading-relaxed text-center mb-6">
            As a college instructor, I deliver engaging lectures, guide students
            through academic challenges, and contribute to curriculum
            development. This position has deepened my expertise and passion for
            education.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://www.hnu.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Visit Holy Name University website"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Part-Time Tutor */}
        <div className="group rounded-xl p-8 border border-pink-300 mb-8 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <h3
            className="text-2xl font-semibold text-center text-pink-700 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Part-Time Tutor: Einstein Modern for Education – 2023–2024
          </h3>
          <p className="text-lg leading-relaxed text-center mb-6">
            I provide personalized academic support to students in various
            subjects, helping them build confidence and improve performance.
            This role has strengthened my communication skills and adaptability.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://www.facebook.com/einsteincenter.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Visit Einstein Modern for Education website"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Working Scholar */}
        <div className="group rounded-xl p-8 border border-pink-300 mb-8 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <h3
            className="text-2xl font-semibold text-center text-pink-700 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Working Scholar: Holy Name University – 2019–2022
          </h3>
          <p className="text-lg leading-relaxed text-center mb-6">
            I balanced academics and work responsibilities, gaining valuable
            experience in time management, leadership, and resilience.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://www.hnu.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Visit Holy Name University website"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="group rounded-xl p-8 border border-pink-300 mb-8 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <h3
            className="text-2xl font-semibold text-center text-pink-700 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Location
          </h3>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.32145020111!2d123.87034173873998!3d9.646545183378556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4db17036688d%3A0x286395568f6a9e22!2sBool%2C%20Tagbilaran%20City%2C%20Bohol!5e0!3m2!1sen!2sph!4v1716181234567!5m2!1sen!2sph"
              className="w-full h-80 md:h-96 border-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map of Bool, Tagbilaran City, Bohol"
            ></iframe>
          </div>
          <p className="text-sm text-center mt-4 text-pink-600">
            Bool, Tagbilaran City, Bohol, Philippines
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
