// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const OurJewelry = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const categories = [
//     {
//       id: 1,
//       title: 'ENGAGEMENT RINGS',
//       image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
//       alt: 'Elegant diamond engagement ring with halo setting'
//     },
//     {
//       id: 2,
//       title: 'DIAMONDS',
//       image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
//       alt: 'Collection of brilliant cut diamonds'
//     },
//     {
//       id: 3,
//       title: 'WEDDING BANDS',
//       image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
//       alt: 'Gold and platinum wedding bands'
//     },
//     {
//       id: 4,
//       title: 'GEMSTONE RINGS',
//       image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
//       alt: 'Blue sapphire ring with diamond halo'
//     },
//     {
//       id: 5,
//       title: 'NECKLACES',
//       image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
//       alt: 'Elegant diamond necklaces'
//     },
//     {
//       id: 6,
//       title: 'EARRINGS',
//       image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
//       alt: 'Diamond stud earrings'
//     }
//   ];

//   const maxIndex = categories.length - 4;

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
//   };

//   const isAtStart = currentIndex === 0;
//   const isAtEnd = currentIndex >= maxIndex;

//   return (
//     <>
//       <style>{`
//         * {
//           box-sizing: border-box;
//         }

//         .jewelry-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 60px 40px;
//           font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
//         }

//         .jewelry-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 40px;
//         }

//         .jewelry-title {
//           font-size: 48px;
//           font-weight: 400;
//           margin: 0;
//           font-family: Georgia, "Times New Roman", serif;
//           letter-spacing: -0.5px;
//           color: #1a1a1a;
//         }

//         .jewelry-navigation {
//           display: flex;
//           gap: 12px;
//         }

//         .jewelry-nav-button {
//           width: 44px;
//           height: 44px;
//           border: 1px solid #ddd;
//           border-radius: 50%;
//           background: white;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.2s ease;
//           color: #333;
//         }

//         .jewelry-nav-button:hover:not(:disabled) {
//           border-color: #999;
//           background: #f9f9f9;
//         }

//         .jewelry-nav-button:disabled {
//           opacity: 0.3;
//           cursor: not-allowed;
//         }

//         .jewelry-slider-wrapper {
//           overflow: hidden;
//           width: 100%;
//         }

//         .jewelry-slider {
//           display: flex;
//           gap: 24px;
//           transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           will-change: transform;
//         }

//         .jewelry-card {
//           min-width: calc(25% - 18px);
//           flex-shrink: 0;
//           display: flex;
//           flex-direction: column;
//           cursor: pointer;
//         }

//         .jewelry-image-wrapper {
//           position: relative;
//           width: 100%;
//           padding-bottom: 100%;
//           background-color: #f5f5f5;
//           overflow: hidden;
//           margin-bottom: 20px;
//           border-radius: 4px;
//         }

//         .jewelry-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.4s ease;
//         }

//         .jewelry-card:hover .jewelry-image {
//           transform: scale(1.08);
//         }

//         .jewelry-category-title {
//           font-size: 14px;
//           font-weight: 500;
//           letter-spacing: 1.5px;
//           text-align: center;
//           margin: 0;
//           text-transform: uppercase;
//           color: #333;
//         }

//         @media (max-width: 1024px) {
//           .jewelry-card {
//             min-width: calc(33.333% - 16px);
//           }
//         }

//         @media (max-width: 768px) {
//           .jewelry-title {
//             font-size: 36px;
//           }

//           .jewelry-card {
//             min-width: calc(50% - 12px);
//           }

//           .jewelry-container {
//             padding: 40px 20px;
//           }
//         }

//         @media (max-width: 480px) {
//           .jewelry-card {
//             min-width: calc(100% - 0px);
//           }

//           .jewelry-slider {
//             gap: 16px;
//           }
//         }
//       `}</style>

//       <div className="jewelry-container">
//         <div className="jewelry-header">
//           <h1 className="jewelry-title">Our jewelry</h1>
//           <div className="jewelry-navigation">
//             <button 
//               onClick={handlePrev} 
//               className="jewelry-nav-button" 
//               aria-label="Previous"
//               disabled={isAtStart}
//             >
//               <ChevronLeft size={18} />
//             </button>
//             <button 
//               onClick={handleNext} 
//               className="jewelry-nav-button" 
//               aria-label="Next"
//               disabled={isAtEnd}
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>

