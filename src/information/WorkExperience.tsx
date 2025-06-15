import IExperience from "../abstractions/interfaces/IExperience";

const WorkExperience: IExperience[] = [
    {
        Date: "June 2023 - Present",
        Title: "Gebhardt Fördertechnik, Sinsheim, DE",
        image: new URL("https://gebhardt-group.com/assets/images/8/Gebhardt%20Logo-bc3a569c.svg"),
        link: new URL("https://gebhardt-group.com/de/"),
        isPresentlyWorking: true
    },
    {
        Date: "June 2022 - May 2023",
        Title: "BOSCH, Stuttgart, DE",
        image: new URL("https://upload.wikimedia.org/wikipedia/de/thumb/3/31/Bosch-logotype.svg/1024px-Bosch-logotype.svg.png?20190123165734"),
        link: new URL("https://www.bosch.de/")
    },
    {
        Date: "March 2021 - June 2022",
        Title: "FSTI, Heilbronn, DE",
        image: new URL("https://ferdinand-steinbeis-institut.de/wp-content/uploads/2020/11/FSTI_LOGO_black_RGB-1-1.png"),
        link: new URL("https://ferdinand-steinbeis-institut.de/")
    },
    {
        Date: "June 2018 - Nov 2019",
        Title: "Embedded Engineer @ Various Companies, Mumbai, IN",
    }
];

export default WorkExperience;