// Importa los estilos de Tailwind directamente
import 'tailwindcss/tailwind.css'
import { Sora } from '@next/font/google'
import Nav from '../components/Nav'
import Header from '../components/Header'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

// Definir estilos de fuente con Tailwind
const fontStyles = 'font-sora'

const Layout = ({ children }) => {
  return (
    <html lang='es'>
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${fontStyles} relative`}>
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default Layout
