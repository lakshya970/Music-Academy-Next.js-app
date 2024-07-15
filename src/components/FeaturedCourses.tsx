"use client";
import Link from "next/link";
import couresData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourse = couresData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-20 px-3 bg-gray-900 space-y-12">
      <div>
        <div className="text-center space-y-3">
          <h2 className="font-bold text-cyan-700 tracking-wider md:text-xl ">
            Featured Courses
          </h2>
          <p className="text-2xl font-extrabold md:text-3xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow space-y-3 ">
                  <h1 className="text-xl">{course.title}</h1>
                  <p className=" text-sm text-neutral-400">
                    {course.description}
                  </p>
                  <Link
                    href={"/"}
                    className="bg-white/70 rounded-md px-3 py-1 text-black"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link
          href={"/"}
          className="bg-white text-black px-2 py-2 rounded-md border border-gray-200"
        >
          view all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
