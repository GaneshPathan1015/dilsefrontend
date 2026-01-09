import { useState } from "react";
import axiosClient from "../../api/axios";
import Help from "./help";
import FAQAccordion from "../FAQ/FAQAccordion";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    question: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear old messages
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axiosClient.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSuccessMessage(response.data.message); // ✅ Show success
        setFormData({
          name: "",
          email: "",
          phone: "",
          topic: "",
          question: "",
        });

        // ✅ Auto clear success after 3s
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        // Laravel validation error
        const errors = err.response.data.errors;
        const errorMessages = Object.values(errors).flat().join(" ");
        setErrorMessage(errorMessages);
      } else {
        // General error
        setErrorMessage("Something went wrong. Please try again later.");
      }

      // ✅ Auto clear error after 3s
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const faqs = [
    {
      question: "Can I place an order on the phone?",
      answer:
        "We would love to hear from you. To place an order on thephone, simply call us at 844-234-6463 during our business hours. It may be helpful to call in for custom orders, split payments, or if you have a shipping deadline in mind. We’realways available to help with questions and specialrequests.",
    },
    {
      question: "What’s the best way to get the status of my order?",
      answer:
        "As all our jewelry is made to order, the best way to get all the details on your order is emailing us at service@withclarity.com. We can also assist you via live chat or phone to get you information right away about your ring or jewelry order.",
    },
    {
      question: "How do I order custom jewelry or a custom ring?",
      answer:
        "We specialize in custom jewelry and rings. Simply call us or email us with the specifications of what you have in mind. We will get back to you within a day with a pricing quote and a way to make your custom jewelry vision come to life. Our team of gemologists and design consultants works in-house here in NYC to make all designs.",
    },
    {
      question: "Where can I learn more about CaratCasa policies?",
      answer:
        "For all general questions, you can see our policies about warranties, insurance, returns and more. For anything specific, please feel free to email, live chat or call us at 844-234-6463 and we can provide you with quick answers to your questions.",
    },
    {
      question: "Do you have gemologists on your team?",
      answer:
        "Our customer care team is composed of gemologists with decades of experience and design consultants that have an eye for recommending the perfect diamond jewelry. We’re able to offer helpful guidance on both lab grown and natural diamonds and also help you find the right jewelry. Because of our design expertise, we can also craft custom jewelry to suit your needs.",
    },
    {
      question: "Why should I choose CaratCasa?",
      answer:
        "Founded with a commitment to sustainability, transparent shopping and convenience, we have thousands of happy customers and 5 star reviews. We’re rated A+ with the BBB, and have been featured as one of the fastest growing diamond jewelry companies. Talk to us, we’d be happy to tell you more. Our commitment to crafting jewelry that celebrates your moments is paramount.",
    },
  ];

  return (
    <>
      <section className="customize-engagement-ring py-5">
        <div className="container text-center">
          <div className="content-inner mx-auto px-3">
            <h3 className="section-heading display-6 display-md-4 mb-3">
              Our expert gemologists can guide you on diamonds, gemstones, and
              jewelry.
            </h3>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-0">
        <div className="container text-center">
          <img
            src="/images/contact_banner-desk.jpg"
            alt="Contact Banner"
            className="img-fluid w-100 rounded"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="contact-form-wrapper p-4 p-md-5 shadow rounded bg-white">
                <div className="text-center mb-4">
                  <h2 className="mb-2">Send us a message</h2>
                  <p className="text-muted">
                    Contact one of our expert gemologists and we’ll get back to
                    you as soon as possible. You’ll be amazed at how helpful we
                    can be.
                  </p>
                </div>

                <div className="form-wrapper">
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}

                  <form
                    method="post"
                    action="/contact#ContactForm"
                    id="ContactForm"
                    acceptCharset="UTF-8"
                    className="contact-form"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label htmlFor="ContactForm-name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="ContactForm-name"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="ContactForm-email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        id="ContactForm-email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="ContactForm-phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="ContactForm-phone"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9\-]*"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="ContactForm-topic" className="form-label">
                        Topic <span className="text-danger">*</span>
                      </label>
                      <select
                        id="ContactForm-topic"
                        className="form-select"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Diamonds">Diamonds</option>
                        <option value="Engagement Rings">
                          Engagement Rings
                        </option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Home Preview">Home Preview</option>
                        <option value="Policies">Policies</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="ContactForm-message"
                        className="form-label"
                      >
                        Ask a Question
                      </label>
                      <textarea
                        rows="5"
                        id="ContactForm-message"
                        className="form-control"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-dark px-5 py-2 fw-bold"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="customize-engagement-ring py-5">
        <div className="container">
          <div className="text-center px-3">
            <h3 className="mb-3 mt-2 display-6 display-md-4">
              We're always here to help.
            </h3>
            <p className="text-muted">
              A commitment to sustainability, transparency and jewelry made to
              fit beautifully into your big moments.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="faq-section">
            <h1
              style={{
                color: "#213245",
                fontSize: "50px",
                lineHeight: "67px",
                paddingBottom: "20px",
              }}
            >
              FAQ's
            </h1>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
