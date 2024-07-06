import Image from 'next/image'

export function Footer() {

    return (
        <div className='absolute hidden sm:block h-30 w-30 bottom-0 flex flex-row justify-center items-center translate-y-12 translate-x-[-25px] md:justify-end md:translate-y-0 md:translate-x-0'>
            <Image
                src='/sunchair.png'
                alt='MetaCamp Sun Chair'
                width={300}
                height={300}
            />
        </div>
    )
}