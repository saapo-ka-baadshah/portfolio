import React from 'react'
import TypewriterComponent from 'typewriter-effect'

interface TypewriterProps {
    stringOptions: string[],
    autoStart?: boolean,
    loop?: boolean,
    deleteSpeed?: number
}

export default function Typewriter({
    stringOptions,
    autoStart,
    loop,
    deleteSpeed
}: TypewriterProps) {
  return (
        <TypewriterComponent
            options={{
                strings: stringOptions,
                autoStart: autoStart ?? true,
                loop: loop ?? true,
                deleteSpeed: deleteSpeed ?? 50
            }}
        />
    );
}
