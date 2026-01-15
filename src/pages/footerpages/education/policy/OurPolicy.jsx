import React, { useRef, useState } from "react";
import "./OurPolicy.css";

function OurPolicy() {
  const sliderRef = useRef(null);
  const [activeSection, setActiveSection] = useState("lifetime-warranty");

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const policySections = [
    { id: "lifetime-warranty", name: "LIFETIME WARRANTY" },
    { id: "replica-home-preview", name: "REPLICA HOME PREVIEW" },
    { id: "crafting-engraving-resizing", name: "CRAFTING, ENGRAVING & RESIZING" },
    { id: "financing", name: "FINANCING" },
    { id: "returns", name: "RETURNS" },
    { id: "diamond-ethics", name: "DIAMOND ETHICS" },
    { id: "insured-shipping", name: "INSURED SHIPPING" },
    { id: "custom-ring-jewelry", name: "CUSTOM RING & JEWELRY" },
    { id: "appraisals-upgrades", name: "APPRAISALS & UPGRADES" },
    { id: "id-me-discount", name: "ID.ME DISCOUNT" }
  ];

  return (
    <>
      <section>
        <div
          className="container"
          style={{
            color: '#14344a',
            backgroundImage: 'url("/images/ourPolicies/our-policies-desktop_1366x.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="hero-image-ourPolicy">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 heading-top">
                <h1 className="heading-h1">CUSTOMER CARE</h1>
                <span className="span-h1">
                  Our aim is to delight you not only with the quality and<br />
                  beauty of our jewelry but also with the care and<br />
                  attention that we put into everything that we craft.
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="container py-3" style={{ color: '#14344a' }}>
          <div className="d-flex justify-content-center align-items-center">
            <button className="slider-btn me-3" onClick={scrollLeft}>
              &lt;
            </button>

            <div className="feature-slider" ref={sliderRef}>
              {policySections.map((section) => (
                <button
                  key={section.id}
                  className={`feature-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.name}
                </button>
              ))}
            </div>

            <button className="slider-btn ms-3" onClick={scrollRight}>
              &gt;
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ color: '#14344a' }}>
          <div className="">
            <div id="lifetime-warranty">
              <h2 className="text-center mb-5 mt-5">LIFETIME WARRANTY</h2>
              <div className="accordion" id="faqAccordion" style={{ color: '#14344a' }}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      What's covered?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The Dilse Jewels is committed to creating the highest quality jewelry that lasts a lifetime. Our goal is to make you happy with your jewelry now and forever. We offer complimentary lifetime cleaning. We also provide complimentary replacement of stones under 0.10ct each, which are broken or lost during everyday wear and tear.<br />
                      Diamonds above 0.10ct each are not covered under warranty. Center stone diamonds and gemstones on engagement rings are also not covered under warranty. Damage, loss or theft are not covered by our Lifetime Warranty. While we're happy to repair your jewelry, there are fees assessed based on the repair requirements, as determined by our jewelers. We strongly recommend that all work including cleaning, resizing and repairs performed on your jewelry is done by The Dilse Jewels. Otherwise, your warranty will be voided. Please allow 7-10 business days for normal wear and tear repairs. Timelines may vary are jewelry requiring more extensive repair or recrafting.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      How do I use my warranty?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Diamonds above 0.10ct each are not covered under warranty. Center stone diamonds and gemstones on engagement rings are also not covered under warranty. Damage, loss or theft are not covered by our Lifetime Warranty. While we're happy to repair your jewelry, there are fees assessed based on the repair requirements, as determined by our jewelers. We strongly recommend that all work including cleaning, resizing and repairs performed on your jewelry is done by The Dilse Jewels. Otherwise, your warranty will be voided. Please allow 7-10 business days for normal wear and tear repairs. Timelines may vary are jewelry requiring more extensive repair or recrafting.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      How to clean my jewelry?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      The Dilse Jewels wants your jewelry to shine as bright as the day it was purchased. We offer complimentary professional cleaning and polishing (excludes shipping fees). We recommend doing this once a year as part of regular servicing.
                      For day to day care, we recommend purchasing the The Dilse Jewels Luxury Jewelry Cleaner. Our cleaner removes dirt, oil, dust and other materials that reduce shine from daily use.
                      Please see our online disclosure that includes a list of ingredients for the product, designated lists, fragrance allergens, and nonfunctional constituents.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ color: '#14344a' }}>
        <div className="container">
          <div id="financing">
            <h2 className="text-center mb-5 mt-5">FINANCING</h2>
            <div className="accordion mb-5" id="faqFinancing">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFinancing1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinancing1">
                    What is the The Dilse Jewels Credit Card?
                  </button>
                </h2>
                <div id="collapseFinancing1" className="accordion-collapse collapse" data-bs-parent="#faqFinancing">
                  <div className="accordion-body">
                    The Dilse Jewels offers customers a credit card through Synchrony Bank with a revolving credit line to use again and again at dilsejewels.com. Please note only customers within The India are eligible to apply and use the The Dilse Jewels Credit Card.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFinancing2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinancing2">
                    How do I apply for a The Dilse Jewels store credit card?
                  </button>
                </h2>
                <div id="collapseFinancing2" className="accordion-collapse collapse" data-bs-parent="#faqFinancing">
                  <div className="accordion-body">
                    You can apply for a The Dilse Jewels Store Credit Card here. Get a decision instantly.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFinancing3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinancing3">
                    Where do I check the status of my account?
                  </button>
                </h2>
                <div id="collapseFinancing3" className="accordion-collapse collapse" data-bs-parent="#faqFinancing">
                  <div className="accordion-body">
                    To check the status of your The Dilse Jewels Store Credit Card account,click here to learn more and manage your account on Synchrony Bank's website. After loging into your account, you will be able to:<br />
                    1. Make a payment <br />
                    2. View your balance <br />
                    3. Update your account information <br />
                    4. Schedule up to your next 12 payments <br />
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFinancing4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinancing4">
                    How can I make a payment on my The Dilse Jewels store Credit Card?
                  </button>
                </h2>
                <div id="collapseFinancing4" className="accordion-collapse collapse" data-bs-parent="#faqFinancing">
                  <div className="accordion-body">
                    1. Pay Online<br />
                    Click here to manage your account and make payments.<br />

                    2. Pay by Phone<br />
                    Contact Synchrony Bank Customer Service at 1-866-396-8254.<br />

                    3. Office Hours:<br />

                    Mon thru Fri - 7:30am to 12:00 midnight EST Sat - 10:00am to 7:00pm EST Sun – Closed<br />
                    4. Pay by Mail<br />
                    Mail payments to the address below. Please ensure that you have plenty of time for your payment to arrive prior to your due date.<br />

                    Synchrony BankPO Box 960061Orlando, FL 32896-0061
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFinancing5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinancing5">
                    What is Affirm Financing?
                  </button>
                </h2>
                <div id="collapseFinancing5" className="accordion-collapse collapse" data-bs-parent="#faqFinancing">
                  <div className="accordion-body">
                    Use Affirm to make up to 4 interest free payments. Or pay with installments on your own schedule over a 36 month period. Add to cart and choose how you want to buy now and pay later with Affirm.

                    Your rate will be 0-36% APR based on credit, and is subject to an eligibility check. For example, a $700 purchase might cost $63.18/mo over 12 months at 15% APR. Payment options through Affirm are provided by these lending partners: affirm.com/lenders. Options depend on your purchase amount and a down payment may be required.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="replica-home-preview">
            <h2 className="text-center mb-5 mt-5">REPLICA HOME PREVIEW</h2>
            <div className="accordion mb-5" id="faqReplica">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReplica1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReplica1">
                    How does it work?
                  </button>
                </h2>
                <div id="collapseReplica1" className="accordion-collapse collapse" data-bs-parent="#faqReplica">
                  <div className="accordion-body">
                    The Dilse Jewels's Replica Ring Preview makes it easy for you to select the perfect ring. You can experience your favorite styles in the comfort of your home before you purchase. Choose up to 2 replica rings to preview for 7 days. Share with friends and family or discreetly find a ring style she will love. After you are done viewing, simply use the prepaid shipping label and return via USPS in the original packaging. All replica orders ship USPS free of charge to and from the customer. Please note that Home Preview orders can only ship within The India. Home Preview orders cannot be shipped to addresses in Canada or the UK.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReplica2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReplica2">
                    Is the Home Preview Free?
                  </button>
                </h2>
                <div id="collapseReplica2" className="accordion-collapse collapse" data-bs-parent="#faqReplica">
                  <div className="accordion-body">
                    Our rings are made to last forever, so take your time to be sure it's the one. With over 8,000 customization options, our Home Preview lets you try on the ring at your own pace, now crafted to perfectly fit your ring size. We will charge your card ₹200 per replica with complimentary shipping. You will receive a replica ring to try on. Return your replica within 7 days and receive a gift card for the full amount paid, redeemable on your final ring selection.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReplica3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReplica3">
                    What are Replica Rings?
                  </button>
                </h2>
                <div id="collapseReplica3" className="accordion-collapse collapse" data-bs-parent="#faqReplica">
                  <div className="accordion-body">
                    All our replica rings look exactly like real The Dilse Jewels engagement rings. Our Replica Rings are made of a white metallic alloy and round one carat diamond simulant. Just by looking at it, it's hard to tell a Replica Ring apart from a real diamond ring. Replica Rings are only intended for visual purposes, not extended wear, which may result in damage or tarnish.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReplica4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReplica4">
                    How do I extend my preview?
                  </button>
                </h2>
                <div id="collapseReplica4" className="accordion-collapse collapse" data-bs-parent="#faqReplica">
                  <div className="accordion-body">
                    We are happy to speak to you about extending your preview period. We understand that it can take some additional time to make a lifetime commitment. :) Simply contact us and let us know. If your home preview ends on a weekend or holiday, just return the package on the next available day.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReplica5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReplica5">
                    How many Home Preview orders can I place?
                  </button>
                </h2>
                <div id="collapseReplica5" className="accordion-collapse collapse" data-bs-parent="#faqReplica">
                  <div className="accordion-body">
                    We are able to send up to 2 home preview orders per customer at a time, with a limit of two orders per customer. Each Home Preview order includes up to 2 rings. We're always available to help you find the perfect ring style or tell you more about our rings to help you make a better choice. At a complete loss? Call in and just describe her personality and style and our design team can find the perfect ring for you, we promise!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="diamond-ethics">
            <h2 className="text-center mb-5 mt-5">DIAMOND ETHICS</h2>
            <div className="accordion mb-5" id="faqEthics">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEthics1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEthics1">
                    What are conflict diamonds?
                  </button>
                </h2>
                <div id="collapseEthics1" className="accordion-collapse collapse" data-bs-parent="#faqEthics">
                  <div className="accordion-body">
                    Conflict diamonds are gems which are obtained in association with human rights abuses, child labor, violence, or severe environmental damage. In the 1990s, many of the world's diamonds came from Africa, particularly regions undergoing civil unrest. Rebel armies in parts of Africa were exploiting alluvial diamond fields to fund their wars against established governments, putting people and the environment in the middle of their conflicts. Diamonds obtained as a result of these activities are called conflict diamonds.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEthics2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEthics2">
                    What is the Kimberley Process?
                  </button>
                </h2>
                <div id="collapseEthics2" className="accordion-collapse collapse" data-bs-parent="#faqEthics">
                  <div className="accordion-body">
                    Adopted in December 2000 by the United Nations General Assembly, this landmark resolution created an international certification process for rough diamonds. A coalition of governments, non-governmental organizations, and the diamond industry established the Kimberley Process to control the export and import of rough diamonds to eliminate the trade in conflict diamonds. The Kimberley Process has stringent requirements on its members to allow them to certify shipments of rough diamonds as "conflict-free." The Kimberley Process has already been immensely successful, and continues to strengthen its objectives and controls. Today apart from countries like Canada, many African countries supply diamonds that are conflict free and are used to uplift the economy and create a long-term positive impact for people who are employed by mines.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEthics3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEthics3">
                    What are Zimbabwe diamonds?
                  </button>
                </h2>
                <div id="collapseEthics3" className="accordion-collapse collapse" data-bs-parent="#faqEthics">
                  <div className="accordion-body">
                    The most recent influx of conflict diamonds has been from mining in Zimbabwe's Marange diamond fields. Due to reports of human rights abuses, The Dilse Jewels does not purchase or inventory any diamonds that are associated or affiliated with Zimbabwean mining. The Dilse Jewels employs trained experts who can identify Zimbabwean diamonds that are in circulation, further ensuring our responsibility in purchasing and sourcing diamonds. The Dilse Jewels regularly reviews and improves its conflict diamond and environmental safety standards.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEthics4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEthics4">
                    What is The Dilse Jewels's Conflict Diamond Policy?
                  </button>
                </h2>
                <div id="collapseEthics4" className="accordion-collapse collapse" data-bs-parent="#faqEthics">
                  <div className="accordion-body">
                    The Dilse Jewels is committed to the highest level of ethical responsibility. We understand that the diamond you purchase is a symbol of love and commitment. For this reason, we ensure that every diamond we offer is not tainted by conflict or human rights abuses. We work to enforce the strictest standards set forth by the Kimberley Process and United Nations Resolutions. At The Dilse Jewels, we're proud that the distribution of our jewelry, from mine to market, adheres with all international laws and human rights policies. With supplier relationships that span generations, we have transparency into the operations and sourcing of our suppliers. We only work with reputable suppliers who value conflict-free sourcing and ethical business practices.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="insured-shipping">
            <h2 className="text-center mb-5 mt-5">INSURED SHIPPING</h2>
            <div className="accordion mb-5" id="faqShipping">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingShipping1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShipping1">
                    How are orders shipped?
                  </button>
                </h2>
                <div id="collapseShipping1" className="accordion-collapse collapse" data-bs-parent="#faqShipping">
                  <div className="accordion-body">
                    All The Dilse Jewels customers enjoy complimentary insured shipping on orders shipped within the India, Canada and the UK. We provide shipment tracking so that you can keep track of when your package will arrive. All items shipping via FedEx will require a signature upon delivery.

                    We offer the following shipping options:

                    FedEx Insured 2-Day Shipping
                    FedEx Insured Overnight (Additional ₹40)
                    USPS Priority Mail® - APO / FPO Shipments

                    The Dilse Jewels insured shipping covers items that are lost, damaged or stolen during transit. We will make efforts to recover the item(s). If unrecoverable, we will offer an item of equal or similar quality and size to match your original order. Insurance coverage applies to the cost (not retail value) of the item, as provided by our insurers.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingShipping2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShipping2">
                    How can I ship to an alternative shipping address?
                  </button>
                </h2>
                <div id="collapseShipping2" className="accordion-collapse collapse" data-bs-parent="#faqShipping">
                  <div className="accordion-body">
                    If your billing and shipping address are different, The Dilse Jewels will gladly ship your jewelry to the preferred location. For security verification, we may use an email confirmation, government issued ID verification and/or telephone call to confirm the desired delivery address.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingShipping3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShipping3">
                    How long does it take for an order to reach me?
                  </button>
                </h2>
                <div id="collapseShipping3" className="accordion-collapse collapse" data-bs-parent="#faqShipping">
                  <div className="accordion-body">
                    The Dilse Jewels provides estimated shipping information to help you understand when you can expect to receive your order. We begin processing orders the day they are received and do our absolute best to minimize delays. Please understand that each order requires special attention and our The Dilse Jewels craftsmen are dedicated to placing quality above all else. Loose diamond orders typically ship in 11 business days and finished rings and other jewelry in up to 12 business days. Please consider an additional day for third party lab appraisal services. If you require urgent processing or rushed shipping, please call us at +91 85115 44005 to discuss the available options.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingShipping4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShipping4">
                    How is sales tax determined?
                  </button>
                </h2>
                <div id="collapseShipping4" className="accordion-collapse collapse" data-bs-parent="#faqShipping">
                  <div className="accordion-body">
                    Sales tax is assessed based on a customer's shipping address. Orders in the State of Surat,California,Texas, Arizona, Illinois, Delaware, Arkansas, Georgia, Indiana, Iowa, Kansas, Kentucky, Michigan, Minnesota, Nebraska, Nevada, New Jersey, North Carolina, North Dakota, Ohio, Oklahoma, Rhode Island, South Dakota, Tennessee, Utah, Vermont, Washington, West Virginia, Wisconsin, and Wyoming are subject to sales tax.

                    For international orders shipping to the UK or Canada, VAT is assessed based on the shipping address. Once the item is shipped, the FedEx broker will contact you about the cost and payment for the duties.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingShipping5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseShipping5">
                    Where Can Orders be Shipped?
                  </button>
                </h2>
                <div id="collapseShipping5" className="accordion-collapse collapse" data-bs-parent="#faqShipping">
                  <div className="accordion-body">
                    The Dilse Jewels ships to personal residences, offices, and local FedEx/UPS locations. We do not ship to PO Boxes for security reasons. We can ship anywhere within The India, Canada or the UK.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="returns">
            <h2 className="text-center mb-5 mt-5">RETURNS</h2>
            <div className="accordion mb-5" id="faqReturns">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReturns1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReturns1">
                    How do I return my purchase?
                  </button>
                </h2>
                <div id="collapseReturns1" className="accordion-collapse collapse" data-bs-parent="#faqReturns">
                  <div className="accordion-body">
                    Our primary goal is that you love your jewelry. Should it not meet your expectations, we offer a hassle-free return policy. If you wish to return your jewelry or diamond for any reason, your order would be eligible for return or exchange within 30 calendar days from the date of your receipt.

                    Customers may return a product up to two times within 30 days of receipt. The second purchase will only be eligible for 100% store credit or can be processed with a 20% restocking fee. All orders are considered final sale after the initial 30-day period. In the interest of preserving the best customer experience for all customers, we discourage comparison shopping. Customers are limited to one jewelry item purchase per order, with an exception for engagement rings and a matching wedding band. Multiple item orders for comparison shopping will be considered multiple orders and subject to the store credit / restocking policy mentioned above.

                    Customers may make up to a total of three (3) returns, exchanges, or cancellations combined per account.

                    Please note that the following items are not eligible for return:

                    Fine jewelry items that have been personalized (such as Personalized Name Necklaces) are non-returnable.
                    Diamond upgrades are not eligible for return or exchange.
                    Rings and/or loose diamond orders with damaged or lost center diamonds are not eligible for return.
                    Jewelry or rings that have chips, scratches, breaks or nicks will not be eligible for return.
                    All The Dilse Jewels jewelry is marked with microscopic trademark etchings. If jewelry is worked on, resized or repaired by another jeweler it will not be eligible for returns.
                    Loose diamond purchases with a D FL color / clarity quality with a GIA seal are non-returnable if the GIA seal is broken.
                    Multiple loose diamond items in orders will not be eligible for return, exchange or store credit and will be considered final sale.
                    Items that have been submitted for resizing, even if still within the 30-day return period
                    Custom jewelry crafted with natural diamonds, whether lab certified or non-certified
                    Purchase Policy: Customers are also limited to 1 purchase at a time within 30 days of receiving the order.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReturns2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReturns2">
                    Are returns free?
                  </button>
                </h2>
                <div id="collapseReturns2" className="accordion-collapse collapse" data-bs-parent="#faqReturns">
                  <div className="accordion-body">
                    Returns for orders from the US are free and include the following:
                    Free Shipping: Simply print your return label, repackage all purchased items in their original packaging, include any diamond certifications, and schedule a FedEx / UPS pick-up or drop it off at your nearest FedEx / UPS location.
                    Free Return Insurance: Our pre-paid postage labels include insurance on the full value of your purchase.
                    Please Note: Failure to return a diamond certificate will result in a reprinting fee of ₹300. Appraisal reports are issued by a third party and are non-refundable. Returns for orders from the UK, Canada and Australia will be charged as ₹30, ₹30 & ₹40 respectively. Duties and taxes are recovered by the customer after a return/exchange balance from their local and/or federal tax authorities for international orders.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReturns3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReturns3">
                    What is the return process?
                  </button>
                </h2>
                <div id="collapseReturns3" className="accordion-collapse collapse" data-bs-parent="#faqReturns">
                  <div className="accordion-body">
                    Please allow The Dilse Jewels up to 7 business days to process returns and inspect returned jewelry, from the date on which your return is received. Once The Dilse Jewels receives your returned jewelry, you will receive a confirmation that your return is being processed. Returns are at the sole discretion of The Dilse Jewels based on the condition of the jewelry. If your purchase included a GIA or IGI certificate, please be sure to return that. If a certificate is not returned or returned with damage, there will be a charge of ₹300 in order to re-certify the diamond. Once inspected and approved, your return will be completed and you will receive a confirmation email with details about your refund. Refunds will be made via the original method of payment. Please allow time for the refund to be processed. A refund will generally take less than 7 business days to be completed. All refunds will be made in USD. There may be minor discrepancies based on exchange rates.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingReturns4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReturns4">
                    How do I cancel my order?
                  </button>
                </h2>
                <div id="collapseReturns4" className="accordion-collapse collapse" data-bs-parent="#faqReturns">
                  <div className="accordion-body">
                    Unsure of your purchase? Not a problem! Orders can be cancelled within the first 48 hours. Simply email service@dilsejewels.com with a reason for the cancellation. After 48 hours, the order will need to go through the returns process. Refunds are processed only to the original payment method and take up to 5-7 business days. One order cancellation is permitted within a 6 month period. A second order within the same six month period is final sale.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="custom-ring-jewelry">
            <h2 className="text-center mb-5 mt-5">CUSTOM RINGS & JEWELRY</h2>
            <div className="accordion mb-5" id="faqCustom">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCustom">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCustom">
                    How do I order custom designed jewelry?
                  </button>
                </h2>
                <div id="collapseCustom" className="accordion-collapse collapse" data-bs-parent="#faqCustom">
                  <div className="accordion-body">
                    We're happy to create the perfect jewelry for you, based on a custom design. Simply send an image and description of your desired jewelry to service@dilsejewels.com We will then confirm that we can create the design for you and provide a custom quote. If any changes need to be made, we will work closely with you during the custom process to ensure that your jewelry is perfect. Our expert designers will provide you with a complimentary rendering and a quote for your approval before your jewelry is crafted with one complimentary revision. Once a design is approved through the computer animated design process and paid for, the order may not be cancelled or changed. Quotations on custom jewelry are valid for 30 days and subject to change thereafter. If you'd like to design and purchase a custom setting, you would be required to purchase the center diamond/gemstone from The Dilse Jewels.

                    Custom settings alone are not available for purchase. Learn more about our custom design process. Custom jewelry is eligible for returns within 30 days of receipt. Our lifetime warranty will apply to all custom jewelry. However, if the jewelry is worked on by another jeweler, the warranty will be void as we cannot guarantee the work of another jeweler.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="appraisals-upgrades">
            <h2 className="text-center mb-5 mt-5">APPRAISALS & UPGRADES</h2>
            <div className="accordion mb-5" id="faqAppraisals">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingAppraisals">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAppraisals">
                    What is a jewelry appraisal?
                  </button>
                </h2>
                <div id="collapseAppraisals" className="accordion-collapse collapse" data-bs-parent="#faqAppraisals">
                  <div className="accordion-body">
                    A jewelry appraisal ascertains the retail value of your jewelry. Gemstone jewelry will take into account the millimeter dimensions of the stones and the quality of the item. With your appraisal, you can have your jewelry insured and make a claim in case of loss, theft or damage. For a fee of ₹80 we can have your jewelry appraised by a third party lab and send you the original appraisal documents with your order. To request an appraisal, simply email or call us once you have placed your order. Please note that appraisals are not refundable, even if you are returning your jewelry or diamond.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="id-me-discount">
            <h2 className="text-center mb-5 mt-5">ID.ME DISCOUNT</h2>
            <div className="accordion mb-5" id="faqDiscount">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingDiscount1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiscount1">
                    What is ID.me?
                  </button>
                </h2>
                <div id="collapseDiscount1" className="accordion-collapse collapse" data-bs-parent="#faqDiscount">
                  <div className="accordion-body">
                    ID.me is a safe and secure platform where one can verify their identity to receive a discount on their purchases online. Please note only orders shipping within the India are eligible to avail of the ID.me discount.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingDiscount2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiscount2">
                    Who is eligible for the discount?
                  </button>
                </h2>
                <div id="collapseDiscount2" className="accordion-collapse collapse" data-bs-parent="#faqDiscount">
                  <div className="accordion-body">
                    We're proud to offer a discount to members of the military, armed forces, first responders, and nurses in appreciation for their continued efforts in keeping us all safe and healthy.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingDiscount3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiscount3">
                    What can I use the discount towards? How much is the discount?
                  </button>
                </h2>
                <div id="collapseDiscount3" className="accordion-collapse collapse" data-bs-parent="#faqDiscount">
                  <div className="accordion-body">
                    Eligible id card holders can get ₹150 off their purchase over ₹2000. The discount is valid towards all full price items including necklaces, earrings, wedding bands, bracelets, loose diamonds, anniversary rings, eternity rings and engagement rings from our preset or custom ring collections. The discount is taken off the total order value in your cart.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingDiscount4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiscount4">
                    Can I combine my discount with other promotions or discount codes?
                  </button>
                </h2>
                <div id="collapseDiscount4" className="accordion-collapse collapse" data-bs-parent="#faqDiscount">
                  <div className="accordion-body">
                    No, the discount cannot be stacked with any other promotion or discount code. However, you can use any financing promotions or bank wire transfer discounts with your ID.me discount. Only one ID verification per order is applicable.

                    For any additional information about our ID.me discount, please visit ID.me or contact our team here.

                    *The Dilse Jewels reserves the right to deactivate your code and cancel any outstanding orders if we believe it is being misused.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingDiscount5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDiscount5">
                    How do I access my discount?
                  </button>
                </h2>
                <div id="collapseDiscount5" className="accordion-collapse collapse" data-bs-parent="#faqDiscount">
                  <div className="accordion-body">
                    First, sign up for a verified ID.me account to get access whether here or on our checkout page. Once finished, you can sign-in to your account and access your discount code within the cart page.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="crafting-engraving-resizing">
            <h2 className="text-center mb-5 mt-5">CRAFTING, ENGRAVING & RESIZING</h2>
            <div className="accordion mb-5" id="faqCrafting">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCrafting1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCrafting1">
                    Is engraving free?
                  </button>
                </h2>
                <div id="collapseCrafting1" className="accordion-collapse collapse" data-bs-parent="#faqCrafting">
                  <div className="accordion-body">
                    We're excited to be a part of your big day! We're happy to offer complimentary engraving on engagement rings or wedding bands (subject to space availability in the jewelry). Please note that if your ring is later resized or polished, there is a ₹25 re-engraving fee.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCrafting2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCrafting2">
                    What can I get engraved?
                  </button>
                </h2>
                <div id="collapseCrafting2" className="accordion-collapse collapse" data-bs-parent="#faqCrafting">
                  <div className="accordion-body">
                    During your checkout process, include your desired engraving. Characters can include numbers or letters. All rings and bands can be engraved with up to 15 characters. Common engravings include names, marriage and engagement dates, religious verses, song lyrics, or anything that has a special meaning for you and your significant other. Inside jokes, puns and nicknames (the mushier the better) are also great options.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCrafting3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCrafting3">
                    Can all rings and bands be engraved?
                  </button>
                </h2>
                <div id="collapseCrafting3" className="accordion-collapse collapse" data-bs-parent="#faqCrafting">
                  <div className="accordion-body">
                    Certain eternity rings and bands cannot be engraved. Please contact us if you have specific questions about your chosen style. We will contact you to explain if a ring or band you ordered cannot be engraved for any reason.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCrafting4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCrafting4">
                    How do I find the right size?
                  </button>
                </h2>
                <div id="collapseCrafting4" className="accordion-collapse collapse" data-bs-parent="#faqCrafting">
                  <div className="accordion-body">
                    When measuring your finger, a ring should fit snug and comfortably. The most accurate way to find a good fit is by using a ring sizer or having a jeweler measure your finger. Alternatively, have a jeweler measure a ring that is worn on the ring finger to determine the ring size. Fingers may slightly swell in warm weather, so be sure to choose a size that fits comfortably over the knuckle and does not fall off when moving your hand. We're happy to create rings in quarter sizes and in-between sizes to ensure we can craft the perfect fit.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCrafting5">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCrafting5">
                    What can I get resized?
                  </button>
                </h2>
                <div id="collapseCrafting5" className="accordion-collapse collapse" data-bs-parent="#faqCrafting">
                  <div className="accordion-body">
                    The Dilse Jewels recognizes that ring sizing is not a perfect science. To this end, we offer one free resizing within 30 days of your purchase for all orders shipped within The India, UK, Canada & Australia. For orders shipping to and from USA addresses, there is a ₹25 one way FedEx insured shipping fee that applies (complimentary return shipping). For orders shipping to and from UK & Canada addresses, there is a ₹30 roundtrip insured FedEx shipping fee that applies (complimentary return shipping). For orders shipping to and from Australia addresses, there is a ₹40 roundtrip insured FedEx shipping fee that applies (complimentary return shipping). Any resizing up will not be subject to additional metal charges. During the resize process small amounts of metal will be added or removed to increase or decrease the size to adjust for the new size needed. As a result, your ring may be slightly thicker or thinner when completed. Please be aware that a resizing down may result in a slight reduction in metal weight, which cannot be reimbursed.

                    We request up to 1 week to perform a resizing, excluding shipping days. Please Note: Eternity rings cannot be resized or exchanged outside our 30-day return policy.

                    Any resizing request outside 30 days will be subject to fees, including shipping and resizing fees. In most cases, subject to The Dilse Jewels's discretion, a ring resizing under 1 US finger size will be accompanied by shipping charges plus ₹30 for 14kt gold, ₹40 for 18kt gold and ₹50 for platinum. For resizing above or below 1 finger size, a new ring will need to be re-crafted to preserve the quality and structural integrity of the jewelry. In such instances, please contact our team for a quotation.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingCrafting6">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCrafting6">
                    How are accent diamonds chosen for my engagement ring?
                  </button>
                </h2>
                <div id="collapseCrafting6" className="accordion-collapse collapse" data-bs-parent="#faqCrafting">
                  <div className="accordion-body">
                    The type of accent diamonds, if present in your engagement ring setting design will match the type of your selected center diamond. Lab grown accent diamonds to match a lab grown center diamond and natural accent diamonds to match a natural center diamond. Accent diamonds are hand-picked to ensure they match each other and the center diamond.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
      .hero-image-ourPolicy {
    background-image: url("/images/ourpolicies/1.webp");
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 400px;
}

.heading-h1 {
    line-height: 45px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    padding-top: 50px;
    font-size: 2.5rem;
    font-weight: 700;
    color: #14344a;
}

.span-h1 {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0px;
    padding-top: 0px;
    font-size: 1.1rem;
    color: #14344a;
    line-height: 1.6;
}

/* Slider Styles */
.feature-slider {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-width: 100%;
}

.feature-slider::-webkit-scrollbar {
  display: none;
}

.feature-item {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #0060AC;
  min-width: 150px;
  padding: 0.75rem 1rem;
  background: transparent;
  border: 2px solid #0060AC;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  text-decoration: none;
}

.feature-item:hover {
  background: #0060AC;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(22, 48, 71, 0.3);
}

.feature-item.active {
  background: #0060AC;
  color: #fff;
  box-shadow: 0 4px 8px rgba(22, 48, 71, 0.3);
}

.slider-btn {
  width: 40px;
  height: 40px;
  border: 2px solid #0060AC;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #0060AC;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
}

.slider-btn:hover {
  background: #0060AC;
  color: #fff;
  transform: scale(1.05);
}

.accordion-button {
    color: #0060AC !important;
    font-weight: 500;
    background-color: transparent !important;
}

.accordion-button:not(.collapsed) {
    background-color: rgba(22, 48, 71, 0.05) !important;
    color: #0060AC !important;
}

.accordion-body {
    font-size: 15px;
    color: #0060AC !important;
    line-height: 1.6;
}

.accordion-item {
    border: 1px solid rgba(22, 48, 71, 0.1) !important;
    margin-bottom: 0.5rem;
    border-radius: 8px !important;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .hero-image-ourPolicy {
    min-height: 300px;
  }

  .heading-h1 {
    font-size: 2rem;
    margin-top: 30px;
    padding-top: 30px;
    text-align: center;
    line-height: 1.3;
  }

  .span-h1 {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
  }

  .span-h1 br {
    display: none;
  }

  .feature-slider {
    gap: 1rem;
    padding: 0.5rem 0;
  }

  .feature-item {
    min-width: 130px;
    font-size: 12px;
    padding: 0.6rem 0.8rem;
  }

  .slider-btn {
    width: 35px;
    height: 35px;
    font-size: 16px;
    margin: 0 0.25rem;
  }

  h2.text-center {
    font-size: 1.75rem;
  }

  .accordion-button {
    font-size: 0.9rem;
    padding: 1rem;
  }

  .accordion-body {
    font-size: 0.875rem;
    padding: 1rem;
  }
}

@media (max-width: 576px) {
  .hero-image-ourPolicy {
    min-height: 250px;
  }

  .heading-h1 {
    font-size: 1.75rem;
    margin-top: 20px;
    padding-top: 20px;
  }

  .span-h1 {
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  .feature-item {
    min-width: 120px;
    font-size: 11px;
    padding: 0.5rem 0.7rem;
  }

  .slider-btn {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  h2.text-center {
    font-size: 1.5rem;
    margin-bottom: 2rem !important;
    padding: 0 1rem;
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  .accordion-button {
    padding: 0.875rem;
  }

  .accordion-body {
    padding: 0.875rem;
  }
}

/* Extra small devices */
@media (max-width: 400px) {
  .feature-slider {
    gap: 0.75rem;
  }

  .feature-item {
    min-width: 110px;
    font-size: 10px;
    padding: 0.4rem 0.6rem;
  }

  .slider-btn {
    width: 30px;
    height: 30px;
  }

  .heading-h1 {
    font-size: 1.5rem;
  }

  .span-h1 {
    font-size: 0.85rem;
  }
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Highlight active section when scrolled to */
.policy-section {
  transition: all 0.3s ease;
}

.policy-section:target {
  background-color: rgba(22, 48, 71, 0.02);
  padding: 1rem;
  border-radius: 8px;
  margin: -1rem;
  animation: highlight 2s ease;
}

@keyframes highlight {
  0% {
    background-color: rgba(22, 48, 71, 0.1);
  }
  100% {
    background-color: rgba(22, 48, 71, 0.02);
  }
}

/* Ensure proper spacing between sections */
#lifetime-warranty,
#financing,
#replica-home-preview,
#diamond-ethics,
#insured-shipping,
#returns,
#custom-ring-jewelry,
#appraisals-upgrades,
#id-me-discount,
#crafting-engraving-resizing {
  padding-top: 2rem;
  margin-top: -2rem;
}

/* Improve accordion visuals */
.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(22, 48, 71, 0.25);
  border-color: #0060AC;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23163047'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}`}</style>
    </>
  );
}

export default OurPolicy;