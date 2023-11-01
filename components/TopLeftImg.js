// next image
import Image from 'next/image'

const TopLeftImg = () => {
  return (
    <div className='absolute top-0 left-0 mix-blend-color-dodge z-10 opacity-30 bg-image hidden sm:flex bg-none'>
      <Image
        src='/top-left-img.webp' width={400} height={400} priority alt='' className='w-full h-full'
      />
    </div>
  )
}

export default TopLeftImg
