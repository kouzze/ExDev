import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import LogoComp from './components/LogoComp'
import NavComp from './components/NavComp'
import './globals.css'
import FooterComp from './components/FooterComp'

const ssans3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'exdev',
  description: 'Web para curso exdev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang='en'>
      <body className={ssans3.className}>
        <LogoComp />
        <NavComp />
        {children}
        <FooterComp />
      </body>
    </html>
  )
}
