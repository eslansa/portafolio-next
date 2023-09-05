import React, { useState } from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiSqlite, SiGit } from 'react-icons/si'

//data
const aboutData = [
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
            name: 'PostgreSQL'
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

import Circles from '../../components/Circles'

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

//counter
import CountUp from 'react-countup';

const About = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className='text-center xl:text-left h-full bg-primary/30 py-28 '>
      <Circles />
      {/* avatar img */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
            className='h2'>Datos <span className=' text-accent'><br /> sobre mi</span> en el <span className=' text-accent'>desarrollo web</span></motion.h2>
          <motion.p
            variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-1 xl:px-0 '>Mi pasión por la web empezó en 2019, hice proyectos  sencillos con HTML, CSS, JavaScript. No tenía muchos vínculos con este mundo y me costaba encontrar informacion, después en 2020 entre a la Universidad y ahí empezo todo!</motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className=' flex flex-1 xl:gap-x-6'>
              {/* exp */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'> Años experiencia </div>
              </div>
              {/* proyectos reales */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2 '>
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                  Proyectos Reales </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                  Proyectos Aprendizaje </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'
          className='flex flex-col  w-full xl:max-w-[48%] h-full'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 '>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className='flex-1 flex flex-col md:flex-col max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className=' font-light mb-2 md:mb-0'> {item.title} </div>
                  <div className='hidden md:flex'></div>
                  <div> {item.stage} </div>
                  <div className='flex gap-y-4 flex-row md:flex-col'>
                    {/* icons */}
                    {item.skills?.map((skills, skillIndex) => {
                      return (
                        <div key={skillIndex} className='space-x-5 xl:flex text-2xl  text-white group flex-row flex '>
                          {skills.icon}
                          <div className='hidden lg:block '>
                            {skills.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
