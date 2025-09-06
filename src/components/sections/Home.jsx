export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      <div className="text-center z-10 px-4 relative">
        {/* Profile Image */}
        <img
          src="/Photo.JPG" // Make sure this image is inside your public folder
          alt="Profile"
          className="w-90 h-90 object-cover rounded-full mx-auto mb-6 shadow-lg"
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-gray-600 bg-clip-text text-transparent">
          Hi am Ma. Rica Basinang
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto relative z-10">
          Welcome! <br />
          I'm someone who thrives on curiosity, creativity, and connection.
          Whether I'm exploring new ideas, building meaningful projects, or
          simply enjoying the little things, this space reflects what inspires
          me. Dive in and discover what I'm all about.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="projects"
            className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="contact"
            className="border border-white/50 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-white/10"
          >
            Let's Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
