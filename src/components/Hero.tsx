import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Instagram, Facebook } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-5">
              <div className="rounded-full shadow-lg">
                <div className="w-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  <img src="/public/photo.png" alt="Photo" className='w-40 h-40 object-cover rounded-full'/>
                </div>
              </div>
            </div>
          </div>

          <h2 className="md:text-7xl font-bold text-gray-900 mb-6">
            <span className="block text-5xl">Mohamed Arshath</span>
            <span className="block text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Software Developer
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer building elegant, high-performance, and user-focused digital
            experiences using modern technologies and clean, maintainable code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              View My Work
            </button>
            <a href="/public/cv.pdf" download
              className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-200" >
              <Download className="h-5 w-5" />
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/Arshad-85" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-arshad-063b7a2a1/" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:mohammedarshath339@gmail.com" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/mr_arshad_ars/" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/mr_arshad_ars/" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;