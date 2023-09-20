// Icons
import { RxArrowTopRight, RxCode, RxCrop, RxDesktop, RxFontRoman, RxLayers, RxPencil2, RxReader, RxRocket } from 'react-icons/rx'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { FreeMode, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Link from 'next/link'

// Adiciones
SwiperCore.use([FreeMode, Pagination])

// data
const serviceData = [
  {
    icon: <RxCode />,
    title: 'Desarrollador',
    description: 'Este es mi favorito, me encanta desarrollar proyectos, cuéntame tu idea!'
  },
  {
    icon: <RxPencil2 />,
    title: 'Diseño',
    description: 'Lo importante que es tener un diseño en tu página web, el cual sea de agrado al usuario.'
  },
  {
    icon: <RxLayers />,
    title: 'Gestion BD',
    description: 'Gestiona todos los datos de tu aplicación con eficiencia y rápidez. Qué esperas!'
  },
  {
    icon: <RxReader />,
    title: 'Redacción Publicitaria',
    description: 'Tienes el producto, convence al cliente de que tu eres el mejor lugar.'
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Mejora el posicionamiento de tu página, hazla rápida, responsiva y eficiente, ponla #1.'
  }
]

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 }
      }}
      freeMode
      pagination={{
        clickable: true
      }}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=' bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'> {item.icon} </div>
              {/* title & desc */}
              <div className=' mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrows */}
              <div className='text-3xl'>
                <Link href='mailto:eslansanchez12345@gmail.com'><RxArrowTopRight className=' group-hover:rotate-45 group-hover:text-accent transition-all duration-300' /></Link>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ServiceSlider
