import Image from 'next/image'

export function Footer() {
    // translate-y-12 translate-x-[-25px]
    return (
        <div className='flex flex-row justify-start items-center  translate-y-[-70px]'>
            <Image
                src='/sunchair.png'
                alt='MetaCamp Sun Chair'
                width={300}
                height={300}
                className='w-1/2 h-1/2 sm:translate-x-[-200px]'
            />
        </div>
    )
}