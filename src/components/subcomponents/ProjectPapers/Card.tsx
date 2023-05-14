import React from 'react'
import { Paper } from '@mui/material'
import ProjectInterface from '../../../interfaces/ProjectInterface'

interface local_props {
    className?: string,
    projectInfo: ProjectInterface
}

export default function Card({ className, projectInfo }: local_props) {
    return (
        <div className={`
            p-2
            font-poppins 
        `}>
            <Paper
                elevation={3}
            >
                <div className={`
                    text-center text-xl
                    font-bold
                `}>
                    {projectInfo.name}
                </div>
                <div className="
                    container mx-auto text-center
                ">
                    {projectInfo.description}
                </div>
            </Paper>
        </div>
    )
}
