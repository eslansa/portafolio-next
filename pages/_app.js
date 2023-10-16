import '../styles/globals.css'

// components
import Layout from '../components/Layout'
import Transition from '../components/Transition'

// router
import { useRouter } from 'next/router'

// framer motion
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Eslan Sanchez Alvarez",
    "url": "https://eslansa.pages.dev",
    "sameAs": [
      "https://github.com/eslansa",
      "https://twitter.com/lil_eslan",
      // Otras redes sociales o plataformas
    ],
    "jobTitle": "Desarrollador Web",
    "worksFor": {
      "@type": "Organization",
      "name": "Eslan Sanchez"
    }
  };
  
  return (
    <Layout>
            <Head>
        <title>Eslan Sanchez Alvarez</title>
        <meta name="description" content="¡Hola! Soy Eslan Sanchez Alvarez, un apasionado desarrollador web. Explora mi portafolio para conocer mi trabajo y habilidades." />
        {/* Etiquetas Open Graph para compartir en redes sociales */}
        <meta property="og:title" content="Eslan Sanchez Alvarez" />
        <meta property="og:description" content="¡Hola! Soy Eslan Sanchez Alvarez, un apasionado desarrollador web. Explora mi portafolio para conocer mi trabajo y habilidades." />
        <meta property="og:url" content="https://eslansa.pages.dev" />
        <meta property="og:image" content="" />
        {/* JSON-LD para datos estructurados */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
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
