// next image
import Image from 'next/image'

const Explosion = () => {
  return (
    <div className='bg-image xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      <Image src='/bg-explosion.webp' width={1200} height={700} className='w-full h-full' alt='Background explosion'  loading="lazy" />
    </div>
  )
}

export default Explosion
