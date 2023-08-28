// next image
import Image from "next/image";

//next link
import Link from 'next/link';

//icons
import { HiBriefcase} from 'react-icons/hi2';


const ProjectsBtn = () => {
  return( 
    <button type="submit"  className='mx-auto xl:mx-0 animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] btn rounded-full border border-white/50  px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
    <Link 
    href="mailto:eslansanchez12345@gmail.com"
    className='relative w-[185px] h-[185px] flex justify-center items-center'
    >  
      <HiBriefcase  className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300  hover:border-accent'/>
    </Link>
    </button>
  )
};

export default ProjectsBtn;
