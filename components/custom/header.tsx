import Image from 'next/image'

export function Header () {
    return (
    <div className='flex flex-row justify-center items-center py-4'>
        <Image
            src='/MetaCamp_Logo_Red.png'
            alt='MetaCamp Logo'
            width={800}
            height={600}
            className='w-3/4 h-3/4 md:w-1/2 md:h-1/2'
          />
    </div>
    )
}