//         <div className="jewelry-slider-wrapper">
//           <div 
//             className="jewelry-slider"
//             style={{
//               transform: `translateX(-${currentIndex * 25}%)`,
//             }}
//           >
//             {categories.map((category) => (
//               <div key={category.id} className="jewelry-card">
//                 <div className="jewelry-image-wrapper">
//                   <img 
//                     src={category.image} 
//                     alt={category.alt}
//                     className="jewelry-image"
//                   />
//                 </div>
//                 <h3 className="jewelry-category-title">{category.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurJewelry;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

const OurJewelry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      id: 1,
      title: 'ENGAGEMENT RINGS',
      image: '/images/reviews/1.webp',
      alt: 'Elegant diamond engagement ring with halo setting',
      link: '/engagement-rings/rings'
    },
    {
      id: 2,
      title: 'DIAMONDS',
      image: '/images/reviews/2.webp',
      alt: 'Collection of brilliant cut diamonds',
      link: '/diamond'
    },
    {
      id: 3,
      title: 'WEDDING BANDS',
      image: '/images/reviews/3.webp',
      alt: 'Gold and platinum wedding bands',
      link: '/wedding/womens-wedding-rings'
    },
    {
      id: 4,
      title: 'GEMSTONE RINGS',
      image: '/images/reviews/4.webp',
      alt: 'Blue sapphire ring with diamond halo',
      link: '/engagement-rings/style?menustyle=gemstone'
    },
    {
      id: 5,
      title: 'NECKLACES',
      image: '/images/reviews/5.webp',
      alt: 'Elegant diamond necklaces',
      link: '/jewelry-list?category=necklaces-32'
    },
    {
      id: 6,
      title: 'EARRINGS',
      image: '/images/reviews/6.webp',
      alt: 'Diamond stud earrings',
      link: '/jewelry-list?category=earrings-1'
    }
  ];

  const maxIndex = categories.length - 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .jewelry-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 40px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .jewelry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .jewelry-title {
          font-size: 48px;
          font-weight: 400;
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          letter-spacing: -0.5px;
          color: #1a1a1a;
        }

        .jewelry-navigation {
          display: flex;
          gap: 12px;
        }

        .jewelry-nav-button {
          width: 44px;
          height: 44px;
          border: 1px solid #ddd;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: #333;
        }

        .jewelry-nav-button:hover:not(:disabled) {
          border-color: #999;
          background: #f9f9f9;
        }

        .jewelry-nav-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .jewelry-slider-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .jewelry-slider {
          display: flex;
          gap: 24px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .jewelry-card {
          min-width: calc(25% - 18px);
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .jewelry-image-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          background-color: #f5f5f5;
          overflow: hidden;
          margin-bottom: 20px;
          border-radius: 4px;
        }

        .jewelry-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .jewelry-card:hover .jewelry-image {
          transform: scale(1.08);
        }

        .jewelry-category-title {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-align: center;
          margin: 0;
          text-transform: uppercase;
          color: #333;
        }
      `}</style>

      <div className="jewelry-container">
        <div className="jewelry-header">
          <h1 className="jewelry-title">Our jewelry</h1>
          <div className="jewelry-navigation">
            <button 
              onClick={handlePrev} 
              className="jewelry-nav-button" 
              disabled={isAtStart}
            >
              <ChevronLeft size={18} />
            </button>

            <button 
              onClick={handleNext} 
              className="jewelry-nav-button" 
              disabled={isAtEnd}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="jewelry-slider-wrapper">
          <div 
            className="jewelry-slider"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {categories.map((category) => (
              <div key={category.id} className="jewelry-card">

                <div className="jewelry-image-wrapper">
                  <img 
                    src={category.image} 
                    alt={category.alt}
                    className="jewelry-image"
                  />
                </div>

                {/* ⭐ Title with Link Added */}
                <h3 className="jewelry-category-title">
                  <Link 
                    to={category.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {category.title}
                  </Link>
                </h3>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurJewelry;

