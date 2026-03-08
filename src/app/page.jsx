
// import GymSection from "@/components/GymSection";
import AboutBrandSection from "@/components/AboutBrandSection";
import BestSellersSection from "@/components/BestSellersSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import NewsletterSection from "@/components/NewsletterSection";
import SocialGallerySection from "@/components/SocialGallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HeroSection from "@/components/shared/HeroSection";

export default function Home() {
  return (
    <>
      {/* <GymSection/> */}
      <HeroSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <FeaturedProductsSection />
      <AboutBrandSection />
      <BestSellersSection />
      <TestimonialsSection />
      <SocialGallerySection />
      <NewsletterSection />
    </>
  );
}
