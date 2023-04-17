import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url(/bg.jpg)] bg-center bg-cover">
      <Image
        className='m-auto'
        src="/logo-text.svg"
        alt="Logo"
        width={180}
        height={232}
        priority
      />
    </main>
  )
}
