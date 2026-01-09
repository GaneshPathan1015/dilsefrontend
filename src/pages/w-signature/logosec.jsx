import React, { useState } from 'react'
import './signature.css';

const logos = [

    
  {
    name: "Forbes",
    image: "https://www.withclarity.com/cdn/shop/files/Forbes-logo_1604cf68-103c-4294-86c2-83502b3f49fc.png?v=1709124871",
    description: "Forbes featured our innovation in fine jewelry.",
  },
  {
    name: "The Knot",
    image: 'https://www.withclarity.com/cdn/shop/files/The-knot-logo.png?v=1709124881',
    description: "The Knot recommended us for unique wedding bands.",
  },
  {
    name: "VOGUE",
    image: 'https://www.withclarity.com/cdn/shop/files/VOGUE-logo.png?v=1709124892',
    description: "VOGUE praised our timeless craftsmanship.",
  },
  {
    name: "WWD",
    image: 'https://www.withclarity.com/cdn/shop/files/Womens_Wear_Daily_Logo.png?v=1748430435',
    description: "WWD highlighted our latest bridal collection.",
  },
  {
    name: "BRIDES",
    image: 'https://www.withclarity.com/cdn/shop/files/BRIDES-logo_948ba337-c2ce-4664-bdf0-a02f2846b834.png?v=1709124914',
    description: "BRIDES selected us as a top wedding jewelry brand.",
  },
  {
    name: "People",
    image:'https://www.withclarity.com/cdn/shop/files/People-logo.png?v=1709124934',
    description: "People Magazine covered our designer collab.",
  },
  {
    name: "BAZAAR",
    image: 'https://www.withclarity.com/cdn/shop/files/BAZAAR-logo.png?v=1709124942',
    description: "BAZAAR loves our elegant engagement rings.",
  },
];

const Logosec = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
        <div className="logo-section">
      <h2 className="title">We’re the Talk of the Town</h2>
      <div className="logo-row">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="logo-wrapper"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={logo.image} alt={logo.name} className="logo-img" />
            {index < logos.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
      <p className="description">
        {hoveredIndex !== null
          ? logos[hoveredIndex].description
          : "NFL Releases Wedding Bands Collection With Fine Jewelry Label The CarateCasa."}
      </p>
    </div>
  )
}

export default Logosec
