import './globals.css'
import { Roboto } from 'next/font/google'
import ProductProvider from "./hooks/useCart";
import styled from "./page.module.css"

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const metadata = {
  title: 'Lavrovs Delivery',
  description: 'Deliveri application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ProductProvider>
          {children}
        </ProductProvider>
        <footer>
          <p className={styled.footer_text}>
            Lavrovs © 2023. All rights are reserved
          </p>
        </footer>
      </body>
    </html>
  )
}
