import Head from 'next/head'
import { Sora } from '@next/font/google'
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const Layout = ({ children }) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "Nombre de tu sitio web",
    "url": "URL de tu sitio web",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "URL de búsqueda en tu sitio web",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Head>
        <title>Eslan Sanchez Alvarez</title>
        <meta name="Eslan Sanchez Alvarez" content="Portafolio Web de Eslan Sanchez" />
        <meta property="og:Eslan Sanchez" content="eslansa" />
        <meta property="og:Eslan" content="eslansa" />
        <meta property="og:eslansa" content="eslansa" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <Header />
      <TopLeftImg />
      <Nav />
      {children}
    </div>
  )
}

export default Layout
