import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar"
import { Provider } from "./components/Provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'William Bailey - Data Analyst',
  description: 'Data Analysis & Visualisation with an interest in sport.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white h-full selection:bg-gray-300 dark:selection:bg-gray-600`}>
        <Provider>
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
