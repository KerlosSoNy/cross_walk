import Hero_section from "@/components/heroSection/hero_section";

export default function Home() {
  return (
    <div className="flex flex-row h-screen container items-center mx-auto justify-evenly">
      <div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
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
      </div>
      <Hero_section />
    </div>
  );
}
