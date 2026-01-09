import React from "react";
import "./Luxeollections.css";

const LuxeCollections = () => {
  return (
    <div className="luxe-collections-wrapper">
      {/* Majestic Collection */}
         <h2 className="collection-heading">Majestic Collection</h2>
       <div className="majestic-section">
      <div className="majestic-image">
        <img
            src="https://www.withclarity.com/cdn/shop/files/majestic2x_db769a89-abc5-4806-9377-605692f7089a_1900x.png?v=1711448137"
            alt="Heritage Collection"
            className="collection-image"
          />
      </div>
    <div class="majestic-text-container">
  <h2 class="majestic-title">IRRESISTIBLY MAGNETIC</h2>
  <p class="majestic-subtitle">Notable center stones and intricate design with eye-catching brilliance.</p>
  <a href="#" class="majestic-link">EXPLORE MAJESTIC</a>
</div>

    </div>
      

      {/* Heritage Collection */}
      <div className="collection-block">
        <h2 className="collection-heading">Heritage Collection</h2>
        <div className="collection-image-block">
          <img
            src="https://www.withclarity.com/cdn/shop/files/heritage2x_1efd05e0-988d-4455-8a89-c711f4616582_1900x.png?v=1711448158"
            alt="Heritage Collection"
            className="collection-image"
          />
          <div className="majestic-text-container">
            <p className="majestic-title">EVERLASTING ATTRACTION</p>
            <p className="majestic-subtitle">
             Uncover a sense of nostalgia where vintage design meets modern day essence.
            </p>
            <a href="#" className="majestic-link">
              EXPLORE HERITAGE
            </a>
          </div>
        </div>
      </div>


 {/* Illuminate Collection*/}
      <div className="collection-block">
        <h2 className="collection-heading">Illuminate Collection</h2>
        <div className="collection-image-block">
          <img
            src="https://www.withclarity.com/cdn/shop/files/illuminate2x_f0270809-f2a5-4098-b5f0-e4769815f4e1_1900x.png?v=1711448174"
            alt="Heritage Collection"
            className="collection-image"
          />
          <div className="majestic-text-container">
            <p className="majestic-title">DREAMLIKE DIAMONDS</p>
            <p className="majestic-subtitle">
           Romantic style harmoniously intertwines with contemporary elegance.
            </p>
            <a href="#" className="majestic-link">
              EXPLORE Illuminate
            </a>
          </div>
        </div>
      </div>

 {/* Elegance Collection */}
      <div className="collection-block">
        <h2 className="collection-heading">Elegance Collection</h2>
        <div className="collection-image-block">
          <img
            src="https://www.withclarity.com/cdn/shop/files/elegance2x_1900x.png?v=1711445293"
            alt="Heritage Collection"
            className="collection-image"
          />
          <div className="majestic-text-container">
            <p className="majestic-title"> BREATHTAKING BEAUTY</p>
            <p className="majestic-subtitle">
          Quiet luxury merges with classic style to leave an effortless impression
            </p>
            <a href="#" className="majestic-link">
              EXPLORE Elegance
            </a>
          </div>
        </div>
      </div>

{/* The Haute Collection */}
      <div className="collection-block">
        <h2 className="collection-heading">The Haute Collection</h2>
        <div className="collection-image-block">
          <img
            src="https://www.withclarity.com/cdn/shop/files/haute2x_1900x.png?v=1711445375"
            alt="Heritage Collection"
            className="collection-image"
          />
          <div className="majestic-text-container">
            <p className="majestic-title">UNFORGETTABLY BOLD</p>
            <p className="majestic-subtitle">
     Irresistible statement designs that enhance every occasion.
            </p>
            <a href="#" className="majestic-link">
              EXPLORE HAUTE
            </a>
          </div>
        </div>
      </div>




    </div>
  );
};

export default LuxeCollections;
