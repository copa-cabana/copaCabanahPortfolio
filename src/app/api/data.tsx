import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.9",
        description: "Client satisfaction rating based on completed projects",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "50+",
        description: "Successful projects delivered to clients worldwide",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "5+",
        description: "Years of experience in software development",
    },
];

export const Progress = [
    { title: 'Laravel / PHP', Progress: 95 },
    { title: 'Vue.js / Frontend', Progress: 85 },
    { title: 'Mysql Database & Data Management', Progress: 80 },
    { title: 'React/Next.js', Progress: 80 },
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Custom Software Development',
        description: 'I build tailored applications that solve unique business problems, streamline workflows, and enhance user experience. From concept to deployment, I deliver scalable and maintainable software solutions.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Product Design & Technical Consulting',
        description: 'I provide technical guidance and product-focused solutions, helping organizations plan, architect, and implement systems that align with their goals. This includes workflow optimization, technology selection, and strategy execution.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'AI & Automation Integration',
        description: 'I integrate AI tools, automation scripts, and intelligent workflows into existing systems to improve efficiency, reduce manual effort, and deliver innovative experiences that scale with your organization.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Project 1',
        title: 'Project 1 Name',
        slug: 'project-1',
        info: 'Project Type',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Project 2',
        title: 'Project 2 Name',
        slug: 'project-2',
        info: 'Project Type',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Project 3',
        title: 'Project 3 Name',
        slug: 'project-3',
        info: 'Project Type',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Project 4',
        title: 'Project 4 Name',
        slug: 'project-4',
        info: 'Project Type',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Project 5',
        title: 'Project 5 Name',
        slug: 'project-5',
        info: 'Project Type',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Project 6',
        title: 'Project 6 Name',
        slug: 'project-6',
        info: 'Project Type',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Project 7',
        title: 'Project 7 Name',
        slug: 'project-7',
        info: 'Project Type',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Project 8',
        title: 'Project 8 Name',
        slug: 'project-8',
        info: 'Project Type',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/panda-logo.png'),
        alt: 'Project 9',
        title: 'Project 9 Name',
        slug: 'project-9',
        info: 'Project Type',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/roket-squred.png'),
        alt: 'Project 10',
        title: 'Project 10 Name',
        slug: 'project-10',
        info: 'Project Type',
        Class: 'md:mt-0'
    },
    
]