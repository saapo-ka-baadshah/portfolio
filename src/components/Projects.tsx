import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Card from './subcomponents/ProjectPapers/Card'
import ProjectInterface from '../interfaces/ProjectInterface'
import __projects from '../data/projects.json'

export default function Projects() {

  let project_infos: ProjectInterface[] = __projects;

  return (
    <div>
      <ParallaxLayer
        id="projects"
        offset={1}
        speed={4}
      >
        <div className="mx-auto max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-7">
        </div>
        <div className="w-full overflow-auto flex">
          {
            project_infos.map((project_info) => {
              return <Card
                className={`
                  w-[40%] bg-slate-500 text-white
                `}
                projectInfo={project_info}
              />
            })
          }
        </div>

      </ParallaxLayer>
    </div>
  );
}
