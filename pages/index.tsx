import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
import React, { useState } from "react";
import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";

export default function Home() {
  const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredListings = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-6 bg-gray-100">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <Pill
              key={index}
              label={filter}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? null : filter)
              }
              active={activeFilter === filter}
            />
          ))}
        </div>
      </section>

      {/* Listings Section */}
      <section className="px-6 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredListings.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.name}</h3>
              <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-blue-600 font-bold">${property.price}</span>
                <span className="text-yellow-500 text-sm">⭐ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}