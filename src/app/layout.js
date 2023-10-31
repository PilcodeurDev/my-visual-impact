/**
 * The external imports
 */
import { Poppins, Montaga } from 'next/font/google'


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

const montaga = Montaga({
  subsets: ['latin'],
  weight: ["400"],
  variable: "--font-montaga"
});

export const metadata = {
  title: 'My Visual Impact',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${montaga.className} ${montaga.variable} ${poppins.variable}`}>
        {children}
        <Navbar />
      </body>
    </html>
  )
}
