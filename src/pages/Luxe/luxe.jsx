import React from 'react'
import "./luxe.css";
import LuxeCollectionsSection from './Luxe-collections/luxeCOllections';

const Luxe = () => {
  return (
  <>
      <section className="hero_section_wrapper_luxe">
  <div className="container-fluid p-0 position-relative">
    <img
      src="https://www.withclarity.com/cdn/shop/files/luxe-home2x_3000x.png?v=1711447963"
      alt=""
      className="img-fluid w-100"
    />
    <div className="wrapper position-absolute text-center w-100 mb-5">
      <h2 className="fs-1 slide-title text-white">THE LUXE COLLECTION</h2>
      <div className="slide-btn-wrapper justify-content-center align-items-center gap-5">
      </div>
    </div>
  </div>
</section>

  <div className="luxe-quote-container">
      <p className="luxe-quote-text">
        <em>
          Join our New York woman as she embarks on an unforgettable getaway,
          <br />
          embracing the warmth of the new season and the unmatched feeling of
          fresh diamonds.
          <br />
          Celebrate all of life’s most precious moments with an escape in Luxe.
        </em>
      </p>
    </div>

<LuxeCollectionsSection />


  
  </>
  )
}

export default Luxe;
