// links
import Link from 'next/link'
import { AiOutlineProfile } from 'react-icons/ai'

// icons
import {
  RiTwitterLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiTelegramLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-xl'>
      <Link href='https://instagram.com/eslan.sa?igshid=ZGUzMzM3NWJiOQ==' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href='https://www.facebook.com/profile.php?id=100011370603754&mibextid=ZbWKwL' className='hover:text-accent transition-all duration-300'>
        <RiFacebookBoxLine />
      </Link>
      <Link href='https://twitter.com/lil_eslan' className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
      <Link href='https://t.me/lil_eslan' className='hover:text-accent transition-all duration-300'>
        <RiTelegramLine />
      </Link>
      <Link href='https://github.com/eslansa' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <a href='https://drive.google.com/uc?export=download&id=17yR0DhSXAiXa8W8hnBZzNeEigXTwfxUP' className='hover:text-accent transition-all duration-300'>
  <AiOutlineProfile />
</a>

    </div>
  )
}

export default Socials
