import React from "react";
import FAQAccordion from "../../FAQ/FAQAccordion";

export default function Quetions() {
  const fasq = [
    {
      question: "How do I choose a unique diamond for an engagement ring?",
      answer:
        "To choose a unique diamond for an engagement ring, consider factors like shape, cut, color, clarity, carat weight, and certification. Look for a shape that reflects your style, an excellent cut for maximum sparkle, and a color and clarity grade that suits your preferences...",
    },
    {
      question: "What ring setting makes diamond look the biggest?",
      answer:
        " If you're looking to make your diamond appear larger, consider a halo setting, which surrounds the center diamond with smaller diamonds or gemstones...",
    },
    {
      question: "Is $3000 cheap for an engagement ring?",
      answer:
        "Determining the affordability of an engagement ring is influenced by factors like personal preferences, budget, and individual financial circumstances...",
    },
    {
      question: "How do I determine right engagement ring size?",
      answer: ` To determine the right engagement ring size, consider the
                  width of the ring and potential finger fluctuations due to
                  factors like temperature and humidity...
                  <br />
                  To measure ring size at home, you can try using a few methods.
                  One option is to use a piece of string or a thin strip of
                  paper...
                  <br />
                  Keep in mind that these at-home methods may not be as accurate
                  as professional measurements...`,
    },
    {
      question: "Can I design my own engagement ring?",
      answer: `Absolutely! You have the opportunity to design your own
                  engagement ring. You can begin the process by selecting the
                  setting that appeals to you...`,
    },
  ];
  return (
    <section className="accordian_class">
      <div className="">
        <div className="section-heading text-center">
          <h2 className="section-header-sm section-header-reverse section-header-sb mb-5">
            WE’VE GOT ANSWERS TO YOUR QUESTIONS
          </h2>
        </div>
        <div className="accordion  px-3" id="accordionExample">
          {/* Accordion Item 1 */}

          <FAQAccordion faqs={fasq} />

        </div>
      </div>
    </section>
  );
}
