'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ListingDetails {
  bedrooms?: string;
  bathrooms?: number;
  sqft?: string;
  type: string;
  status: string;
}

interface Listing {
  id: number;
  title: string;
  price: string;
  address: string;
  details: ListingDetails;
  description: string;
  images: string[];
}

const listings: Listing[] = [
  {
    id: 1,
    title: 'Commercial Investment Opportunity',
    price: '$3,999,900',
    address: '8-12 York Street, Chatham-Kent, ON N0P 2C0',
    details: {
      type: 'Commercial',
      status: 'For Sale'
    },
    description: 'Featuring Newly Built and strategically located commercial property. Prime investment opportunity in Chatham-Kent.',
    images: [
      'https://storage.sub-ca.incomrealestate.com/67e6314657512a3f395a8a15.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e63147ce1ead3063ae2cb8.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e63147b20a9a6e58110257.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e631474b74fd53f032f852.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e63146353ae34cf4613521.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e631461ed44162a335744b.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e63144f59fa93b510bb788.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e63144ab435941c290053e.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e631451ed44162a3357449.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e631432a7e4a79d8ec1800.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e631424b74fd53f032f847.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/67e6314250332b5bf6891791.jpeg?height=832'
    ]
  },
  {
    id: 2,
    title: 'Magnificent Country Estate',
    price: '$3,499,000',
    address: '5028 Wellington 125 Road, Erin, ON L7J 2L9',
    details: {
      bedrooms: '4',
      bathrooms: 2,
      type: 'Residential',
      status: 'For Sale'
    },
    description: 'On 45 acres of land, this magnificent country estate offers the perfect blend of luxury and nature. Features 4 bedrooms and 2 bathrooms.',
    images: [
      'https://storage.sub-ca.incomrealestate.com/678b13c680aedf14779ba271.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13c646cd82094fd636d8.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13c74c517a344ece4332.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13ca30a08252965f6aed.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13cb76268c52aa882c63.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13c576268c52aa882c60.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13c8ae7f4d58a8b3f916.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13cf28b53c22e3b5af4b.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13d076268c52aa882c67.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/678b13c530a08252965f6ae7.jpeg?height=832'
    ]
  },
  {
    id: 3,
    title: 'Stunning Quarter Acre Estate',
    price: '$2,999,999',
    address: '1103 Orchard Rd, Mississauga, ON L5E 2N7',
    details: {
      bedrooms: '5',
      bathrooms: 7,
      sqft: '3500',
      type: 'Residential',
      status: 'For Sale'
    },
    description: 'Stunning 1/4 Acre Lot with luxurious finishes throughout. This magnificent estate offers 5 bedrooms and 7 bathrooms with 3,500 square feet of living space.',
    images: [
      'https://storage.sub-ca.incomrealestate.com/66fade2beb1924435bae8749.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2ea1d7a80ceb074475.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade3064611c150ac7ac87.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade30cec7a0453930ded6.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade3118273a246e61bce5.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade31a1ef984d90ef5b89.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade312aaa034367474e20.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade3218273a246e61bce7.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2b2c667c15164084c2.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2bcec7a0453930ded3.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2c2097625f792a9519.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2c64611c150ac7ac84.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2d69feff0d7e5075bf.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2d17e7937a4d901813.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2e1bd41914f94bc9ad.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2e9d234554d00955d8.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2f471810276344ab4d.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2f17e7937a4d901815.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66fade2f9892694dc5f97552.jpeg?height=832'
    ]
  },
  {
    id: 4,
    title: 'Investment Opportunity',
    price: '$2,990,000',
    address: '9800 Britania Rd, Milton, ON L9T 7E8',
    details: {
      bedrooms: '3',
      bathrooms: 2,
      type: 'Residential',
      status: 'For Sale'
    },
    description: 'Attention Investors! Prime investment opportunity in Milton. This property features 3 bedrooms and 2 bathrooms with excellent potential for growth.',
    images: [
      'https://storage.sub-ca.incomrealestate.com/66bf765c923b747ca1bf7921.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf76637979d46630459d8c.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766b7cb3705a05f3a071.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766b7cb3705a05f3a073.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766cbd436828cde792b0.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766dce50f27d01e60653.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766dce50f27d01e60654.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766dbd436828cde792b1.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf765fcd0bb102a1cbeb19.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf76619e8553611217d94e.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf76622e12bf14138a1522.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf76637cb3705a05f3a06b.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf7666bfd7e111dac5924d.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf7667923b747ca1bf7926.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf7669aa45db21346a5f9a.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766abd436828cde792ac.jpeg?height=832',
      'https://storage.sub-ca.incomrealestate.com/66bf766b7cb3705a05f3a072.jpeg?height=832'
    ]
  }
];

