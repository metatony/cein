import React from "react";
import Navbar from "../../components/Navbar";
import ProductListing from "./ProductListing";
import Footer from "../../components/Footer";

function ShopPage() {


  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Product Listing Section */}
      <ProductListing />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default ShopPage;