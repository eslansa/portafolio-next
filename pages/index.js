// next image
import Image from "next/image";
import { motion } from 'framer-motion'


//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";


//variants
import { fadeIn } from '../variants'
import { BsArrowRight } from "react-icons/bs";

const Home = () => {

  return (
    <div className='bg-primary/60 h-full '>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 className='h1'
            variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden'>
            Bienvenido
            <span className='text-accent'> asere!</span>
          </motion.h1>
          <motion.p
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden'>
            Soy Eslan Sanchez Alvarez, tengo 22 años, estoy estudiando Ingienería en Ciencias Informáticas en la UCI, La Habana. Me fascina el desarrollo web, sobre todo el Frontend. <br /> Revisa mis proyectos y visita la pagina.
          </motion.p>
          {/* btn */}
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/*bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">

        </div>
        {/* Particles */}
        <ParticlesContainer />
        {/*avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' transition={{ duration: 1, ease: 'easeInOut' }}
          className=' w-full max-w-[950px] max-h-[850px] absolute -bottom-32 lg:bottom-0 lg:right-[2%] bg-hero'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
