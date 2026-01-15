import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dilsejewels.com/api/api/blogs/${slug}`);

        if (!response.ok) {
          throw new Error('Blog not found');
        }

        const data = await response.json();

        if (data.status && data.data) {
          setBlog(data.data);
        } else {
          throw new Error(data.message || 'Blog not found');
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug]);

  // ✅ Navigation Menu Component
  const BlogNavigation = () => {
    return (
      <div className="blog-nav blog-medium-up-text-center blog-small-text-left">
        <nav className="blog-flex-md">
          <div className="blog-border-top blog-border-bottom blog-bg-white">
            <div className="blog-container">
              <ul className="blog-d-flex blog-justify-content-center blog-list-unstyled blog-mb-0 blog-topmenu">
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="/blog" className="blog-menu-link">
                    ENGAGEMENT RINGS
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="/blog" className="blog-menu-link">
                    GEMSTONE INSIGHTS
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="/blog" className="blog-menu-link">
                    WEDDING BANDS
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="/blog" className="blog-menu-link">
                    METAL
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="/blog" className="blog-menu-link">
                    BUYING GUIDES
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="/blog" className="blog-menu-link">
                    DIAMOND
                  </Link>
                </li>
                <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                  <Link to="/blog" className="blog-menu-link">
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

  // ✅ Header Component
  const BlogHeader = () => {
    return (
      <section className="blog-py-5 blog-bg-light">
        <div className="blog-container blog-header blog-text-center">
          <nav aria-label="breadcrumb">
            <ol className="blog-breadcrumb blog-justify-content-start blog-mb-3">
              <li className="blog-breadcrumb-item">
                <Link to="/">Home/</Link>
              </li>
              <li className="blog-breadcrumb-item">
                <Link to="/blog">Blog/</Link>
              </li>
              <li className="blog-breadcrumb-item blog-active" aria-current="page">
                {blog?.title || 'Blog Detail'}
              </li>
            </ol>
          </nav>

          <h1 className="blog-header-heading">{blog?.title || 'Blog Detail'}</h1>

          <BlogNavigation />
        </div>
      </section>
    );
  };

  if (loading) return (
    <div className="blog-container blog-text-center blog-my-5">
      <p>Loading blog...</p>
    </div>
  );

  if (error || !blog) return (
    <div className="blog-container blog-text-center blog-my-5">
      <p style={{ color: 'red' }}>Error: {error || 'Blog not found!'}</p>
      <p>API Endpoint: https://dilsejewels.com/api/api/blogs/{slug}</p>
      <Link
        to="/blog"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#1d3348',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        ← Back to Blogs
      </Link>
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

          .blog-header-heading{
            color: #1d3348;
            font-size: 44px;
            line-height: 54px;
          }

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

          .blog-detail-image {
            width: 100%;
            max-height: 500px;
            object-fit: contain;
            border-radius: 10px;
            margin: 30px 0;
          }

          .blog-detail-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 15px 20px;
          }

          .blog-detail-content h1,
          .blog-detail-content h2,
          .blog-detail-content h3,
          .blog-detail-content h4,
          .blog-detail-content h5,
          .blog-detail-content h6 {
            color: #1d3348;
            margin: 20px 0 10px 0;
          }

          .blog-detail-content p {
            font-size: 18px;
            line-height: 1.6;
            color: #333;
            margin-bottom: 20px;
          }

          .blog-detail-content ul,
          .blog-detail-content ol {
            margin: 20px 0;
            padding-left: 20px;
          }

          .blog-detail-content li {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 10px;
          }

          .blog-meta-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 30px 0;
            text-align: center;
          }

          .blog-meta-item {
            display: inline-block;
            margin: 0 15px;
            color: #707070;
            font-size: 14px;
          }

          .blog-meta-item strong {
            color: #1d3348;
            display: block;
            font-size: 16px;
            margin-bottom: 5px;
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
            
            .blog-detail-content {
              padding: 0 10px;
            }
            
            .blog-detail-content p {
              font-size: 16px;
            }
            
            .blog-meta-item {
              display: block;
              margin: 10px 0;
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

      {/* Blog Content Section */}
      <section className="blog-py-5">
        <div className="blog-container">
          <div className="blog-row">
            <div className="blog-col-12">
              {/* ✅ FIXED: Using getImageUrl function here */}

              <img
                src={getImageUrl(blog.image_url)}
                alt={blog.title}
                className="blog-detail-image"

              />


              {/* Blog Meta Information */}
              <div className="blog-meta-info">
                <div className="blog-meta-item">
                  <strong>Category</strong>
                  {blog.category}
                </div>
                <div className="blog-meta-item">
                  <strong>Writer</strong>
                  {blog.writer_name}
                </div>
                <div className="blog-meta-item">
                  <strong>Published</strong>
                  {blog.publish_date}
                </div>
                <div className="blog-meta-item">
                  <strong>Read Time</strong>
                  {blog.read_time}
                </div>
              </div>

              {/* Blog Content */}
              <div
                className="blog-detail-content"
                dangerouslySetInnerHTML={{ __html: blog.paragraph }}
              />

              {/* Back to Blogs Link */}
              <div className="blog-text-center blog-mt-5">
                <Link
                  to="/blog"
                  style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    backgroundColor: '#1d3348',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                >
                  ← Back to All Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;