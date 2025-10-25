'use client';

import React from 'react';
import Lottie from 'lottie-react';
import Image from 'next/image';
import backgroundAnimation from '../../public/models/worldtour.json';

const rightPoints = [
  "Customized itineraries designed to showcase the best sights and hidden gems tailored just for you.",
  "Dedicated 24/7 support to ensure your travel experience is smooth and stress-free from start to finish.",
  "Competitive pricing with no hidden fees, offering incredible value for unforgettable adventures.",
  "Expert local guides who bring destinations to life with fascinating stories and insider tips.",
  "Safe and reliable travel arrangements, including verified transportation and accommodations.",
  "Handpicked premium hotels and resorts that provide comfort and luxury throughout your journey.",
  "Immersive cultural experiences, including local cuisine tastings, festivals, and traditional performances.",
];

const singleImage = '/sales-girl-1.png';

export default function TourSection() {
  return (
    <div
      style={{
        position: 'relative',
        // minHeight: '90vh',  <-- removed to reduce bottom space
        overflow: 'hidden',
        color: 'white',
        fontFamily: "'Times New Roman', Times, serif",
        padding: '2rem 1rem 0 1rem', // removed bottom padding by setting bottom to 0
      }}
    >
      {/* Background Animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Lottie animationData={backgroundAnimation} loop={true} style={{ width: '100%', height: '100%' }} />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: 0,
            left: 0,
          }}
        />
      </div>

      {/* Heading */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 'bold', marginBottom: 0 }}>
          Why Choose <span style={{ color: '#FFA500' }}>VJC-OVERSEAS</span> ?
        </h1>
      </div>

      {/* Content Section */}
      <div className="content-container">
        {/* Left - Bullet Points */}
        <div className="text-container">
          <h2 style={{ marginBottom: '10px' }}>What We Offer</h2>
          <ul>
            {rightPoints.map((point, index) => {
              const [firstWord, ...rest] = point.split(' ');
              return (
                <li key={index}>
                  <strong>{firstWord}</strong> {rest.join(' ')}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right - Image */}
        <div className="image-container">
          <Image
            src={singleImage}
            alt="Gallery Single"
            width={400}
            height={400}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .content-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto 0 auto; /* removed bottom margin */
        }

        .text-container {
          width: 100%;
          max-width: 800px;
          text-align: center;
        }

        .text-container h2 {
          font-size: 1.7rem;
          margin-bottom: 10px;
        }

        .text-container ul {
          line-height: 1.8;
          font-size: 1rem;
          padding-left: 1.5rem;
          list-style-type: disc;
          color: white;
          margin-bottom: 0; /* remove bottom margin */
        }

        .text-container ul li {
          margin-bottom: 10px;
        }

        .text-container ul li strong {
          color: #FFA500;
        }

        .image-container {
          width: 100%;
          max-width: 400px;
          height: 400px;
          border: 4px solid orange;
          border-radius: 12px;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 992px) {
          .content-container {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 4rem;
          }

          .text-container {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