const Listings = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: number]: number }>({});
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; listingId: number; currentIndex: number; totalImages: number } | null>(null);

  const nextImage = (listingId: number, maxLength: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [listingId]: prev[listingId] === undefined ? 1 : (prev[listingId] + 1) % maxLength
    }));
  };

  const prevImage = (listingId: number, maxLength: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [listingId]: prev[listingId] === undefined ? maxLength - 1 : (prev[listingId] - 1 + maxLength) % maxLength
    }));
  };

  const handleImageClick = (listing: Listing, currentIndex: number) => {
    setSelectedImage({
      url: listing.images[currentIndex],
      title: listing.title,
      listingId: listing.id,
      currentIndex,
      totalImages: listing.images.length
    });
  };

  const handleModalNextImage = () => {
    if (selectedImage) {
      const listing = listings.find(l => l.id === selectedImage.listingId);
      if (listing) {
        const nextIndex = (selectedImage.currentIndex + 1) % listing.images.length;
        setSelectedImage({
          ...selectedImage,
          url: listing.images[nextIndex],
          currentIndex: nextIndex
        });
      }
    }
  };

  const handleModalPrevImage = () => {
    if (selectedImage) {
      const listing = listings.find(l => l.id === selectedImage.listingId);
      if (listing) {
        const prevIndex = (selectedImage.currentIndex - 1 + listing.images.length) % listing.images.length;
        setSelectedImage({
          ...selectedImage,
          url: listing.images[prevIndex],
          currentIndex: prevIndex
        });
      }
    }
  };

  const handleScheduleViewing = (listing: Listing) => {
    const subject = `Viewing Request: ${listing.title}`;
    const body = `
Hello,

I am interested in scheduling a viewing for the following property:

Property Details:
- Title: ${listing.title}
- Address: ${listing.address}
- Price: ${listing.price}
${listing.details.bedrooms ? `- Bedrooms: ${listing.details.bedrooms}` : ''}
${listing.details.bathrooms ? `- Bathrooms: ${listing.details.bathrooms}` : ''}
${listing.details.sqft ? `- Square Footage: ${listing.details.sqft}` : ''}
- Type: ${listing.details.type}
- Status: ${listing.details.status}

Description:
${listing.description}

Please let me know your availability for a viewing.

Best regards,
`;

    const mailtoLink = `mailto:jagtarkaur6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="listings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Listings</h2>
          <p className="text-xl text-gray-600">Discover your perfect home</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listings.map((listing) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndices[listing.id] || 0}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full w-full cursor-pointer"
                    onClick={() => handleImageClick(listing, currentImageIndices[listing.id] || 0)}
                  >
                    <Image
                      src={listing.images[currentImageIndices[listing.id] || 0]}
                      alt={`${listing.title} - Image ${(currentImageIndices[listing.id] || 0) + 1}`}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/800x600?text=Property+Image';
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={() => prevImage(listing.id, listing.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
                </button>
                <button
                  onClick={() => nextImage(listing.id, listing.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                >
                  <ChevronRightIcon className="h-6 w-6 text-gray-800" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                  {(currentImageIndices[listing.id] || 0) + 1} / {listing.images.length}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{listing.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{listing.address}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{listing.price}</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {listing.details.bedrooms && (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{listing.details.bedrooms} Beds</span>
                    </div>
                  )}
                  {listing.details.bathrooms && (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      <span>{listing.details.bathrooms} Baths</span>
                    </div>
                  )}
                  {listing.details.sqft && (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>{listing.details.sqft} sqft</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-6">{listing.description}</p>

                <motion.button
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleScheduleViewing(listing)}
                >
                  Schedule Viewing
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full h-[80vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
            >
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handleModalPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={handleModalNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-800" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
              {selectedImage.currentIndex + 1} / {selectedImage.totalImages}
            </div>

            <div className="relative w-full h-full">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x600?text=Property+Image';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Listings; 