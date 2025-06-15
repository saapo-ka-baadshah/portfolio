import ContactInfo from "../abstractions/interfaces/IContactInfo";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfosData: ContactInfo[] = [
    { icon: Mail, label: 'Email', value: 'mahadikameyramray@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+49 1635150912' },
    { icon: MapPin, label: 'Location', value: 'Heilbronn, Deutschland' }
];

export default ContactInfosData;