"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomeingWbinnars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="flex justify-center flex-col text-center py-10">
      <div className="space-y-5">
        <p className="font-bold text-cyan-700 tracking-wide">
          FEATURES WEBINARS
        </p>
        <h2 className=" capitalize text-3xl font-bold md:text-4xl">
          enhance your musical journey
        </h2>
      </div>
      <div className="mt-10 mx-5 ">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
        />
      </div>
      <div>
        <Link
          href={"/"}
          className=" capitalize text-black bg-white px-3 py-2 rounded-md "
        >
          view all webinars
        </Link>
      </div>
    </div>
  );
}

export default UpcomeingWbinnars;
