import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { hero1,customer1, customer2, Narsi, Gagandeep} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#testimonials", label: "Testimonials"},
    { href: "#contact", label: "Contact us"},
];

export const Hero = [
    {
        thumbnail: 'hero',
        name: hero1,
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free Portfolios",
        subtext: "Enjoy our prebuild portfolios or customize you own"
    },
    {
        imgURL: shieldTick,
        label: "Secure",
        subtext: "PS-Studio prioritizes security,ensuring the protection of user data and privacy"
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: Narsi,
        customerName: 'Narsi Bhati',
        rating: 4.8,
        feedback: "I love the clean and modern design options PS-Studio offers. The portfolio I created using this platform helped me land my dream job. It's worth every penny!"
    },
    {
        imgURL:customer2,
        customerName: 'Mansi Gehlot',
        rating: 4.2,
        feedback: "PS-Studio helped me create a stunning portfolio without any hassle. It's a valuable tool for designers and artists. The only improvement I'd suggest is adding more templates."
    },
    {
        imgURL: customer1,
        customerName: 'Ankit Bisht',
        rating: 4.5,
        feedback: "As a photographer, I rely on my portfolio to impress clients. PS-Studio made it easy to create an impressive portfolio. I've received excellent feedback on the layout and presentation."
    },
];


export const PsLinks = [
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "narsibhati31102@.com", link: "mailto:narsibhati31102@gmail.com.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const Team = [
    {
       name: 'Narsi Bhati',
       post:'Backend Developer: ',
       img: Narsi,
       about: 'Creates and maintains the server-side logic, database, and APIs of PS-Studio, ensuring performance, and scalability using technologies like React Route, Node JS, AppWrite.',
    },
    {
        name: 'Gagandeep Sodhi',
        post:'Frontend Developer: ',
        img: Gagandeep,
        about: 'Designs the user interface and experience, coding interactive and visually appealing web interfaces using technologies like React JS,NextUI ,Tailwind CSS.',
    },
];