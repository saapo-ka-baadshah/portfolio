import SocialLink from "../abstractions/interfaces/ISocialLink";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinksData: SocialLink[] = [
    { icon: Github, href: 'https://github.com/saapo-ka-baadshah', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amey-mahadik/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mahadikameyramray@gmail.com', label: 'Email' }
];

export default SocialLinksData;