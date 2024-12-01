"use client";
import { motion } from "motion/react";
import { WorldMap } from "./ui/globalNetwork";
import FormContactUs from "./formContactUs";

export function WorldMapDemo() {
    return (
        <div className=" py-10 dark:bg-black w-[90vw] overflow-x-hidden">
            <div className="absolute z-[-10] flex flex-row justify-center top-[50px] lg:-top-[270px]">
                <WorldMap
                    dots={[
                        {
                            start: {
                                lat: 64.2008,
                                lng: -149.4937,
                            }, // Alaska (Fairbanks)
                            end: {
                                lat: 34.0522,
                                lng: -118.2437,
                            }, // Los Angeles
                        },
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        },
                        {
                            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 }, // London
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        },
                    ]}
                />
            </div>
            <div className=" mx-auto h-screen text-center max-w-screen flex flex-col items-center justify-center -mt-10 lg:mt-0 !z-[10000000]">
                <p className="font-bold px-2 text-xl md:text-4xl dark:text-white text-white">
                    Empower Your{" "}
                    <span className="text-[#948e8e]">
                        {"Vision".split("").map((word, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <p className="text-sm md:text-lg text-white font-bold w-[95%] md:w-[75%] lg:w-[50%]  mx-auto py-4">
                    Have a groundbreaking idea or need help scaling your business? Our team of experts is here to turn your vision into reality. From strategy to execution, we are ready to craft tailored solutions that drive results.
                </p>
                <FormContactUs />
            </div>

        </div>
    );
}
