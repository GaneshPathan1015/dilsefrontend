import React, { useState } from "react";
import styles from "./JewelryCollections.module.css";
import { Modal, Button } from "react-bootstrap";
const JewelryCollections = () => {
  const [activeModal, setActiveModal] = useState(null);

  const collections = [
    {
      id: "elegance",
      title: "Elegance Collection",
      subtitle: "Breathtaking Beauty",
      description:
        "Quiet luxury merges with classic style to leave an effortless impression.",
      image:
        "/images/highJewelry/eleganceMask_Group_1.webp",
      cta: "EXPLORE ELEGANCE",
      align: "bottom-right",
    },
    {
      id: "majestic",
      title: "Majestic Collection",
      subtitle: "Irresistibly Magnetic",
      description:
        "Notable center stones and intricate design with eye-catching brilliance.",
      image:
        "/images/highJewelry/majesticimage_1900x2.webp",
      cta: "EXPLORE MAJESTIC",
      align: "bottom-left",
    },
    {
      id: "heritage",
      title: "Heritage Collection",
      subtitle: "Everlasting Attraction",
      description:
        "Discover a sense of nostalgia where vintage designs meets modern day essence.",
      image:
        "/images/highJewelry/heritageSHOT16_3.webp",
      cta: "EXPLORE HERITAGE",
      align: "bottom-right",
    },
    {
      id: "illuminate",
      title: "Illuminate Collection",
      subtitle: "Dreamlike Diamonds",
      description:
        "Illuminate style harmoniously blurs lines with contemporary elegance.",
      image:
        "/images/highJewelry/illuminateSHOT17_4.webp",
      cta: "EXPLORE ILLUMINATE",
      align: "bottom-left",
    },
    {
      id: "haute",
      title: "Haute Collection",
      subtitle: "Unforgettably Bold",
      description:
        "Irresistible statement designs that enhance every occasion.",
      image:
        "/images/highJewelry/hauteSHOT19_5.webp",
      cta: "EXPLORE HAUTE",
      align: "bottom-right",
    },
  ];

  return (
    <>
      <section className={`hero-wrapper mb-0 ${styles.wrapper}`}>
        <img
          src="/images/highJewelry/hero.webp"
          alt="Wedding Bands"
          className="hero-img"
        />
        <div className="hero-text text-center">
          <h1 className="fw-bold">The Luxe Collection</h1>
        </div>
      </section>

      <div className={styles.pageWrapper}>
          <p className={styles.headerText}>
            Embrace every moment wrapped in diamond allure.
            <br />
            From cocktail parties to weddings, celebrate all of your festivities
            dressed
            <br />
            in luxe - elegant, glamorous, and unforgettable moments await.
          </p>
        <div className={styles.mainContainer}>
          {collections.map((collection) => (
            <div key={collection.id} className={styles.collectionSection}>
              <h2 className={styles.collectionTitle}>{collection.title}</h2>

              <div
                className={`position-relative ${
                  collection.align === "bottom-right"
                    ? "text-md-end"
                    : "text-md-start"
                } ${styles.collectionCard}`}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className={`img-fluid ${styles.collectionImage}`}
                />

                <div
                  className={`${styles.textBox} p-3 ${
                    collection.align === "bottom-right"
                      ? styles.textRight
                      : styles.textLeft
                  }`}
                >
                  <h4 className={styles.subtitle}>{collection.subtitle}</h4>
                </div>
              </div>

              <div
                className={`${
                  collection.align === "bottom-right"
                    ? styles.alignRight
                    : styles.alignLeft
                } ${styles.collectionCard}`}
              >
                <p className={`${styles.description} ${styles.subtitle}`}>
                  {collection.description}
                </p>
                <Button variant="link" className={styles.cta}>
                  EXPLORE {collection.title.toUpperCase()}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JewelryCollections;
