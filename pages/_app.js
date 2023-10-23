import '../styles/globals.css'
import Layout from '../components/Layout'
import Transition from '../components/Transition'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Layout>
      <NextSeo
        title="Eslan Sanchez Alvarez"
        description="¡Hola! Soy Eslan Sanchez Alvarez, un apasionado desarrollador web. Explora mi portafolio para conocer mi trabajo y habilidades."
        canonical="https://eslansa.pages.dev"
        openGraph={{
          url: 'https://eslansa.pages.dev',
          title: 'Eslan Sanchez Alvarez',
          description: '¡Hola! Soy Eslan Sanchez Alvarez, un apasionado desarrollador web. Explora mi portafolio para conocer mi trabajo y habilidades.',
          // images: [
          //   {
          //     url: 'https://example.com/image.jpg', // Reemplaza esto con la URL de tu imagen
          //     width: 800,
          //     height: 600,
          //     alt: 'Descripción de la imagen', // Reemplaza esto con la descripción de tu imagen
          //   },
          // ],
        }
      }
        twitter={{
          handle: '@lil_eslan',
          site: '@lil_eslan',
          cardType: 'summary_large_image',
        }}
      />
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
