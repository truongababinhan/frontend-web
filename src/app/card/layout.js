import Link from 'next/link'
import Image from 'next/image'

export default function CardLayout({ children }) {
  return (
    <div>
      <div className='flex justify-start items-center p-5'>
        <Link href="/">
          <Image
            className='m-auto'
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={232}
            priority
          />
        </Link>
      </div>
      {children}
    </div>
  )
}