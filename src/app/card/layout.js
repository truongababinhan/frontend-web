import Link from 'next/link'

export default function CardLayout({ children }) {
  return (
    <div>
      <Link href="/">Home</Link>
      {children}
    </div>
  )
}