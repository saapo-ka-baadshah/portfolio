import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import HeroStatics from "../statics/hero.statics";
import COLOR_PALETTE from "../statics/color.palette";
import Typewriter from "./subcomponents/Typewriter";
import Modal from "./subcomponents/Modal";
import WorkExperience from "../information/WorkExperience";
import ExperienceTile from "./subcomponents/ExperienceTile";

const Hero: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const backgroundImg = 
    `linear-gradient(135deg, ${COLOR_PALETTE.Primary} 0%, ${COLOR_PALETTE.Secondary} 25%, ${COLOR_PALETTE.Tertiery} 50%, ${COLOR_PALETTE.Secondary} 75%, ${COLOR_PALETTE.Primary} 96%)`;

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br opacity-90"
          style={{
            background: backgroundImg
          }}
        />
        
        {/* Parallax Background Elements */}
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20"
          // style={{ ...parallaxStyle(0.5), backgroundColor: COLOR_PALETTE.Quinery }}
          style={{ backgroundColor: COLOR_PALETTE.Quinery }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-30"
          // style={{ ...parallaxStyle(0.3), backgroundColor: COLOR_PALETTE.Quaternery }}
          style={{ backgroundColor: COLOR_PALETTE.Quaternery }}
        />
        <div 
          className="absolute bottom-32 left-32 w-20 h-20 rounded-full opacity-25"
          // style={{ ...parallaxStyle(0.7), backgroundColor: COLOR_PALETTE.Tertiery }}
          style={{ backgroundColor: COLOR_PALETTE.Tertiery }}
        />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div 
          // style={{ ...parallaxStyle(0.2) }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {HeroStatics.TitleLine1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                {HeroStatics.TitleLine2} <Typewriter stringOptions={HeroStatics.TitleRoles}/>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              {HeroStatics.ProfileDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
              onClick={() => setModalOpen(true)} 
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                View My Work
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                {WorkExperience.map(experience => {
                    if (experience.link != null) {
                      return(
                        <a
                          key={experience.Title}
                          href={experience.link.toString()}
                        >
                         <ExperienceTile 
                          Experience={experience}
                          /> 
                        </a>
                      );
                    }
                    
                    return (
                      <ExperienceTile 
                      Experience={experience}
                      />
                    );
                  }
                )}
              </Modal>

              <a
                href="#contact"
              >
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all">
                    Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-70" />
        </div>
      </section>
    );
};

export default Hero;