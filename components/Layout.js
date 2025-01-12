// Importa los estilos de Tailwind directamente
import 'tailwindcss/tailwind.css'
import { Sora } from '@next/font/google'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Head from 'next/head'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

// Definir estilos de fuente con Tailwind
const fontStyles = 'font-sora'

const Layout = ({ children }) => {
  return (
    <div>
      <div className={`page bg-site text-white bg-cover bg-no-repeat ${fontStyles} relative`}>
        <Head>
        <meta name='google-site-verification' content='7pY3HSqGDEy_LyhtYnPQmWomQGWQkC740Gmb9Qk6_FI' />
        </Head>
        <Header />
        <Nav />
        {children}
      </div>
    </div>
  )
}

export default Layout
