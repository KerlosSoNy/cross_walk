'use client'
import React from 'react'
import toast from 'react-hot-toast';

export default function FormContactUs() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "3031b36d-e41f-46d3-be65-1b7f400fe2ad");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            toast.success("Thank you for your message!");
        }
        form.reset();
    }
    return (
        <div className="flex flex-wrap  justify-between items-center h-auto p-5 my-5">
            <div className="min-w-[370px] md:min-w-[600px]">
                <form className="space-y-4 min-w-[370px] md:min-w-[600px]" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" required id="fullName" name="fullName" placeholder='Full Name' className="mt-1 p-4 w-full bg-white/25 outline-none rounded-md text-white" />
                    </div>
                    <div>
                        <input type="email" required id="email" name="email" placeholder='Email' className="mt-1 p-4 w-full rounded-md text-white bg-white/25 outline-none" />
                    </div>
                    <div>
                        <textarea id="message" required name="message" placeholder='Message' className="mt-1 p-4 w-full outline-none rounded-md text-white bg-white/25 "></textarea>
                    </div>
                    <div className="flex mx-auto flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-10 w-full">
                        <button type="submit" className="w-40 h-10 rounded-xl shadow hover:shadow-white border dark:border-white border-transparent text-[#BE2F2F] font-bold hover:transform hover:scale-110 duration-500 cursor-pointer text-sm mx-auto">
                            Join now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
