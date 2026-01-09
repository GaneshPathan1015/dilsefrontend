import React, { useState } from "react";

const styles = {
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  accordionItem: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    marginBottom: "12px",
    transition: "all 0.3s ease",
  },
  accordionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    cursor: "pointer",
    backgroundColor: "#f8f9fa",
    border: "none",
    width: "100%",
    textAlign: "left",
    transition: "background-color 0.2s ease",
  },
  accordionHeaderHover: {
    backgroundColor: "#e9ecef",
  },
  question: {
    fontSize: "20px",
    fontWeight: "400",
    color: "#0a3357",
    margin: 0,
    paddingRight: "20px",
    lineHeight: "1.4",
  },
  icon: {
    fontSize: "24px",
    color: "#0a3357",
    fontWeight: "300",
    transition: "transform 0.3s ease",
    flexShrink: 0,
  },
  iconRotated: {
    transform: "rotate(45deg)",
  },
  accordionBody: {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease, padding 0.3s ease",
  },
  accordionBodyOpen: {
    maxHeight: "500px",
    padding: "20px 24px",
  },
  answer: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333",
    margin: 0,
  },
  "@media (maxWidth: 768px)": {
    question: {
      fontSize: "18px",
    },
    accordionHeader: {
      padding: "16px 20px",
    },
    answer: {
      fontSize: "15px",
    },
  },
  "@media (maxWidth: 480px)": {
    question: {
      fontSize: "16px",
    },
    accordionHeader: {
      padding: "14px 16px",
    },
    icon: {
      fontSize: "20px",
    },
  },
};

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const isHovered = hoveredIndex === index;

        return (
          <div key={index} style={styles.accordionItem}>
            <button
              style={{
                ...styles.accordionHeader,
                ...(isHovered ? styles.accordionHeaderHover : {}),
              }}
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-expanded={isOpen}
            >
              <h3 style={styles.question}>{faq.question}</h3>
              <span
                style={{
                  ...styles.icon,
                  ...(isOpen ? styles.iconRotated : {}),
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                ...styles.accordionBody,
                ...(isOpen ? styles.accordionBodyOpen : {}),
              }}
            >
              <p
                style={styles.answer}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
              {/* <p style={styles.answer} dangerouslySetInnerHTML={{ __html: faq.answer }}>{faq.answer}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
