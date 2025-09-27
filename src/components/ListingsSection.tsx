'use client';

import Image from "next/image";

const ListingsSection = () => {
  const listings = [
    {
      id: 1,
      title: "Spacious 4-Bedroom Duplex",
      price: "$3,500",
      period: "/month",
      location: "Downtown District",
      type: "Duplex",
      bedrooms: 4,
      bathrooms: 3,
      image: "/house3.jpg"
    },
    {
      id: 2,
      title: "Luxury 3-Bedroom Apartment",
      price: "$2,800",
      period: "/month",
      location: "Riverside Area",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      image: "/house4.jpg"
    },
    {
      id: 3,
      title: "Cozy 2-Bedroom Bungalow",
      price: "$1,800",
      period: "/month",
      location: "Suburban Heights",
      type: "Bungalow",
      bedrooms: 2,
      bathrooms: 2,
      image: "/house5.jpg"
    },
    {
      id: 4,
      title: "Charming 5-Bedroom House",
      price: "$4,200",
      period: "/month",
      location: "Garden District",
      type: "House",
      bedrooms: 5,
      bathrooms: 4,
      image: "/house6.jpg"
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-middleton-neon mb-4 font-figtree">
            Available Rental Properties
          </h2>
          <p className="text-lg text-middleton-neon max-w-2xl mx-auto">
            Discover your perfect home from our curated selection of quality rental properties
          </p>
        </div>

        {/* Search/Filter Section */}
        <div className="bg-middleton-neon p-6 rounded-xl shadow-lg mb-12">
          <h3 className="text-xl font-semibold text-middleton-green mb-4 font-figtree">
            Find Your Perfect Home
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location (e.g., Downtown)"
              className="p-3 border border-middleton-green rounded-lg focus:ring-2 focus:ring-middleton-green focus:border-transparent transition-colors bg-white text-middleton-green placeholder-middleton-green/70"
            />
            <select className="p-3 border border-middleton-green rounded-lg focus:ring-2 focus:ring-middleton-green focus:border-transparent transition-colors bg-white text-middleton-green">
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <select className="p-3 border border-middleton-green rounded-lg focus:ring-2 focus:ring-middleton-green focus:border-transparent transition-colors bg-white text-middleton-green">
              <option value="">Bathrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
            <button className="bg-middleton-green text-middleton-neon p-3 rounded-lg hover:bg-middleton-denim hover:text-white transition-colors duration-200 font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-middleton-neutral rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-figtree">
                  {listing.title}
                </h3>
                <p className="text-middleton-denim text-2xl font-bold mb-3">
                  {listing.price}
                  <span className="text-base font-normal text-gray-500">
                    {listing.period}
                  </span>
                </p>
                
                {/* Location and Type Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center bg-middleton-neutral rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {listing.location}
                  </span>
                  <span className="inline-flex items-center bg-middleton-neutral rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {listing.type}
                  </span>
                </div>

                {/* Bed/Bath Info */}
                <div className="flex items-center justify-between text-gray-700 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span className="text-sm">{listing.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="text-sm">{listing.bathrooms} Baths</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-middleton-denim text-gray-800 py-3 rounded-lg hover:bg-middleton-pink transition-colors duration-200 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-middleton-neon text-middleton-green font-bold hover:bg-middleton-denim hover:text-white px-8 py-3 rounded-lg text-lg transition-colors border-2 border-middleton-neon hover:border-middleton-denim">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListingsSection; 