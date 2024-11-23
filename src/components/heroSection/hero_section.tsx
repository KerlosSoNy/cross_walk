import React from 'react'
import { GlobeDemo } from '../globalWorldComponent'

export default function Hero_section() {
    return (
        <div className="flex flex-col-reverse pb-10 lg:pb-0 lg:flex-row gap-4 justify-center ps-0  lg:ps-12 items-center">
            <div className='px-2'>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-center lg:text-start">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                        Creative Minds.
                    </h1>
                    <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
                        Limitless Impact.
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
                        Our vision is to harness human ingenuity to craft strategies that inspire, engage, and deliver lasting results.
                    </p>
                </h1>
                <div className="flex flex-col items-center lg:items-start space-y-6 mt-8">
                    <div className="w-full h-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mb-2"></div>

                    <button className="flex focus:outline-none  flex-col items-start px-1 py-0.5 rounded-full text-white font-medium relative">
                        <span
                            className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                            aria-hidden="true"
                        ></span>
                        <span className="relative flex flex-row items-center bg-black px-6 py-2 rounded-full">
                            <span className='mb-0.5'>Get Started</span>
                            <span className="ml-2 text-xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-center lg:text-start">→</span>
                        </span>
                    </button>
                </div>
            </div>
            <GlobeDemo />
        </div>
    )
}
