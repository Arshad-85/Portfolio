import React from 'react';
import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer who loves creating innovative solutions and learning new technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className='pb-6'>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-64 h-auto rounded-2xl mx-auto md:mx-0 flex ">
                <img src="/public/photos.png" alt="Me" className='rounded-2xl'/>
              </div>
            </div>          
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Jaffna, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">2+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Hi, I'm Mohamed Arshath
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I am a full-stack developer with 2 years of hands-on experience in designing and developing responsive, 
                scalable web applications. My core expertise lies in backend development using C# .NET, coupled with modern 
                frontend frameworks like Angular and React to deliver robust, user-centric solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
               I take pride in writing clean, maintainable code and building systems that align with both technical and 
               business goals. Passionate about continuous learning and growth, I thrive in collaborative, fast-paced 
               environments that value innovation, performance, and quality.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-900">Problem Solver</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Love tackling complex challenges and finding elegant solutions.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-5 w-5 text-purple-500" />
                  <h4 className="font-semibold text-gray-900">Team Player</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Enjoy collaborating with others and sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;