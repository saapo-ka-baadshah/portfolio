import React from 'react';
import ProjectsData from '../information/ProjectsData';
import IProject from '../abstractions/interfaces/IProject';
import ProjectTile from './subcomponents/ProjectTile';
import COLOR_PALETTE from '../statics/color.palette';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div 
          className="text-center mb-16" 
          // style={{ ...parallaxStyle(0.1) }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: COLOR_PALETTE.Primary }}>
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Some of my recent work that showcases my technical skills and creative approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProjectsData.map((project: IProject, index: number) => {
              if (project.link != null) {
                return (
                  <a href={project.link.toString()}>
                    <ProjectTile Project={project}/>
                  </a>
                );
              }
              return <ProjectTile Project={project}/>;
            }
            )}
          </div>
        </div>
      </section>
  )
}
