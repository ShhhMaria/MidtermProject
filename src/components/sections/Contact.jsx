import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form Submission Logic Here
    alert("Thank you for your message!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[#ffc0cb] text-pink-900 px-4 pt-28 pb-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-4xl w-full">
        <h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-pink-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Me
        </h2>

        <div className="rounded-xl p-8 border border-pink-300 bg-white/60 backdrop-blur-sm shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-pink-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-3 bg-white/80 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-pink-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-3 bg-white/80 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-pink-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="block w-full px-4 py-3 bg-white/80 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                placeholder="How can I help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Send contact message"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
