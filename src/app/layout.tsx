
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Providers from '@/lib/Providers/Providers';
import { Toaster } from 'sonner'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WanderMate',
  description: 'Create unforgettable memories with our travel buddy request service'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

     <Providers>
      <html lang="en" data-theme="light">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <>
              <Toaster />
              {children}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  )
}
