import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ClerkProvider,} from '@clerk/nextjs'
import "./globals.css"
import { Toaster } from "sonner"



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "tezy.in - Instagram Automation Made Easy",
  description: "Automate your Instagram comments and DMs with Tezy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
         <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* <Header /> */}
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}

          <Toaster />
          </div>
      </body>
    </html>
    </ClerkProvider>
   
  )
}

