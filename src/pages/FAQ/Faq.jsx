import React from "react";
import FaqCategories from "./components/FaqCategories";
import FaqAnswers from "./components/FaqAnswers";

function Faq() {
  return (
    <main>
      {/* FAQ Content */}
      <section
        className="px-4 container mx-auto mt-20 mb-32 grid grid-cols-1 lg:grid-cols-3 gap-5 font-light"
        aria-label="Frequently Asked Questions"
      >
        {/* Left Container: FAQ Categories */}
        <FaqCategories />

        {/* Right Container: FAQ Answers */}
        <FaqAnswers />
      </section>
    </main>
  );
}

export default Faq;
