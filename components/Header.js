//next 
import Image from 'next/image'
import Link from 'next/link'

//components
import Socials from '../components/Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className=" container mx-auto">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-0 py-8'>
        {/* logo */}
        <Link href={'/'}>
        <h2 className=' h2 flex items-center mt-5'>eslan<span className='text-accent'>.sa</span> </h2>
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
