import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { cv } from "../../constants";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile_pic.webp";

const About = () => {
  return (
    <section
      id="about"
      className="sm:py-20 md:py-28 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans sm:mt-16 md:mt-24 lg:mt-2 "
    >
      {/* Main Container */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 lg:w-4/5 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Manav Pal
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>

            <Typewriter
              words={["Software Engineer", "Fullstack Developer", "coder"]}
              typeSpeed={90}
              deleteSpeed={55}
              delaySpeed={500}
              loop={true}
              cursor
              cursorStyle="|"
            />
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 mt-8 leading-relaxed">
            I am a passionate{" "}
            <span className="font-bold text-white"> Full Stack Developer </span>{" "}
            skilled in building scalable and user-friendly web applications. I
            specialize in the{" "}
            <span className="font-bold text-white">MERN stack </span> and have
            strong experience in{" "}
            <span className="font-bold text-white">
              frontend development, REST API design, secure authentication, and
              database management.
            </span>{" "}
            I enjoy solving real-world problems and continuously learning new
            technologies to improve my craft.
          </p>

          {/* Resume Button */}
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-1 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8425ec, 0 0 40px #8245ec",
            }}
          >
            VIEW CV
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 lg:w-3/5 sm:w-2/5 md:ml-4 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={false}
            className="w-full h-full border-4 border-purple-700 rounded-full"
          >
            <img
              src={profileImage}
              alt={"Manav Pal"}
              loading="lazy"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236.0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
