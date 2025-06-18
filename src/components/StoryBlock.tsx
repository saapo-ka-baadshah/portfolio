import React from 'react'
import Tilt from 'react-parallax-tilt';

export interface StoryBlockProps {
    Title: string;
    Content: string;
    Direction?: "LEFT" | "RIGHT";
    Image?: URL;
}

export default function StoryBlock({Title, Content, Direction, Image}: StoryBlockProps) {
    const layoutDirection : "LEFT" | "RIGHT" = Direction ?? "LEFT";

    const StorySide = () => {
        return (
            <div>

                <pre 
                className="bg-Secondary text-white font-mono p-6 rounded-2xl shadow-lg text-lg leading-relaxed whitespace-pre-wrap"
                >
                    <h2 
                    className="text-white text-4xl font-bold mb-6" 
                    >
                        {Title}
                    </h2>

                    {Content}
                </pre>
            </div>
        );
    }

    const ImageSide = () => {
        if (Image == null) {
            return (
                <div>
                    <div
                    className="space-y-6"
                    ></div>
                </div>
            ) ;
        }

        return (
            <div>
                <div
                className="space-y-6"
                >
                    <Tilt>
                        <img 
                        src={Image?.toString()} 
                        alt='avatar'
                        style={{borderRadius: "50%"}}
                        />
                    </Tilt>
                </div>
            </div>
        );
    }

  return (
    <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            {
                layoutDirection === "LEFT" ?
                ImageSide () :
                StorySide ()
            }
            {
                StorySide()
            }
        </div>
    </div>
  )
}
