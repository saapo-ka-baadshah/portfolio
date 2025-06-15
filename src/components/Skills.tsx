import React from 'react'
import SkillsData from '../information/SkillsData';
import ISkill from '../abstractions/interfaces/ISkill';
import COLOR_PALETTE from '../statics/color.palette';

export default function Skill() {
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: COLOR_PALETTE.BackgroundPrimary }}>
        <div className="max-w-6xl mx-auto px-4">
          <div 
          className="text-center mb-16" 
          // style={{ ...parallaxStyle(0.1) }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: COLOR_PALETTE.Primary }}>
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SkillsData.map((skill: ISkill, index: number) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                  // style={{ ...parallaxStyle(0.05 * (index + 1)) }}
                >
                  <div className="flex items-center mb-4">
                    <div 
                      className="p-3 rounded-full mr-4"
                      style={{ backgroundColor: COLOR_PALETTE.Tertiery }}
                    >
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ color: COLOR_PALETTE.Primary }}>
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: COLOR_PALETTE.Secondary 
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}
