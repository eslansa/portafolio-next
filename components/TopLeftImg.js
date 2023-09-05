//next image
import Image from 'next/image'

const TopLeftImg = () => {
  return <div className='absolute top-0 left-0 mix-blend-color-dodge z-10 opacity-40 bg-image hidden sm:flex'>
    <Image src="/top-left-img.webp" width={400} height={400} priority={true} alt='' />
  </div>;
}

export default TopLeftImg;
