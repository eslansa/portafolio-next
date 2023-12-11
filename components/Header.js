// next
import Link from 'next/link'

// components
import Socials from '../components/Socials'
import Head from 'next/head'

const Header = () => {
  return (
    <div className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <script type='text/javascript' id='pagemapIdscript' defer src='https://bot.linkbot.com/bot.js#19613-7fb33?property-id=19613-7fb33' />
      <div className=' container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-0 py-5'>
          {/* logo */}
          <Link href='/'>
            <h2 className=' h2 flex items-center'>eslan<span className='text-accent'>.sa</span> </h2>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Header
