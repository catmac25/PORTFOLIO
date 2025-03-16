import reactLogo from "../assets/react.svg";
import tailwindLogo from '../assets/tailwindcss.png';
import typescriptLogo from '../assets/typescript.png';
import framerLogo from '../assets/framer.png';
import spotlight from "../assets/spotlight1.png"
import logo1 from "../assets/project-logo1.png"
import logo2 from "../assets/project-logo2.png"
export const myProjects = [
    {
      title: 'Podcastr - AI Podcast Platform',
      desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
      subdesc:
        'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
      href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
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
          name: 'TypeScript',
          path: typescriptLogo,
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: framerLogo,
        },
      ],
    },
    {
      title: 'LiveDoc - Real-Time Google Docs Clone',
      desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
      subdesc:
        'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
      texture: '/textures/project/project2.mp4',
      logo: logo2,
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
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
          name: 'TypeScript',
          path: typescriptLogo,
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: framerLogo,
        },
      ],
    }]