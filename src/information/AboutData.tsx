import IAboutSkillTile from "../abstractions/interfaces/IAboutSkillTile";

const AboutData = {
    AboutMyProfession: "I'm a passionate full-stack developer with 5+ years of experience creating" 
                + "digital solutions that make a difference. I specialize in React, Node.js, "
                + "and modern web technologies.",
    
    AboutMyHobbies: "When I'm not coding, you'll find me exploring new technologies, contributing" 
                + "to open-source projects, or sharing knowledge with the developer community."
};

export const AboutSkillsTiles: IAboutSkillTile[] = [
    {
        Title: "Frontend Development",
        Skills: "Creating responsive, interactive user interfaces with React, Vue, and modern CSS frameworks"
    },
    {
        Title: "Backend Development",
        Skills: "Building scalable APIs and server-side applications with Node.js, Python, and cloud services"
    }
];

export default AboutData;