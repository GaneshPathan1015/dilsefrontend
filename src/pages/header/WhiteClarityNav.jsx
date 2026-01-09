import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../cart/CartContext";
import AppointmentModal from "../appointmentModal/AppointmentModal";
import MegaMenu from "../mega-menu/megaMenu";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useMegaMenu } from "../../context/MegaMenuContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import "./whiteClarityNav.css";

const slugify = (text = "") =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

const WhiteClarityNav = () => {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/"; // Check if on homepage
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveringMegaMenu, setHoveringMegaMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headerRef = useRef(null);
  const menuBarRef = useRef(null);
  const itemRefs = useRef({});

  const {
    mainCategories,
    categoryMap,
    collections,
    styles,
    shapes,
    loadingJewelry,
    loadingEngagement,
  } = useMegaMenu();

  const dynamicJewelrySubmenu = !loadingJewelry
    ? mainCategories.map((main) => ({
        ...main, // Keep the full main category object
        title: main.name,
        items: categoryMap[main.name] || [], // Store full sub-object array
      }))
    : [];

  const jewelryCollectionsSubmenu = {
    title: "COLLECTIONS",
    // 'collections' comes from your useMegaMenu() hook
    items: collections || [],
  };

  const giftsMenuData = [
    {
      title: "CATEGORY",
      items: [
        { label: "Rings", slug: "diamond-ring-gifts" },
        { label: "Necklaces", slug: "necklace-gifts" },
        { label: "Earrings", slug: "earring-gifts" },
        { label: "Bracelets", slug: "bracelet-gifts" },
        { label: "SHOP ALL", slug: "jewelry-gifts", className: "fw-bold mt-2" },
      ],
    },
    {
      title: "PRICE",
      items: [
        { label: "Under $500", slug: "gifts-under-500" },
        { label: "Under $1000", slug: "gifts-under-1000" },
        { label: "Under $1500", slug: "gifts-under-1500" },
      ],
    },
    {
      title: "COLLECTIONS",
      items: [
        { label: "Bouquet", slug: "bouquet" },
        { label: "Toi et Moi", slug: "toi-et-moi-collection" },
        { label: "Vine", slug: "vine-collection" },
      ],
    },
    {
      title: "DISCOVER MORE",
      items: [
        { label: "Most Loved", slug: "incredible-value" },
        { label: "Gift Sets", slug: "jewelry-gift-sets" },
        { label: "Ready to Ship", slug: "ready-to-ship-diamond-jewelry-gifts" },
        { label: "For Him", slug: "jewelry-gifts-for-him" },
        { label: "Gift Cards", slug: "caratcasa-gift-card" },
      ],
    },
  ];

  const menuData = {
    WEDDING: {
      links: [],
      image: "",
    },
    DIAMONDS: {
      links: [],
      image: "",
    },
    "HIGH JEWELRY": { links: [], image: "" },
    COLLECTIONS: { links: [], image: "" },
    GIFTS: { links: [], image: "" },
    SALE: { links: [], image: "" },
  };

  const menuDatab = [
    {
      label: "Engagement",
      submenu: [
        {
          title: "START WITH A SETTING",
          items: [],
          hasToggle: true,
          children: [
            {
              title: "STYLE",
              items: styles.map((style) => style.psc_name),
            },
            {
              title: "SHAPE",
              items: shapes.map((shape) => shape.name),
            },
          ],
        },
        {
          title: "START WITH A DIAMOND",
          items: [
            "Lab Diamond",
            "Natural Diamond",
            "Colored Lab Diamond",
            "Featured Deals",
          ],
          hasToggle: true,
        },
        {
          title: "PRESET ENGAGEMENT RINGS",
          items: [],
          hasToggle: true,
          children: [
            {
              title: "STYLE",
              items: styles.map((style) => style.psc_name),
            },
            {
              title: "SHAPE",
              items: shapes.map((shape) => shape.name),
            },
          ],
        },
        {
          title: "FEATURED",
          items: [
            "Cassatt",
            "Windsor",
            "W Signature",
            "Fully Custom",
            "New Arrivals",
            "Ready To Ship",
            "Easy To Ship",
            "Home Preview",
          ],
        },
      ],
    },
    {
      label: "Wedding",
      submenu: [
        {
          title: "Women’s Bands",
          // This slug is for clicking the title itself
          titleSlug: "womens-wedding-rings",
          items: [
            { label: "Anniversary Rings", slug: "womens-anniversary-rings" },
            { label: "Eternity Rings", slug: "womens-eternity-rings" },
            { label: "Metal Bonds", slug: "womens-metal-wedding-rings" },
            { label: "Diamond Bonds", slug: "womens-diamond-wedding-rings" },
            // Add the "Shop all" link from your desktop component
            {
              label: "Shop all",
              slug: "womens-wedding-rings",
              className: "fw-bold mt-2",
            },
          ],
        },
        {
          title: "Men’s Bands",
          // This slug is for clicking the title itself
          titleSlug: "mens-wedding-rings",
          items: [
            { label: "Metal Bonds", slug: "mens-metal-wedding-bands" },
            { label: "Diamond Bonds", slug: "mens-diamond-wedding-bands" },
            // Add the "Shop all" link from your desktop component
            {
              label: "Shop all",
              slug: "mens-wedding-rings",
              className: "fw-bold mt-2",
            },
          ],
        },
      ],
    },
    {
      label: "Diamonds",
      submenu: [
        {
          title: "Lab Diamonds",
          items: ["Explore Lab Diamonds", "Explore Colored Lab Diamonds"],
        },
        { title: "Fall Sale", items: [] },
        { title: "Clarity Plus™ Diamonds", items: [] },
        { title: "Natural Diamonds", items: [] },
        { title: "Create Your Own Ring", items: [] },
        {
          title: "",
          items: [
            "Lab Diamond",
            "Natural Diamond",
            "Colored Lab Diamond",
            "Featured Deal Diamond",
          ],
        },
        {
          title: "Price",
          items: [
            "Under $2000",
            "$2000 - $4000",
            "$4000 - $6000",
            "$6000 - $8000",
            "$8000+",
          ],
        },
        {
          title: "Carat",
          items: [
            "1 to 2 ct.",
            "2 to 3 ct.",
            "3 to 4 ct.",
            "4 to 6 ct.",
            "6 ct. & Above",
          ],
        },
      ],
    },
    {
      label: "High Jewelry",
      submenu: ["Luxe", "The Reserve"],
    },
    {
      label: "Jewelry",
      submenu: [...dynamicJewelrySubmenu, jewelryCollectionsSubmenu],
    },
    {
      label: "Collections",
      submenu: [
        {
          title: "Art Deco",
          items: [
            "Wave",
            "W Signature",
            "Fully Custom",
            "New Arrivals",
            "Best Sellers",
            "Ready To Ship",
            "Home Preview",
          ],
        },
      ],
    },
    {
      label: "Gifts",
      submenu: giftsMenuData,
    },
    { label: "Sale" },
  ];

  const menuItems = [
    "ENGAGEMENT",
    "WEDDING",
    "DIAMONDS",
    "HIGH JEWELRY",
    "JEWELRY",
    "COLLECTIONS",
    "GIFTS",
    "SALE",
  ];

  const menuRoutes = {
    ENGAGEMENT: "/engagement",
    WEDDING: "/wedding-brands",
    DIAMONDS: "/diamond",
    "HIGH JEWELRY": "/page/luxe-collection-engagement-rings-and-wedding-bands",
    JEWELRY: "/jewelry-list",
    COLLECTIONS: "/collections",
    GIFTS: "/collections/jewelry-gifts",
    SALE: "/collections/diamond-jewelry-sale",
  };

  const handleRedirect = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  };

  const [openMenus, setOpenMenus] = useState({ Gifts: false });

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      // 1. If we are moving inside the Mega Menu itself, stay open
      const megaMenuContent = document.querySelector(".mega-menu-overlay");
      if (megaMenuContent && megaMenuContent.contains(e.target)) {
        setHoveringMegaMenu(true);
        return;
      }

      const menuBarRect = menuBarRef.current?.getBoundingClientRect();
      if (!menuBarRect) return;

      let foundInsideAny = false;
      let hoveredItemName = null;

      // 2. Loop through all menu items
      for (const item of menuItems) {
        const element = itemRefs.current[item];
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // Check if mouse is within the specific item's "Safe Box"
        // Using 25px for sides and 3px for top/bottom as you requested
        const inXRange =
          e.clientX >= rect.left - 25 && e.clientX <= rect.right + 25;
        const inYRange =
          e.clientY >= rect.top - 3 && e.clientY <= rect.bottom + 3;

        if (inXRange && inYRange) {
          foundInsideAny = true;
          hoveredItemName = item;
          break;
        }
      }

      // 3. ACTION LOGIC
      if (foundInsideAny) {
        if (hoveredItemName === "SALE") {
          // If over SALE, close any open mega menu immediately
          setHoveredMenu(null);
          setHoveringMegaMenu(false);
        } else if (hoveredMenu !== hoveredItemName) {
          // Auto-open/Switch to the new menu
          setHoveredMenu(hoveredItemName);
          setHoveringMegaMenu(true);
        }
      } else {
        // 4. STRICT SIDE & TOP CLOSE
        // Close if mouse is not in ANY item box AND:
        // - Above the menu bar links
        // - To the far left of the first item box
        // - To the far right of the last item box
        const isAbove = e.clientY < menuBarRect.top - 3;

        // Find boundaries of the first and last actual items in the list
        const firstItemRect =
          itemRefs.current[menuItems[0]]?.getBoundingClientRect();
        const lastItemRect =
          itemRefs.current[
            menuItems[menuItems.length - 1]
          ]?.getBoundingClientRect();

        const isTooFarLeft =
          firstItemRect && e.clientX < firstItemRect.left - 25;
        const isTooFarRight =
          lastItemRect && e.clientX > lastItemRect.right + 25;

        if (isAbove || isTooFarLeft || isTooFarRight) {
          setHoveredMenu(null);
          setHoveringMegaMenu(false);
        }
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [hoveredMenu, menuItems]);

  useEffect(() => {
    const handleScroll = () => {
      setHoveredMenu(null); // Close any open mega menu
      setHoveringMegaMenu(false); // Stop hovering effect
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  // Engagement
  const handleMobileStartEngagement = (startType) => {
    setSidebarOpen(false);
    navigate(`/engagement-rings/${startType}`);
  };

  const handleMobileItemClick = (item) => {
    const slug = "";
    const params = new URLSearchParams();

    if (item.label.toLowerCase() === "ready to ship") {
      params.set("ready_to_ship", "true");
    }

    setSidebarOpen(false);
    navigate({
      pathname: slug ? `/engagement-rings/${slug}` : `/engagement-rings`,
      search: params.toString(),
    });
  };

  // For Engagement -> STYLE
  const handleMobileStyleClick = (style) => {
    const slug = "style";
    const styleSlug = style.psc_name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menustyle", styleSlug);

    setSidebarOpen(false);
    navigate({
      pathname: `/engagement-rings/${slug}`,
      search: params.toString(),
    });
  };

  // For Engagement -> SHAPE
  const handleMobileShapeClick = (shape) => {
    const slug = "shapes";
    const shapeSlug = shape.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menushape", shapeSlug);

    setSidebarOpen(false);
    navigate({
      pathname: `/engagement-rings/${slug}`,
      search: params.toString(),
    });
  };

  // wedding
  const handleStartWedding = (startType) => {
    setSidebarOpen(false);
    navigate(`/wedding/${startType}`);
  };

  // diamonds
  const handleMobileDiamondClick = (item) => {
    const itemSlug = item.name.toLowerCase().replace(/\s+/g, "-");
    const params = new URLSearchParams();
    params.set("menudiamond", itemSlug);

    setSidebarOpen(false);
    navigate({
      pathname: `/diamond`,
      search: params.toString(),
    });
  };

  // high jewellry
  const handleMobileHighJewelryClick = (itemLabel) => {
    setSidebarOpen(false);
    const normalizedLabel = itemLabel.toLowerCase();

    if (normalizedLabel === "luxe") {
      navigate("/luxe");
    } else if (normalizedLabel === "the reserve") {
      navigate("/reserve");
    }
  };

  // jewelry
  const handleMobileJewelryClick = (main, sub = null) => {
    const mainParam = `${slugify(main.name)}-${main.id}`;
    const subParam = sub ? `${slugify(sub.name)}-${sub.id}` : null;

    const params = new URLSearchParams();
    params.set("category", mainParam);
    if (subParam) params.set("subcategory", subParam);

    setSidebarOpen(false);
    navigate(`/jewelry-list?${params.toString()}`);
  };

  const handleMobileCollectionClick = (collection) => {
    const rawName = collection.name || "";
    const normalizedName = rawName.trim().toLowerCase();

    const staticCollectionRoutes = {
      luxe: "/luxe",
      "the reserve": "/reserve",
      "w signature": "/signature",
    };

    setSidebarOpen(false);

    if (staticCollectionRoutes[normalizedName]) {
      navigate(staticCollectionRoutes[normalizedName]);
    } else {
      const slug = `${slugify(rawName)}-${collection.id}`;
      const params = new URLSearchParams();
      params.set("menucollection", slug);
      navigate(`/jewelry-list?${params.toString()}`);
    }
  };

  const handleMobilePriceFilter = (min, max) => {
    setSidebarOpen(false);
    navigate(`/diamond?price_min=${min}&price_max=${max}`);
  };

  const handleMobileCaratFilter = (min, max) => {
    setSidebarOpen(false);
    navigate(`/diamond?carat_min=${min}&carat_max=${max}`);
  };

  // It will call the correct handler based on the item clicked
  const handleMobileDiamondMenuClick = (title, itemString) => {
    // --- Handle Price Filters ---
    if (title === "Price") {
      switch (itemString) {
        case "Under $2000":
          handleMobilePriceFilter(0, 2000);
          break;
        case "$2000 - $4000":
          handleMobilePriceFilter(2000, 4000);
          break;
        case "$4000 - $6000":
          handleMobilePriceFilter(4000, 6000);
          break;
        case "$6000 - $8000":
          handleMobilePriceFilter(6000, 8000);
          break;
        case "$8000+":
          handleMobilePriceFilter(8000, 10000);
          break; // Matches desktop logic
        default:
          break;
      }
      return; // Stop execution
    }

    // --- Handle Carat Filters ---
    if (title === "Carat") {
      switch (itemString) {
        case "1 to 2 ct.":
          handleMobileCaratFilter(1, 2);
          break;
        case "2 to 3 ct.":
          handleMobileCaratFilter(2, 3);
          break;
        case "3 to 4 ct.":
          handleMobileCaratFilter(3, 4);
          break;
        case "4 to 6 ct.":
          handleMobileCaratFilter(4, 6);
          break;
        case "6 ct. & Above":
          handleMobileCaratFilter(6, 20);
          break; // Matches desktop logic
        default:
          break;
      }
      return; // Stop execution
    }

    // --- Handle Diamond Type Clicks ---
    // This covers "Lab Diamonds" title and the untitled ("") section
    switch (itemString) {
      case "Explore Lab Diamonds":
        handleMobileDiamondClick({ name: "Lab Diamonds" });
        break;
      case "Explore Colored Lab Diamonds":
        handleMobileDiamondClick({ name: "Colored Lab Diamond" });
        break;
      case "Lab Diamond":
        handleMobileDiamondClick({ name: "Lab Diamond" });
        break;
      case "Natural Diamond":
        handleMobileDiamondClick({ name: "Natural Diamond" });
        break;
      case "Colored Lab Diamond":
        handleMobileDiamondClick({ name: "Colored Lab Diamond" });
        break;
      case "Featured Deal Diamond":
        handleMobileDiamondClick({ name: "Featured Deals" });
        break; // Matches desktop logic
      default:
        break;
    }
  };

  // gift
  const handleStartGift = (startType) => {
    setSidebarOpen(false);
    navigate(`/collections/${startType}`);
  };

  // collection
  const staticCollectionRoutes = {
    "w signature": "/signature",
  };

  // --- Add this new handler for the static "Collections" menu items ---
  const handleMobileCollectionItemClick = (itemLabel) => {
    const normalizedLabel = itemLabel.toLowerCase();
    const staticRoute = staticCollectionRoutes[normalizedLabel];

    setSidebarOpen(false);

    if (staticRoute) {
      // Case 1: Static route (e.g., "W Signature" -> "/signature")
      navigate(staticRoute);
    } else if (normalizedLabel === "ready to ship") {
      // Case 2: Special case for "Ready To Ship"
      // Navigates to the main collections page with a param
      navigate(`/collections?ready_to_ship=true`);
    } else {
      // Case 3: Fallback for "Wave", "Fully Custom", etc.
      // Navigates to a slugged collection page, e.g., /collections/wave
      const slug = slugify(itemLabel); // Relies on slugify helper
      navigate(`/collections/${slug}`);
    }
  };

  return (
    <>
      <div className="top-bar">
        <strong>FREE INSURED SHIPPING & RETURNS | LIFETIME WARRANTY</strong>
      </div>
      <header
        ref={headerRef}
        className={`main-header ${
          isHome
            ? scrolled || hoveringMegaMenu
              ? "fixed-header scrolled"
              : "fixed-header"
            : "sticky-header"
        }`}
      >
        <nav className="nav-container">
          <div className="nav-left">
            <Button
              className="hamburger-btn custom-color-btn"
              variant={undefined}
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </Button>
            <button
              className="appointment-btn"
              style={{ color: "inherit" }}
              onClick={() => setIsModalOpen(true)}
            >
              <CalendarMonthOutlinedIcon />
              <span className="text">Book an Appointment</span>
            </button>
          </div>
          {/* Render the modal */}
          <AppointmentModal
            isOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClose={() => setIsModalOpen(false)} // Pass the function to close it
          />
          <div className="nav-logo">
            <Link to={"/"}>
              <img
                src={
                  isHome
                    ? scrolled
                      ? "/images/logo-23.png"
                      : "/images/logo.png"
                    : "/images/logo-23.png"
                }
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </Link>
          </div>
          <div className="nav-right d-flex align-items-center gap-3">
            {/* <div className="icon-text d-flex align-items-center gap-1">
              <CallOutlinedIcon />
              <span className="text">1.844.234.6463</span>
            </div> */}
            <Link
              to="tel:18442346463"
              className="icon-text d-flex align-items-center gap-1"
              style={{
                color: isHome ? (scrolled ? "#000" : "#fff") : "#000",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              {/* <span className="material-symbols-outlined">call</span> */}
              <CallOutlinedIcon style={{ color: "inherit" }} />
              <span className="text">1.844.234.6463</span>
            </Link>

            <div
              className="icon-text d-flex align-items-center gap-1"
              onClick={handleRedirect}
              style={{ cursor: "pointer" }}
            >
              {/* <span className="material-symbols-outlined">person</span> */}
              <PersonOutlinedIcon />
              <span className="text">
                {user ? `Hi, ${user.name || "User"}` : "SIGN IN / UP"}
              </span>
            </div>

            <div className="icon-text d-flex align-items-center gap-1 position-relative">
              <Link
                to="/cart"
                className="text-decoration-none text-current d-flex align-items-center"
                style={{ color: "inherit" }}
              >
                {/* <span className="material-symbols-outlined">local_mall</span> */}
                <LocalMallOutlinedIcon />
              </Link>
              {cartItems.length > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.75rem" }}
                >
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </nav>

        {/* Desktop Menu Bar */}
        <div className="menu-bar desktop-menu" ref={menuBarRef}>
          {menuItems.map((item, i) => {
            const isCollection = item === "COLLECTIONS";
            const isActive = location.pathname === menuRoutes[item];

            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[item] = el)}
                className={`menu-item ${isActive ? "active" : ""}`}
                /* onMouseEnter={() => {
                  setHoveredMenu(item);
                  setHoveringMegaMenu(true);
                }} */
                onClick={() => {
                  if (!isCollection) {
                    navigate(menuRoutes[item] || "/");
                  }
                }}
                style={{
                  cursor: isCollection ? "default" : "pointer",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </header>

      {/* Mega Menu (Desktop only) */}

      {hoveredMenu && hoveredMenu !== "SALE" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null);
          }}
        >
          <MegaMenu
            type={
              hoveredMenu === "ENGAGEMENT"
                ? "engagement"
                : hoveredMenu === "WEDDING"
                ? "wedding"
                : hoveredMenu === "DIAMONDS"
                ? "diamond"
                : hoveredMenu === "HIGH JEWELRY"
                ? "highJewelry"
                : hoveredMenu === "JEWELRY"
                ? "jewelry"
                : hoveredMenu === "COLLECTIONS"
                ? "collection"
                : hoveredMenu === "GIFTS"
                ? "gift"
                : null
            }
            closeMegaMenu={() => setHoveredMenu(null)}
          />
        </div>
      )}
      {/* {hoveredMenu === "ENGAGEMENT" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => {
            setHoveringMegaMenu(true);
          }}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu
            type="engagement"
            closeMegaMenu={() => setHoveredMenu(null)}
          />
        </div>
      )}

      {hoveredMenu === "WEDDING" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="wedding" closeMegaMenu={() => setHoveredMenu(null)} />
        </div>
      )}

      {hoveredMenu === "DIAMONDS" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="diamond" closeMegaMenu={() => setHoveredMenu(null)} />
        </div>
      )}

      {hoveredMenu === "HIGH JEWELRY" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu
            type="highJewelry"
            closeMegaMenu={() => setHoveredMenu(null)}
          />
        </div>
      )}

      {hoveredMenu === "JEWELRY" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="jewelry" closeMegaMenu={() => setHoveredMenu(null)} />
        </div>
      )}

      {hoveredMenu === "COLLECTIONS" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu
            type="collection"
            closeMegaMenu={() => setHoveredMenu(null)}
          />
        </div>
      )}

      {hoveredMenu === "GIFTS" && (
        <div
          className={`mega-menu-overlay ${scrolled ? "scrolled-menu" : ""}`}
          onMouseEnter={() => setHoveringMegaMenu(true)}
          onMouseLeave={() => {
            setHoveringMegaMenu(false);
            setHoveredMenu(null); // Close on mouse leave
          }}
        >
          <MegaMenu type="gift" closeMegaMenu={() => setHoveredMenu(null)} />
        </div>
      )} */}

      {/* Static menus */}
      {/* {menuItems
        .filter((item) => item !== "ENGAGEMENT" && item !== "JEWELRY")
        .map(
          (item) =>
            hoveredMenu === item &&
            menuData[item] &&
            menuData[item].links.length > 0 && (
              <div
                key={item}
                className={`mega-menu-overlay ${
                  scrolled ? "scrolled-menu" : ""
                }`}
                onMouseEnter={() => setHoveredMenu(item)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="mega-content">
                  <div className="links">
                    <h4>{item}</h4>
                    <ul>
                      {menuData[item].links.map((link, idx) => (
                        <li key={idx}>{link}</li>
                      ))}
                    </ul>
                  </div>
                  {menuData[item].image && (
                    <div className="image">
                      <img src={menuData[item].image} alt={item} />
                    </div>
                  )}
                </div>
              </div>
            )
        )
      } */}

      {/* Mobile Sidebar */}
      <div className={`sidebar-man ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">CARAT CASA</span>
          <Button
            className="close-btn custom-color-btn"
            variant={undefined}
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </Button>
        </div>

        <div className="mobile-sidebar-menu">
          {menuDatab.map((menu, idx) => {
            const hasSubmenu = menu.submenu !== undefined;
            const routeKey = menu.label.toUpperCase();
            const isOpen = openMenus[menu.label];

            return (
              <div className="mobile-menu-item" key={idx}>
                <div className="mobile-menu-header">
                  <span
                    className="mobile-menu-label"
                    onClick={() => {
                      if (menuRoutes[routeKey]) {
                        navigate(menuRoutes[routeKey]);
                        setSidebarOpen(false);
                      }
                    }}
                  >
                    {menu.label}
                  </span>

                  {hasSubmenu && (
                    <button
                      className="mobile-menu-toggle"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu(menu.label);
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {hasSubmenu && isOpen && (
                  <div className="mobile-menu-submenu">
                    {menu.submenu.map((submenuItem, sidx) => {
                      // --- Handles submenus with titles and item arrays ---
                      if (
                        submenuItem &&
                        typeof submenuItem === "object" &&
                        submenuItem.items
                      ) {
                        const subIsOpen = openMenus[submenuItem.title];

                        // --- Logic for clickable titles ---
                        let titleClickHandler = () => {};
                        let titleIsClickable = false;

                        if (menu.label === "Wedding" && submenuItem.titleSlug) {
                          titleIsClickable = true;
                          titleClickHandler = () =>
                            handleStartWedding(submenuItem.titleSlug);
                        } else if (menu.label === "Engagement") {
                          if (submenuItem.title === "START WITH A SETTING") {
                            titleIsClickable = true;
                            titleClickHandler = () =>
                              handleMobileStartEngagement("rings");
                          } else if (
                            submenuItem.title === "PRESET ENGAGEMENT RINGS"
                          ) {
                            titleIsClickable = true;
                            titleClickHandler = () =>
                              handleMobileStartEngagement("preset-rings");
                          }
                        } else if (menu.label === "Jewelry") {
                          if (submenuItem.title !== "COLLECTIONS") {
                            titleIsClickable = true;
                            titleClickHandler = () =>
                              handleMobileJewelryClick(submenuItem, null);
                          }
                        }

                        return (
                          <div key={sidx}>
                            <div className="sub-menu-header">
                              {submenuItem.title && (
                                <div
                                  className="mobile-menu-label"
                                  onClick={titleClickHandler}
                                  style={
                                    titleIsClickable
                                      ? { cursor: "pointer" }
                                      : {}
                                  }
                                >
                                  {submenuItem.title}
                                </div>
                              )}

                              {submenuItem.hasToggle && (
                                <button
                                  className="mobile-menu-toggle"
                                  onClick={() => toggleMenu(submenuItem.title)}
                                >
                                  {subIsOpen ? "−" : "+"}
                                </button>
                              )}
                            </div>

                            {(!submenuItem.hasToggle || subIsOpen) && (
                              <>
                                {/* Level 1 items (All Menus) */}
                                {submenuItem.items?.length > 0 && (
                                  <div className="submenu-items">
                                    {submenuItem.items.map((item, iidx) => (
                                      <div
                                        className={`mobile-submenu-item ${
                                          menu.label === "Gifts" ||
                                          menu.label === "Wedding"
                                            ? item.className || ""
                                            : ""
                                        }`}
                                        key={iidx}
                                        onClick={() => {
                                          // --- START: MASTER CLICK LOGIC ---
                                          if (menu.label === "Gifts") {
                                            handleStartGift(item.slug);
                                          } else if (menu.label === "Wedding") {
                                            handleStartWedding(item.slug);
                                          } else if (menu.label === "Jewelry") {
                                            if (
                                              submenuItem.title ===
                                              "COLLECTIONS"
                                            ) {
                                              handleMobileCollectionClick(item);
                                            } else {
                                              handleMobileJewelryClick(
                                                submenuItem,
                                                item
                                              );
                                            }
                                          } else if (
                                            menu.label === "Diamonds"
                                          ) {
                                            handleMobileDiamondMenuClick(
                                              submenuItem.title,
                                              item
                                            );
                                          } else if (
                                            menu.label === "Engagement"
                                          ) {
                                            if (
                                              submenuItem.title ===
                                              "START WITH A DIAMOND"
                                            ) {
                                              handleMobileDiamondClick({
                                                name: item,
                                              });
                                            } else if (
                                              submenuItem.title === "FEATURED"
                                            ) {
                                              handleMobileItemClick({
                                                label: item,
                                              });
                                            }
                                          } else if (
                                            menu.label === "Collections"
                                          ) {
                                            handleMobileCollectionItemClick(
                                              item
                                            );
                                          } else if (
                                            typeof item === "string" &&
                                            menuRoutes[item.toUpperCase()]
                                          ) {
                                            navigate(
                                              menuRoutes[item.toUpperCase()]
                                            );
                                            setSidebarOpen(false);
                                          }
                                          // --- END: MASTER CLICK LOGIC ---
                                        }}
                                      >
                                        {/** --- Display logic for all types --- */}
                                        {menu.label === "Gifts" ||
                                        menu.label === "Wedding"
                                          ? item.label
                                          : item.name || item}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Level 2 children (Engagement: STYLE & SHAPE) */}
                                {submenuItem.children?.map((child, cidx) => {
                                  const alwaysOpen =
                                    child.title === "STYLE" ||
                                    child.title === "SHAPE";
                                  const childIsOpen =
                                    alwaysOpen || openMenus[child.title];

                                  return (
                                    <div key={cidx} className="child-section">
                                      <div className="child-header">
                                        <span className="child-title">
                                          {child.title}
                                        </span>
                                      </div>

                                      {child.items?.length > 0 &&
                                        childIsOpen && (
                                          <div className="submenu-items">
                                            {child.items.map((citem, ciidx) => (
                                              <div
                                                className="mobile-submenu-item"
                                                key={ciidx}
                                                onClick={() => {
                                                  if (child.title === "STYLE") {
                                                    const styleObject =
                                                      styles.find(
                                                        (s) =>
                                                          s.psc_name === citem
                                                      );
                                                    if (styleObject)
                                                      handleMobileStyleClick(
                                                        styleObject
                                                      );
                                                  } else if (
                                                    child.title === "SHAPE"
                                                  ) {
                                                    const shapeObject =
                                                      shapes.find(
                                                        (s) => s.name === citem
                                                      );
                                                    if (shapeObject)
                                                      handleMobileShapeClick(
                                                        shapeObject
                                                      );
                                                  }
                                                }}
                                              >
                                                {citem}
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                    </div>
                                  );
                                })}
                              </>
                            )}
                          </div>
                        );
                      }

                      // --- Handles simple string submenus (e.g., High Jewelry) ---
                      if (typeof submenuItem === "string") {
                        return (
                          <div
                            className="mobile-submenu-item"
                            key={sidx}
                            onClick={() => {
                              // --- NEW: High Jewelry Logic ---
                              if (menu.label === "High Jewelry") {
                                handleMobileHighJewelryClick(submenuItem);
                              }
                            }}
                          >
                            {submenuItem}
                          </div>
                        );
                      }

                      return null; // Fallback
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WhiteClarityNav;
