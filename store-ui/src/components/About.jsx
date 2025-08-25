import React from "react";
import PageTitle from "./PageTitle";

export default function About() {
  const h3Style = "text-lg font-semibold text-primary dark:text-light mb-2";
  const pStyle = "text-gray-600 dark:text-lighter";

  return (
    <div className="max-w-[1152px] min-h-[852px] mx-auto px-6 py-8 font-primary">
      <PageTitle title="About Wajid Flowers" />

      {/* Intro */}
      <p className="leading-6 mb-8 text-gray-600 dark:text-lighter">
        Welcome to{" "}
        <span className="text-lg font-semibold text-primary dark:text-light">
          Wajid Flowers
        </span>
        —your local shop for fresh blooms, handcrafted bouquets, and thoughtful
        floral gifts. From everyday smiles to life’s big moments, we design
        arrangements that feel personal, elegant, and memorable.
      </p>

      {/* Why Choose Us */}
      <h2 className="text-2xl leading-[32px] font-bold text-primary dark:text-light mb-6">
        Why Choose Us?
      </h2>

      <div className="space-y-8">
        {/* Fresh, Seasonal Blooms */}
        <div>
          <h3 className={h3Style}>Fresh, Seasonal Blooms</h3>
          <p className={pStyle}>
            We source fresh flowers with an eye for color, fragrance, and
            longevity— so your arrangements look stunning and last longer.
          </p>
        </div>

        {/* Handcrafted Bouquets */}
        <div>
          <h3 className={h3Style}>Handcrafted Bouquets</h3>
          <p className={pStyle}>
            Every bouquet is arranged by hand with care and balance—perfect for
            birthdays, anniversaries, weddings, or “just because.”
          </p>
        </div>

        {/* Custom Orders */}
        <div>
          <h3 className={h3Style}>Custom Orders</h3>
          <p className={pStyle}>
            Want something unique? Tell us your colors, style, and budget. We’ll
            craft a design that matches your vision and occasion.
          </p>
        </div>

        {/* Reliable Service */}
        <div>
          <h3 className={h3Style}>Reliable Service</h3>
          <p className={pStyle}>
            Clear communication, on-time preparation, and careful packaging— we
            focus on a smooth experience from order to delivery.
          </p>
        </div>

        {/* Sustainable Touch */}
        <div>
          <h3 className={h3Style}>Thoughtful & Sustainable</h3>
          <p className={pStyle}>
            We prioritize responsible sourcing and gentle packaging choices
            where possible—beauty that’s kinder to the planet.
          </p>
        </div>

        {/* Growing Collection */}
        <div>
          <h3 className={h3Style}>Growing Collection</h3>
          <p className={pStyle}>
            From classic roses to seasonal specials, our catalog keeps
            expanding. Check back often for new bouquets, plants, and gift sets.
          </p>
        </div>
      </div>
    </div>
  );
}
