import Image from 'next/image'

export function Footer() {
    // translate-y-12 translate-x-[-25px]
    return (
        <div className='flex flex-row justify-center items-center'>
            <Image
                src='/sunchair.png'
                alt='MetaCamp Sun Chair'
                width={300}
                height={300}
                className='w-1/2 h-1/2 md:w-2/3 md:h-2/3 translate-y-[-50px]'
            />
        </div>
    )
}