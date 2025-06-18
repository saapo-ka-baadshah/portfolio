import IAboutSkillTile from "../abstractions/interfaces/IAboutSkillTile";

const AboutData = {
    AboutMyProfession: 
    `I'm a passionate full-stack developer / architect with 5+ years of experience creating 
    digital solutions that make a difference. I specialize in Node.js, C#, Python 
    and clean architecture with microservices.`,
    
    AboutMyHobbies: 
    `When I'm not coding, you'll find me exploring new technologies, contributing, ideating 
    or singing, playing flute, bouldering.`
};

export const AboutSkillsTiles: IAboutSkillTile[] = [
    {
        Title: "Backend Development",
        Skills: "Building scalable softwares, APIs, services and server-side applications with .NET, Node.js, Python, and cloud services"
    },
    {
        Title: "Design Ideology",
        Skills: "Clean Architecture, Domain Driven Design principals, CQRS, Repository pattern"
    },
    {
        Title: "Frontend Development",
        Skills: "Creating responsive, interactive user interfaces with React, Vue, and modern CSS frameworks"
    },
];

export default AboutData;