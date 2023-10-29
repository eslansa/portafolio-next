// next image
import Image from 'next/image'

const Explosion = () => {
  return (
    <div className='bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      <Image src='/bg-explosion.webp' width={700} height={600} className='w-full h-full' alt='' />
    </div>
  )
}

export default Explosion
