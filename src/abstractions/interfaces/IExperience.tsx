interface IExperience {
    Date: string;
    Title: string;
    Experience?: string;
    image?: URL | string;
    link?: URL | string;
    tech?: string[];
    isPresentlyWorking?: boolean;
}

export default IExperience;