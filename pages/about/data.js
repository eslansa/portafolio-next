import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiSqlite, SiGit } from 'react-icons/si'
import React from 'react';

//data
const aboutData  = () =>  [
    {
      title: 'Habilidades',
      info: [
        {
          skills: [
            {
              icon: <FaHtml5 />,
              name: 'HTML5'
            },
            {
              icon: <FaCss3 />,
              name: 'CSS'
            },
            {
              icon: <FaJs />,
              name: 'JavaScript'
            },
            {
              icon: <FaReact />,
              name: 'React'
            },
            {
              icon: <FaNodeJs />,
              name: 'NodeJS'
            },
            {
              icon: <SiNextdotjs />,
              name: 'Next'
            },
            {
              icon: <SiTailwindcss />,
              name: 'TailwindCSS'
            },
            {
              icon: <SiPostgresql />,
              name: 'PostrgresSQL'
            },
            {
              icon: <SiSqlite />,
              name: 'SQLite'
            },
            {
              icon: <SiGit />,
              name: 'Git'
            },
  
          ],
        },
      ],
    },
    {
      title: 'Experiencia',
      info: [
        {
          title: 'Desarrollador Web - Autodidacta',
          stage: '2023',
        },
        {
          title: 'Desarrollador Frontend - Xetid',
          stage: '2023',
        },
      ],
    },
    {
      title: 'Educación',
      info: [
        {
          title: 'IPU - Pedro Valdivia Paz, Ciego de Avila, Cuba.',
          stage: '2016-2019',
        },
        {
          title: 'Universidad - UCI, La Habana, Cuba.',
          stage: '2020 - Cursando',
        },
      ],
    },
  ];
  

  export default aboutData;