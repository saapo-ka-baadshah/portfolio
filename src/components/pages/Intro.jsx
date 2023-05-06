import React, { useState, useEffect } from 'react'
import image from '../../images/main_pic_round.jpg'
import ProgressiveImg from '../image/ProgressiveImage'
import { useSpring, animated } from '@react-spring/web'
import { Button } from '@chakra-ui/react';
import CV from '../../data/resume.pdf'

export default function Intro() {

    const [isLoaded, setLoaded] = useState(false);

    const springProps_image = useSpring({
        opacity: 1,
        delay: 700,
        reset: isLoaded,
        transform: 'translateX(0px)',
        from: {
            opacity: 0,
            transform: 'translateX(250px)'
        }
    });



    useEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <div>
            <animated.div
                style={{ ...springProps_image }}
            >
                <ProgressiveImg
                    src={image}
                    preview={image}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '50%',
                        width: '50%',
                        borderRadius: '50%'
                    }}
                />
            </animated.div>

            <animated.div>
                <div
                    className="intro_tex_container"
                    style={{
                        position: 'absolute',
                        top: '30vh',
                        left: '10%',
                        width: '60vw'
                    }}
                >
                    <div
                        className="initText"
                        style={{
                            fontSize: '1.7em',
                            position: 'absolute'
                        }}
                    >
                        Hello, My name is
                    </div>
                    <div
                        className="NameText"
                        style={{
                            fontSize: '3em',
                            fontWeight: 'bolder',
                            position: 'absolute',
                            top: '3vh'
                        }}
                    >
                        Amey Ramray Mahadik
                    </div>
                    <div
                        className="PostionText"
                        style={{
                            fontSize: '2.6em',
                            fontWeight: 'bold',
                            position: 'absolute',
                            top: '9vh',
                            color: '#C36B1D'
                        }}
                    >
                        Full-Stack Developer
                    </div>
                    <div
                        className="DescText"
                        style={{
                            fontSize: '1.4em',
                            position: 'absolute',
                            top: '15vh',
                            textAlign: 'left',
                            width: '50%'
                        }}
                    >
                        I design and develop web solutions.
                        I specialize in Machine Learning opeartions, IoT Edge Computing and Resource Provisioning.
                    </div>
                    <div
                        className="IntroButtons"
                        style={{
                            fontSize: '1.4em',
                            position: 'absolute',
                            top: '30vh',
                            textAlign: 'left',
                            width: '50%'
                        }}
                    >
                        <span
                            style={{
                                padding: '1%'
                            }}
                        >
                            <a href={CV} download>
                                <Button
                                    colorScheme='teal'
                                >Download CV</Button>
                            </a>
                        </span>
                        <span
                            style={{
                                padding: '1%'
                            }}
                        >
                            <Button
                                colorScheme='teal'
                                variant='outline'
                            >Contact Me</Button>
                        </span>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}
