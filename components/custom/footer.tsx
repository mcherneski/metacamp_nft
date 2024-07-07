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
                className='w-2/3 h-2/3 md:w-3/4 md:h-3/4 translate-y-[-50px]'
            />
        </div>
    )
}