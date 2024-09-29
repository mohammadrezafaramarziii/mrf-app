// import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'
import morabbaFont from '@/constants/localFonts'
import Providers from '../Providers'
import { Toaster } from 'react-hot-toast'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'محمدرضا فرامرزی | برنامه نویس فرانت اند',
  description: 'محمدرضا فرامرزی | برنامه نویس و توسعه دهنده فرانت اند و وب',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body className={`${morabbaFont.variable} bg-background font-sans`}>
        <Providers>
          <Toaster position="top-right"/>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
