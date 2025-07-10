import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Full Stack Developer',
      company: 'Unicorn Connected Apps',
      location: 'Jaffna, Sri Lanka',
      period: '2025 - Present',
      description: 'Leading development of scalable web applications using Angular, .NET and SQL Server. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Trainee Full Stack Developer',
      company: 'UnicomTic',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with design and product teams.',
      achievements: [
        'Assisted in integrating SQL Server for efficient backend operations',
        'Designed and implemented RESTful APIs for seamless clientserver communication.',
        'Improved user experience metrics'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Applied Information Technology',
      school: 'SLTC Research University',
      location: 'Colombo, Sri Lanka',
      period: '2023 - 2026',
    },
    {
      degree: 'Diploma in Full Stack Web Development',
      school: 'UnicomTic',
      location: 'Jaffna, Sri Lanka',
      period: '2024 - 2025',
      gpa: 'Certificate'
    },
    {
      degree: 'NVQ Level 4 in ICT Technician',
      school: 'Ocean University of Sri Lanka',
      location: 'Trincomalee, Sri Lanka',
      period: '2023 - 2024',
      gpa: 'Certificate'
    }
  ];

  const certifications = [
    'Azure Fundamentals',
    'Full Stack Professional Developer',
    'SQL Server Certified Developer',
    'Certified Linux System',
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background in software development.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-purple-600 font-semibold mb-2">{edu.school}</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;