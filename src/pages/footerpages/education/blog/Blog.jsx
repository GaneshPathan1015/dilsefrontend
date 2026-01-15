import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupedBlogs, setGroupedBlogs] = useState({});

  const getImageUrl = (img) => {
    const backendUrl = "https://dilsejewels.com";
    const fallback = "https://via.placeholder.com/500x300?text=No+Image+Available";

    if (!img || img === "null" || img === "undefined" || img === "") {
      return fallback;
    }

    if (img.startsWith("http")) {
      return img;
    }

    if (img.startsWith("/storage/blogs/")) {
      const cleanPath = img.replace("/storage/blogs/", "");
      return `${backendUrl}/api/storage/blogs/${cleanPath}`;
    }

    return `${backendUrl}/api/storage/blogs/${img}`;
  };



  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dilsejewels.com/api/api/blogs');

        const blogsData = response.data.data || [];
        setBlogs(blogsData);

        // Group blogs by category (case-insensitive)
        const grouped = {};
        blogsData.forEach(blog => {
          const normalizedCategory = blog.category?.toUpperCase() || 'UNCATEGORIZED';
          if (!grouped[normalizedCategory]) {
            grouped[normalizedCategory] = [];
          }
          grouped[normalizedCategory].push(blog);
        });

        setGroupedBlogs(grouped);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to strip HTML tags from paragraph
  const stripHtml = (html) => {
    if (!html) return "";
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Slider settings
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // ✅ Single Section Component
  const BlogSection = ({ title, blogs, settings }) => {
    if (!blogs || blogs.length === 0) return null;

    // If only one blog in category, show it differently
    if (blogs.length === 1) {
      const blog = blogs[0];
      const plainText = stripHtml(blog.paragraph);
      const truncatedText = plainText.length > 50 ? plainText.substring(0, 50) + "..." : plainText;

      return (
        <section className="blog-exclusive-offers-wrapper blog-my-5 blog-bg-secondary blog-py-5">
          <div className="blog-container">
            <div className="blog-row blog-align-items-center">
              <div className="blog-col-12">
                <h2 className="blog-section-header-lg blog-small-text-center blog-mb-4">
                  {title}
                </h2>
                <div className="blog-single-blog" style={{ textAlign: "center" }}>
                  <Link
                    to={`/blog/${blog.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="blog-img-block">
                      <img
                        src={getImageUrl(blog.image_url)}
                        alt={blog.title}
                        className="blog-img-fluid"
                        style={{
                          height: "300px",
                          width: "100%",
                          maxWidth: "500px",
                          objectFit: "contain",
                          borderRadius: "8px",
                          margin: "0 auto"
                        }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/500x300?text=No+Image+Available";
                        }}
                      />
                    </div>
                    <h3
                      className="blog-mt-2"
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginTop: "20px",
                        color: "#1d3348"
                      }}
                    >
                      {blog.title}
                    </h3>
                    <h1
                      className="blog-mt-2"
                      style={{
                        fontSize: "65px",
                        lineHeight: "1.2",
                        margin: "20px 0",
                        color: "#1d3348"
                      }}
                    >
                      {truncatedText}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Multiple blogs - show in slider
    return (
      <section className="blog-exclusive-offers-wrapper blog-my-5 blog-py-5" style={{ background: '#f3efef' }}>
        <div className="blog-container">
          <div className="blog-row blog-align-items-center">
            <div className="blog-col-12">
              <h2 className="blog-section-header-lg blog-small-text-center blog-mb-4">
                {title}
              </h2>
              <Slider {...settings} className="blog-exclusive-offers">
                {blogs.map((blog) => {
                  const plainText = stripHtml(blog.paragraph);
                  const truncatedText = plainText.length > 50 ? plainText.substring(0, 50) + "..." : plainText;

                  return (
                    <div key={blog.id} style={{ padding: "0 10px" }}>
                      <Link
                        to={`/blog/${blog.slug}`}
                        style={{ textDecoration: "none", color: "inherit", display: "block" }}
                      >
                        <div className="blog-img-block blog-text-center" style={{ background: '#fff' }}>
                          <img
                            src={getImageUrl(blog.image_url)}
                            alt={blog.title}
                            className="blog-img-fluid blog-mb-2"
                            style={{
                              height: "200px",
                              width: "100%",
                              objectFit: "contain",
                              borderRadius: "8px"
                            }}
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/500x300?text=No+Image+Available";
                            }}
                          />

                          <h3
                            className="blog-text-center blog-mt-2"
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              minHeight: "50px",
                              color: "#1d3348"
                            }}
                          >
                            {blog.title}
                          </h3>
                        </div>
                        <h1
                          className="blog-text-center blog-mt-2"
                          style={{
                            fontSize: "20px",
                            lineHeight: "1.4",
                            height: "84px",
                            overflow: "hidden",
                            color: "#1d3348",
                            margin: "10px 0"
                          }}
                        >
                          {truncatedText}
                        </h1>
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // ✅ Navigation Menu
  const BlogNavigation = () => {
    return (
      <div className="blog-nav blog-medium-up-text-center blog-small-text-left">
        <nav className="blog-flex-md">
          <div className="blog-border-top blog-border-bottom blog-bg-white">
            <div className="blog-container">
              <ul className="blog-d-flex blog-justify-content-center blog-list-unstyled blog-mb-0 blog-topmenu">
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="#" className="blog-menu-link">
                    ENGAGEMENT RINGS
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="#" className="blog-menu-link">
                    GEMSTONE INSIGHTS
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="#" className="blog-menu-link">
                    WEDDING BANDS
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="#" className="blog-menu-link">
                    METAL
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="#" className="blog-menu-link">
                    BUYING GUIDES
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="#" className="blog-menu-link">
                    DIAMOND
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="#" className="blog-menu-link">
                    JEWELRY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };

  // ✅ Header
  const BlogHeader = () => {
    return (
      <section className="blog-py-5 blog-bg-light">
        <div className="blog-container blog-header blog-text-center">
          <nav aria-label="breadcrumb">
            <ol className="blog-breadcrumb blog-justify-content-start blog-mb-3">
              <li className="blog-breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="blog-breadcrumb-item blog-active" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>

          <h1 className="blog-header-heading">The Dilse Jewels Blog</h1>

          <p>
            Elevate your everyday with inspiration, delivered fresh, by the With
            Clarity editorial team. Discover your source of hidden gems, signature
            styles and jewelry trends. Dive into curated guides for all things
            diamonds including – engagement rings, lab grown and natural diamonds
            and wedding rings.
          </p>

          <BlogNavigation />
        </div>
      </section>
    );
  };

  if (loading) return (
    <div className="blog-container blog-text-center blog-my-5">
      <p>Loading blogs...</p>
    </div>
  );

  return (
    <>
      <style>
        {`
          .blog-header h1 {
            color: #1d3348;
            font-size: 44px;
            line-height: 54px;
          }

          .blog-header p {
            color: #1d3348;
            font-size: 18px;
            line-height: 26px;
            margin-top: 16px;
            text-align: center;
          }

          .blog-topmenu .blog-menu-link {
            display: inline-block;
            padding: 12px 8px;
            text-decoration: none;
            color: #333;
            font-weight: 500;
            position: relative;
          }

          .blog-topmenu .blog-menu-link::after {
            content: "▼";
            font-size: 0.6rem;
            margin-left: 6px;
            display: inline-block;
            transition: transform 0.3s ease;
          }

          .blog-nav nav {
            justify-content: space-between;
          }

          .blog-nav {
            margin-top: 70px;
          }

          .blog-nav {
            border-top: 1px solid #707070;
            border-bottom: 1px solid #707070;
          }

          .blog-nav .blog-nav-link>a {
            color: #707070;
            font-size: 15px;
            line-height: 22px;
            text-transform: uppercase;
            display: block;
            padding: 8px 15px;
          }

          .blog-item-box-blog {
            border: 1px solid #dadada;
            text-align: center;
            padding: 20px;
            border-radius: 6px;
            background: #fff;
            transition: all 0.3s;
          }

          .blog-item-box-blog:hover {
            box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
          }

          .blog-item-box-blog-image img {
            width: 100%;
            border-radius: 6px;
          }

          .blog-carousel-control-prev, .blog-carousel-control-next {
            width: 5%;
          }

          .blog-carousel-control-prev-icon,
          .blog-carousel-control-next-icon {
            background-size: 100% 100%;
            background-color: #000;
            border-radius: 50%;
            padding: 15px;
          }

          .blog-exclusive-offers a {
            color: #14344a;
            text-decoration: none;
          }

          .blog-exclusive-offers a:focus {
            color: #14344a;
          }

          .blog-exclusive-offers-wrapper.blog-bg-secondary {
            background-color: #ffffff !important;
          }

          .blog-header-heading{
            color: #1d3348;
            font-size: 44px;
            line-height: 54px;
          }

          /* Layout Styles */
          .blog-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .blog-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .blog-col-12 {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0 15px;
          }

          /* Utility Classes */
          .blog-text-center {
            text-align: center;
          }

          .blog-text-left {
            text-align: left;
          }

          .blog-text-uppercase {
            text-transform: uppercase;
          }

          .blog-text-capitalize {
            text-transform: capitalize;
          }

          .blog-bg-white {
            background-color: #fff;
          }

          .blog-bg-light {
            background-color: #f8f9fa;
          }

          .blog-bg-secondary {
            background-color: #6c757d;
          }

          .blog-position-relative {
            position: relative;
          }

          .blog-list-unstyled {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .blog-d-flex {
            display: flex;
          }

          .blog-flex-md {
            display: flex;
          }

          .blog-justify-content-center {
            justify-content: center;
          }

          .blog-justify-content-start {
            justify-content: flex-start;
          }

          .blog-align-items-center {
            align-items: center;
          }

          .blog-border-top {
            border-top: 1px solid #dee2e6;
          }

          .blog-border-bottom {
            border-bottom: 1px solid #dee2e6;
          }

          .blog-img-fluid {
            max-width: 100%;
            height: auto;
          }

          .blog-w-100 {
            width: 100%;
          }

          /* Spacing Utilities */
          .blog-my-5 {
            margin-top: 3rem;
            margin-bottom: 3rem;
          }

          .blog-mb-0 {
            margin-bottom: 0;
          }

          .blog-mb-3 {
            margin-bottom: 1rem;
          }

          .blog-mb-4 {
            margin-bottom: 1.5rem;
          }

          .blog-mt-1 {
            margin-top: 0.25rem;
          }

          .blog-mt-2 {
            margin-top: 0.5rem;
          }

          .blog-mx-3 {
            margin-left: 1rem;
            margin-right: 1rem;
          }

          .blog-py-5 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .blog-px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          .blog-px-md-4 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          /* Component Styles */
          .blog-section-header-lg {
            font-size: 2rem;
            font-weight: 600;
            color: #1d3348;
          }

          .blog-img-block {
            margin-bottom: 1rem;
          }

          .blog-breadcrumb {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .blog-breadcrumb-item {
            margin-right: 0.5rem;
          }

          .blog-breadcrumb-item.blog-active {
            color: #6c757d;
          }

          .blog-breadcrumb-item a {
            color: #007bff;
            text-decoration: none;
          }

          .blog-breadcrumb-item a:hover {
            text-decoration: underline;
          }

          /* Slick slider adjustments */
          .slick-prev:before, .slick-next:before {
            color: #000;
          }

          .slick-slide {
            padding: 0 10px;
          }

          /* Single blog styling */
          .blog-single-blog {
            max-width: 800px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .blog-topmenu {
              flex-direction: column;
            }
            .blog-topmenu li {
              margin: 5px 0;
            }
            .blog-header-heading {
              font-size: 28px;
            }
            .blog-header p {
              font-size: 14px;
            }
            .blog-small-text-center {
              text-align: center;
            }
            .blog-small-text-left {
              text-align: left;
            }
            
            /* Mobile font size adjustments */
            .blog-single-blog h1 {
              font-size: 40px !important;
            }
          }

          @media (min-width: 768px) {
            .blog-medium-up-text-center {
              text-align: center;
            }
          }
        `}
      </style>

      <BlogHeader />

      {/* Render sections for each category */}
      {Object.keys(groupedBlogs).map(category => (
        <BlogSection
          key={category}
          title={category}
          blogs={groupedBlogs[category]}
          settings={sliderSettings}
        />
      ))}

      {/* If no blogs found */}
      {blogs.length === 0 && !loading && (
        <div className="blog-container blog-text-center blog-my-5">
          <p>No blogs found.</p>
        </div>
      )}
    </>
  );
};

export default Blog;