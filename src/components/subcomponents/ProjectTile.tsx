import React from 'react';
import IProject from '../../abstractions/interfaces/IProject';
import { ExternalLink, ArrowRight } from 'lucide-react';
import COLOR_PALETTE from '../../statics/color.palette';

interface ProjectTileProp {
    Project: IProject
}

export default function ProjectTile(props: ProjectTileProp) {

    const project: IProject = props.Project;

  return (
    <div
        key={project.title}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
        // style={{ ...parallaxStyle(0.03 * (index + 1)) }}
    >
        <div className="relative overflow-hidden">
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            {project.link != null ? (
            <div className="absolute bottom-4 right-4">
                <ExternalLink size={20} className="text-white" />
            </div>
            ) : (
            <></>
            )}
        </div>
        </div>
        <div className="p-6">
        <h3 className="text-xl font-bold mb-3" style={{ color: COLOR_PALETTE.Primary }}>
            {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
            {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string) => (
            <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full"
                style={{ 
                backgroundColor: COLOR_PALETTE.Quaternery,
                color: COLOR_PALETTE.Primary
                }}
            >
                {tech}
            </span>
            ))}
        </div>
        {project.link != null ? (
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group">
            View Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            ):
            (<></>)
        }
        </div>
    </div>
  )
}
