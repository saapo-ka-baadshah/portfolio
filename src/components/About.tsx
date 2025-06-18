import ContactInfosData from "../information/ContactInfosData";
import ContactInfo from "../abstractions/interfaces/IContactInfo";
import AboutData, { AboutSkillsTiles } from "../information/AboutData";
import IAboutSkillTile from "../abstractions/interfaces/IAboutSkillTile";
import React from "react";
import COLOR_PALETTE from "../statics/color.palette";
import StoryBlock from "./StoryBlock";
import StoryData from "../information/StoryData";
import Tilt from "react-parallax-tilt";

const About: React.FC = () => {

    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
            // style={{ ...parallaxStyle(0.1) }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: COLOR_PALETTE.Primary }}>
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {AboutData.AboutMyProfession}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {AboutData.AboutMyHobbies}
              </p>
              <div className="flex flex-wrap gap-4">
                {ContactInfosData.slice(0, 2).map((contact: ContactInfo) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={contact.label} className="flex items-center gap-2 text-gray-700">
                      <IconComponent size={20} />
                      <span>{contact.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div 
            className="space-y-6" 
            // style={{ ...parallaxStyle(0.05) }}
            >
                {AboutSkillsTiles.map((aboutSkill: IAboutSkillTile) => (
                    <Tilt 
                        className="p-6 rounded-2xl shadow-lg"
                        style={{ backgroundColor: COLOR_PALETTE.Quinery }}
                    >
                        <h3 className="text-xl font-semibold mb-2" style={{ color: COLOR_PALETTE.Primary }}>
                            {aboutSkill.Title}
                        </h3>
                        <p className="text-gray-700">
                            {aboutSkill.Skills}
                        </p>
                    </Tilt>
                ))}
            </div>
          </div>
        </div>

        {/* Story Block */}
        <br/>
        <div>
          <StoryBlock
            {...StoryData}
          />
        </div>
      </section>
    ) ;
};

export default About;