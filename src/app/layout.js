/**
 * The external imports
 */
import { Poppins, Montserrat } from 'next/font/google'


/**
 * The internal imports
 */
import '@/styles/styles.sass'
import Navbar from '@/components/navbar/navbar'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "700", "900"],
  variable: "--font-poppins"
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["400", "600"],
  variable: "--font-montserrat"
});

export const metadata = {
  title: 'My Visual Impact',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} ${montserrat.variable} ${poppins.variable}`}>
        {children}
        <Navbar />
      </body>
    </html>
  )
}
