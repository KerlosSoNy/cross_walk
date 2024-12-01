"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CodeIcon, CoffeeIcon, HelpingHandIcon, PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./animated_model";

export function StartButton() {
    const images = [
        "/assets/firstProject.png",
        "/assets/secondProject.png",
        "/assets/theirdProject.png",
        "/assets/fourthProject.png",
    ];

    return (
        <div className="py-40  flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-transparent !rounded-full text-white flex justify-center group/modal-btn relative">
                    <span
                        className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-[#BE2F2F] via-pink-500 to-blue-500 "
                        aria-hidden="true"
                    ></span>
                    <span className="group-hover/modal-btn:translate-x-52 pb-0.5 z-10 text-xs sm:text-sm md:text-md font-semibold text-center transition duration-500">
                        START A PROJECT
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <Image src='/assets/logo.png' width={30} height={30} className='w-[35px] pb-0.5 !h-[20px]' alt='logo' />
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Create your Deal now !{" "}
                            {/* <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                Bali
                            </span>{" "} */}
                            {/* now! */}
                            {/* ✈️ */}
                        </h4>
                        <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                                <motion.div
                                    key={"images" + idx}
                                    style={{
                                        rotate: Math.random() * 20 - 10,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    whileTap={{
                                        scale: 1.1,
                                        rotate: 0,
                                        zIndex: 100,
                                    }}
                                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                                >
                                    <Image
                                        src={image}
                                        alt="bali images"
                                        width="500"
                                        height="500"
                                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                            <div className="flex  items-center justify-center">
                                <CodeIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-md">
                                    2 Years Experience
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-md">
                                    12 Branding design
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <PersonStandingIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-md">
                                    31 customer
                                </span>
                            </div>
                            <div className="flex  items-center justify-center">
                                <CoffeeIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Working everyday
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <HelpingHandIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    24/7 Support
                                </span>
                            </div>
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <Link href="mailto:capscodeeg.info@gmail.com" className="bg-mainColor text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-mainColor w-28">
                            Start Now
                        </Link>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
}

const ElevatorIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M10 10l2 -2l2 2" />
            <path d="M10 14l2 2l2 -2" />
        </svg>
    );
};


