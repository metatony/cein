import React from "react";
import SEO from "../../components/SEO";
import Hero from "./hero/Hero";
import Categories from "./categories/Categories";
import Carousel from "./carousel/Carousel";
import CollectionBanner from "./collection banner/CollectionBanner";
import InstaSection from "./instagram section/InstaSection";

function LandingPage() {
  return (
    <main>
      <SEO
        title="Cein Stores | Luxury Clothing, Accessories & Lifestyle Essentials"
        description="Discover Cein Stores' curated collection of luxurious, high-quality clothing, accessories, and lifestyle essentials. Elevate your style with timeless fashion and impeccable craftsmanship."
        name="ceinstores"
        type="website"
      />

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Carousel Section */}
      <Carousel />

      {/* Collection Banner Section */}
      <CollectionBanner />

      {/* Instagram Section */}
      <InstaSection />
    </main>
  );
}

export default LandingPage;
