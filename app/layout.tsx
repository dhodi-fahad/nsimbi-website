import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Shared from "@/components/shared";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nsimbi | Flexible Shopping',
  description: 'Flexible shopping and grocery delivery from your local store or market',
    icons: 'favicon.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (

        <html lang="en">
          <body className={inter.className}>
          <Shared/>
          {children}
          </body>
        </html>
  )
}
