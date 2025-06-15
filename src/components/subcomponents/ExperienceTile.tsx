import React from 'react';
import IExperience from '../../abstractions/interfaces/IExperience';
import PLACEHOLDER from '../../statics/placeholders';
import { ExternalLink, ArrowRight, CircleCheckBig} from 'lucide-react';
import COLOR_PALETTE from '../../statics/color.palette';

interface ExperienceTileProp {
    Experience: IExperience
}

export default function ExperienceTile({
    Experience
}: ExperienceTileProp) {
  return (
    <div
        key={Experience.Title}
        className="bg-white max-w-xs
            max-h-max
            rounded-2xl shadow-lg 
            overflow-hidden 
            hover:shadow-2xl transition-all 
            transform hover:-translate-y-2 group"
    >
        {Experience.isPresentlyWorking ? (
            <button
                className="absolute bottom-5 right-5
                            text-green-600 hover:text-gray-700"
            >
                <CircleCheckBig size={45}/> {/* Close button */}
            </button>
        ) : (
            <></>
        )}
        <div className="relative overflow-hidden">
        <img
            src={Experience.image?.toString() ?? PLACEHOLDER.CompanyImage}
            alt={Experience.Title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            {Experience.link != null ? (
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
            {Experience.Title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
            {Experience.Date}
        </p>
        {Experience.tech != null ? (
            <div className="flex flex-wrap gap-2 mb-4">
                {Experience.tech.map((tech: string) => (
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
        ) : (
            <></>
        )}
        </div>
    </div>
  )
}
