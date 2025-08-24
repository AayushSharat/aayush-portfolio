import React from 'react';
import { Github, Linkedin } from 'lucide-react';

// A simple component for the 'X' icon
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);


const About = () => {
  return (
    <div className="max-w-3xl mx-auto md:ml-0 md:mr-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">About</h1>
      <p className="text-lg text-text-secondary leading-relaxed mb-6">
        I’m Aayush, a student with a strong passion for technology, creativity, and personal growth. My interests span across Artificial Intelligence, Data Analytics, and Web Development, where I’m steadily building my skills through projects and hands-on learning. Alongside academics, I enjoy exploring photography, videography, writing, and music, which fuel my creativity and balance my technical pursuits.
      </p>
      <p className="text-lg text-text-secondary leading-relaxed mb-8">
        I’m also deeply interested in productivity, freelancing, and personal branding, with a vision to create impactful digital products and grow in fields like copywriting, social media management, and tech freelancing. Constant learning, discipline, and curiosity drive me to improve daily—whether it’s through coding, reading, working out, or practicing leadership.
      </p>
      <div className="flex items-center space-x-6 text-text-secondary">
        <a href="https://github.com/AayushSharat" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors duration-200">
          <Github size={28} />
        </a>
        <a href="https://x.com/aayush_sharat" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors duration-200">
          <XIcon />
        </a>
        <a href="https://www.linkedin.com/in/aayushsharat/" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition-colors duration-200">
          <Linkedin size={28} />
        </a>
      </div>
    </div>
  );
};

export default About;