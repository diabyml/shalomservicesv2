import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Product from "@/components/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réparation de Téléphones à Bamako | Shalom Service",
  description:
    "Shalom Service offre des services de réparation de téléphone à Bamako. Confiez-nous vos besoins de réparation, de la réparation d'écran aux solutions techniques avancées. Qualité, rapidité et satisfaction garanties!",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Product /> */}
      <Contact />
    </>
  );
}
