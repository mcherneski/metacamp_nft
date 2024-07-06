import Image from 'next/image'

export function Header () {
    return (
    <div className='flex flex-row justify-center items-center p-4'>
        <Image
            src='/MetaCamp_Logo_Red.png'
            alt='MetaCamp Logo'
            width={1000}
            height={800}
          />
    </div>
    )
}