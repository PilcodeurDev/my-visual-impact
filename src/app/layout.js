/**
 * The external imports
 */
import { Poppins, Roboto } from 'next/font/google'


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

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["500"],
  variable: "--font-open-sans"
});

export const metadata = {
  title: 'My Visual Impact',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${roboto.className} ${roboto.variable} ${poppins.variable}`}>
        {children}
        {/* <Navbar /> */}
      </body>
    </html>
  )
}
