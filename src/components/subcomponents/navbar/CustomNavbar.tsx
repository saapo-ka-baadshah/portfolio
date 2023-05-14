import React from 'react'
import {
    Navbar,
    MobileNav,
    Typography,
    Button
} from '@material-tailwind/react';

export default function CustomNavbar() {
    return (
        <Navbar className={
            ` 
            font-poppins mx-auto max-w-screen-2xl py-2 px-4 lg:px-8 lg:py-4 z-100
            `
        }>

            <a href="#introduction">
                <Button>
                    <Typography
                        as="intro"
                        href="#introduction"
                        className="mr-4 py-1.5 font-medium"
                    >
                        Introduction
                    </Typography>
                </Button>
            </a>
            <a href="#projects">
                <Button>
                    <Typography
                        as="projects"
                        href="#projects"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Projects
                    </Typography>
                </Button>
            </a>
            <a href="#education">
                <Button>
                    <Typography
                        as="education"
                        href="#education"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Education
                    </Typography>
                </Button>
            </a>
            <a href="#experience">
                <Button>
                    <Typography
                        as="experience"
                        href="#experience"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Experience
                    </Typography>
                </Button>
            </a>
            <a href="#contact">
                <Button>
                    <Typography
                        as="contact"
                        href="#contact"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Contact
                    </Typography>
                </Button>
            </a>
        </Navbar>
    )
}
