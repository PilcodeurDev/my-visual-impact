/**
 * The external imports
 */
import { Lato, Open_Sans } from 'next/font/google'


/**
 * The internal imports
 */
import '@/styles/styles.sass'

const lato = Lato({
  subsets: ['latin'],
  weight: ["400", "700", "900"],
  variable: "--font-lato"
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: "--font-open-sans"
});

export const metadata = {
  title: 'My Visual Impact',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${openSans.className} ${openSans.variable} ${lato.variable}`}>{children}</body>
    </html>
  )
}
