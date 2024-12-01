'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MagneticComponent from '../magnitc_component/magnitc'
import { StartButton } from '../ui/startButton'

export default function Navbar() {
    return (
        <div id='topOfPage' className='flex z-[1000] flex-col bg-black bg-opacity-45 gap-2 mx-auto justify-center'>
            <div className='container flex gap-3 md:gap-0 flex-row items-center mx-auto px-8 lg:px-0 justify-between h-[70px]'>
                <Link href='/' className=''>
                    <Image src='/assets/logo.png' width={80} height={50} className='w-[50px] h-[35px] lg:w-[80px] !lg:h-[40px]' alt='logo' />
                </Link>
                <div className='md:hidden hidden lg:flex flex-row items-center justify-between w-[35%]'>
                    <MagneticComponent >
                        <Link href={`/about-us`} className='text-white text-[15px] font-bold'>
                            ABOUT
                        </Link>
                    </MagneticComponent>
                    <MagneticComponent >
                        <Link href={`/projects`} className='text-white text-[15px] font-bold'>
                            PROJECT
                        </Link>
                    </MagneticComponent>
                    <MagneticComponent >
                        <Link href={`/contact-us`} className='text-white text-[15px] font-bold'>
                            CONTACT US
                        </Link>
                    </MagneticComponent>
                    <MagneticComponent >
                        <Link href={`/services`} className='text-white text-[15px] font-bold'>
                            SERVICES
                        </Link>
                    </MagneticComponent>
                </div>
                <StartButton />
            </div>
            <div className='md:flex flex lg:hidden flex-row items-center justify-between ps-4  container'>
                <MagneticComponent >
                    <Link href={`/about-us`} className='text-white text-[12px] font-bold'>
                        ABOUT
                    </Link>
                </MagneticComponent>
                <MagneticComponent >
                    <Link href={`/projects`} className='text-white text-[12px] font-bold'>
                        PROJECT
                    </Link>
                </MagneticComponent>
                <MagneticComponent >
                    <Link href={`/contact-us`} className='text-white text-[12px] font-bold'>
                        CONTACT US
                    </Link>
                </MagneticComponent>
                <MagneticComponent >
                    <Link href={`/services`} className='text-white text-[12px] font-bold'>
                        SERVICES
                    </Link>
                </MagneticComponent>
            </div>
        </div>
    )
}
