import Skill from "../abstractions/interfaces/ISkill";
import { Code, Zap, Palette, Users } from "lucide-react";

const SkillsData: Skill[] = [
    { name: 'React', level: 90, icon: Code },
    { name: 'JavaScript', level: 85, icon: Zap },
    { name: 'UI/UX Design', level: 80, icon: Palette },
    { name: 'Team Leadership', level: 75, icon: Users }
];

export default SkillsData;