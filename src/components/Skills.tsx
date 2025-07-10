import React from 'react';
import { Code, Database, Smartphone, Cloud, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Angular', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: <Database className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      skills: ['C#', '.NET', 'Python', 'MongoDB', ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      skills: ['React Native', 'Flutter', 'Android', 'Firebase']
    },
    // {
    //   title: 'Cloud & DevOps',
    //   icon: <Cloud className="h-6 w-6" />,
    //   color: 'from-orange-500 to-orange-600',
    //   skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx']
    // },
    {
      title: 'Design',
      icon: <Palette className="h-6 w-6" />,
      color: 'from-pink-500 to-pink-600',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'UI/UX']
    },
    {
      title: 'Tools',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-yellow-500 to-yellow-600',
      skills: ['Git', 'GitHub','VS Code', 'Postman', 'Microsoft Report Builder']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Proficiency Levels
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: 'C# .NET', level: 90 },
              { skill: 'Angular', level: 95 },
              { skill: 'JavaScript/TypeScript', level: 95 },
              { skill: 'React', level: 70 },             
              { skill: 'Python', level: 85 },
              // { skill: 'AWS/Cloud Services', level: 75 },
              { skill: 'Mobile Development/Flutter', level: 70 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">{item.skill}</span>
                  <span className="text-gray-500">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;