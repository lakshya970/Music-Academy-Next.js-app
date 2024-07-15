import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import UpcomeingWbinnars from "@/components/UpcomeingWbinnars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/20 antialiased bg-grid-white/[0.02]">
      <div>
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <Testimonials />
        <UpcomeingWbinnars />
        <Instructors />
        <Footer />
      </div>
    </main>
  );
}
