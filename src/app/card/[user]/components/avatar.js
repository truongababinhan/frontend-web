import Image from 'next/image'

export default function Avatar() {
  return (
    <div className='flex justify-center items-center rounded-full overflow-hidden w-20 h-20 border-4 border-white'>
      <Image
        className='m-auto'
        src="/logo-text.svg"
        alt="avatar"
        width={80}
        height={80}
        priority
      />
    </div>
  )
}