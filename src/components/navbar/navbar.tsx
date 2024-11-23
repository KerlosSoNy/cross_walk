import Image from 'next/image'
import React from 'react'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function Navbar() {
    return (
        <div className='container mx-auto flex flex-row items-center justify-between text-white'>
            <div className='relative -ms-20 w-[220px] h-[100px]'>
                <Image
                    src='/CW.png'
                    alt='logo'
                    layout='fill'
                    loading='lazy'
                />
            </div>
            <div className={`${roboto.className} flex flex-row gap-20 font-bold text-lg`}>
                <h1>Services</h1>
                <h1>About Us</h1>
                <h1>Contact Us</h1>
            </div>
        </div>
    )
}
