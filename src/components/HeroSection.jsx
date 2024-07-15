import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center  relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-32 md:mt-20 text-5xl font-bold md:text-7xl text-transparent bg-gradient-to-t from-slate-200 to-slate-700 bg-clip-text ">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          obcaecati optio blanditiis voluptas facere eos unde dolore reiciendis
          quisquam quae.
        </p>
      </div>
      <div className="mt-5">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <Link href={"/courses"}>Explore More</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
