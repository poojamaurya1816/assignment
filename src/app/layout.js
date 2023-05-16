import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './page.module.css';



import {Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
