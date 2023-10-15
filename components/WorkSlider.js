// data
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
// Swiper Styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
// framer motion\
import { motion } from 'framer-motion'


// Icons
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiSqlite, SiGit, SiReact, SiVite, SiMui, SiNodemon, SiFramer, SiJavascript, SiCss3 } from 'react-icons/si'

import SwiperCore, { Pagination } from 'swiper'
import Image from 'next/image'
import { FaNodeJs } from 'react-icons/fa'
import Link from 'next/link'
import { fadeIn } from '../variants'

const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/foto4.png',
          icon: [
            'SiReact', 'SiVite', 'SiMui', 'FaNodeJs', 'SiPostgresql'
          ]
        },
        {
          title: 'title',
          path: '/foto2.png',
          icon: [
            'SiVite',
            'SiReact'
          ]
        }
      ]
    },
    {
      images: [
        {
          title: 'title',
          path: '/foto3.png',
          icon: [
            'SiVite',
            'SiReact'
          ]
        },
        {
          title: 'title',
          path: '/foto1.jpg',
          icon: [
            'SiCss3',
            'SiJavascript',
            'SiReact'
          ]
        }
      ]
    },
    {
      images: [
        {
          title: 'title',
          path: '/foto6.png',
          icon: [
            'SiReact',
            'SiNextdotjs',
            'SiTailwindcss',
            'SiFramer'
          ]
        }
      ]
    }
  ]
}

const ICONS = {
  SiReact: <SiReact />,
  SiVite: <SiVite />,
  SiMui: <SiMui />,
  FaNodeJs: <FaNodeJs />,
  SiPostgresql: <SiPostgresql />,
  SiVite: <SiVite />,
  SiCss3: <SiCss3 />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiFramer: <SiFramer />,
  SiNextdotjs: <SiNextdotjs />

}

// Adiciones
SwiperCore.use([Pagination])

const WorkSlider = () => {
  return (
<motion.div
  variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden'
>
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    pagination={{
      clickable: true
    }}
    freeMode
    className=' justify-center'
  >
      {
        workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=' grid  gap-2 cursor-pointer'>
                {slide.images.map((image, imageIndex) => {
                  return (
                    <div key={`${index}-${imageIndex}`} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                      <div className=' flex items-center justify-center relative overflow-hidden group opacity-90 rounded-xl'>
                        {/* image */}
                        <Image src={image.path} width={400} height={300} alt='' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#8e295f] to-[#1e114b] opacity-0 group-hover:opacity-80 transition-all duration-700  ' />
                        {/* tittle */}
                        <div className=' absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {image.icon.map((icon, index) => (
                              <div key={index} className=' space-x-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-4xl flex '>
                                {ICONS[icon]}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
}
    </Swiper>
    </motion.div>
  )
}

export default WorkSlider
