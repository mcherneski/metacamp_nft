import Image from 'next/image'

export function Footer() {

    return (
        <div className='absolute bottom-0 flex flex-row justify-start items-center translate-y-12 translate-x-[-25px] sm:translate-y-0 sm:translate-x-0'>
            <Image
                src='/sunchair.png'
                alt='MetaCamp Sun Chair'
                width={300}
                height={300}
            />
            
        </div>
    )
}