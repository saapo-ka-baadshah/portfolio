import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

export default function StyledLine() {
    return (
        <ParallaxLayer
            offset={1}
        >
            <div className='h-screen w-screen'>

                <div className="h-[200%] bg-gray-200 w-[2px] ml-[40%]"></div>

            </div>

        </ParallaxLayer>
    )
}
