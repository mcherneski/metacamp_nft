import Image from 'next/image'

export function Footer() {
    // translate-y-12 translate-x-[-25px]
    return (
        <div className='absolute md:block h-30 w-30 bottom-0 flex flex-row justify-start items-center md:justify-end md:translate-y-0 md:translate-x-0'>
            <Image
                src='/sunchair.png'
                alt='MetaCamp Sun Chair'
                width={300}
                height={300}
                // className='w-1/2 h-1/2'
            />
        </div>
    )
}