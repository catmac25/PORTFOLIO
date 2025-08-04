import reactLogo from "../assets/react.svg";
import tailwindLogo from '../assets/tailwindcss.png';
import mongo from '../assets/mongologo.jpg';
import jscript from '../assets/jslogo.webp';
import node from '../assets/nodelogo.png';
import spotlight from "../assets/spotlight1.png"
import logo1 from "../assets/project-logo1.png"
import logo2 from "../assets/project-logo2.png"
export const myProjects = [
    {
      title: 'NewHealth - Online Appointment Platform',
      desc: 'NewHealth is a revolutionary Software-as-a-Service platform that transforms the way healthcare functions for individuals. Forget standing in lines and going to dispensary, NewHealth is here with all the information.',
      subdesc:
        'Built as a unique Software-as-a-Service app with Node.js, Tailwind CSS, JavaScript, ReactJS and MongoDB, NewHealth is designed for optimal performance and scalability.',
      href: 'https://new-health-doc-app-frontend.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: logo1,
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: spotlight,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactLogo,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindLogo,
        },
        {
          id: 3,
          name: 'JavaScript',
          path: jscript,
        },
        {
          id: 4,
          name: 'Node JS',
          path: node,
        },
        {
          id: 5,
          name: 'MongoDB',
          path: mongo,
        },
      ],
    },
    {
      title: "PicStack - Online Picture Memories Storage",
      desc: "PicStack is a web application that allows users to upload, store, and share their pictures online. It provides a user-friendly interface for managing photo collections.",
      subdesc: "Developed a full-stack web application with OAuth-based authentication, image upload and URL generation via Cloudinary, customer-specific data storage, and integrated Stripe payment processing.",
      href: 'https://github.com/catmac25/picStack',
      texture: '/textures/project/project1.mp4',
      logo: logo1,
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: spotlight,
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: reactLogo,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: tailwindLogo,
        },
        {
          id: 3,
          name: 'JavaScript',
          path: jscript,
        },
        {
          id: 4,
          name: 'Node JS',
          path: node,
          // actualfrontend
        },
        {
          id: 5,
          name: 'MongoDB',
          path: mongo,
        },
      ],
    }
    ]