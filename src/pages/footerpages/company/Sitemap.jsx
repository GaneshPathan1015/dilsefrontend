import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    const [windowWidth, setWindowWidth] = useState(1200);

    useEffect(() => {
        // Set initial window width
        setWindowWidth(window.innerWidth);
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Common styles
    const styles = {
        container: {
            fontFamily: '"Times New Roman", serif',
            color: '#0a2239',
            padding: '2rem 0',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        gridContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 -15px'
        },
        menuHeading: {
            fontWeight: '700',
            fontSize: '18px',
            marginBottom: '12px',
            textTransform: 'uppercase'
        },
        menuSubheading: {
            fontWeight: '600',
            fontSize: '15px',
            marginTop: '15px',
            textTransform: 'uppercase'
        },
        menuSection: {
            marginBottom: '20px'
        },
        menuList: {
            listStyle: 'none',
            paddingLeft: '0',
            marginBottom: '10px'
        },
        menuItem: {
            fontSize: '14px',
            color: '#1c1c1c',
            lineHeight: '1.8',
            cursor: 'pointer'
        },
        link: {
            color: 'inherit',
            textDecoration: 'none',
            transition: 'color 0.2s',
            display: 'block'
        },
        innerList: {
            marginLeft: '15px'
        }
    };

    // Responsive column styles
    const getColumnStyle = () => {
        if (windowWidth < 576) {
            return {
                flex: '0 0 100%',
                maxWidth: '100%',
                padding: '0 15px',
                marginBottom: '2rem'
            };
        } else if (windowWidth < 768) {
            return {
                flex: '0 0 50%',
                maxWidth: '50%',
                padding: '0 15px',
                marginBottom: '2rem'
            };
        } else {
            return {
                flex: '0 0 25%',
                maxWidth: '25%',
                padding: '0 15px',
                marginBottom: '2rem'
            };
        }
    };

    const columnStyle = getColumnStyle();

    // Responsive text styles
    const responsiveStyles = { ...styles };
    if (windowWidth < 768) {
        responsiveStyles.menuHeading.fontSize = '16px';
        responsiveStyles.menuSubheading.fontSize = '14px';
        responsiveStyles.menuItem.fontSize = '13px';
        responsiveStyles.menuItem.lineHeight = '1.6';
    }

    if (windowWidth < 576) {
        responsiveStyles.menuHeading.fontSize = '15px';
        responsiveStyles.menuSubheading.fontSize = '13px';
        responsiveStyles.menuItem.fontSize = '12px';
        responsiveStyles.menuItem.lineHeight = '1.5';
    }

    // Hover handler for links
    const handleLinkHover = (e) => {
        e.target.style.color = '#007bff';
        e.target.style.textDecoration = 'underline';
    };

    const handleLinkHoverOut = (e) => {
        e.target.style.color = '';
        e.target.style.textDecoration = '';
    };

    return (
        <div style={responsiveStyles.container}>
            {/* First Row */}
            <div style={responsiveStyles.gridContainer}>
                {/* Fine Jewelry */}
                <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/engagement-rings" style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            ENGAGEMENT RINGS
                        </Link>
                    </h4>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/jewelry-list?category=earrings-1&subcategory=create-your-own-11" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                CREATE YOUR OWN RING
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Setting
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond?menudiamond=natural-diamond" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Natural Diamond
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond?menudiamond=lab-diamond" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Lab Diamond
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond?menudiamond=featured-deals" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Featured Deal Diamond
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    BEST SELLERS
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    NEW ARRIVALS
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings?ready_to_ship=true" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    READY TO SHIP
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=luxe" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    LUXE COLLECTION
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    CUSTOM RINGS
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/home-preview" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    HOME PREVIEW
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/jewelry-list?style=style-Test" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                STYLE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-Solitaire" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Solitaire
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-halo" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Halo
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-vintage" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Vintage
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-side-stone" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Side Stone
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-three-stone" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Three Stone
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-pave" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Pave
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-hidden-halo" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Hidden Halo
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?style=style-luxe" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Luxe
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings/engagement-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                SHAPE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-round" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Round
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-princess" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Princess
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-oval" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Oval
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-cushion" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Cushion
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-emerald" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Emerald
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-pear" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Pear
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-radiant" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Radiant
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?shape=shape-heart" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Heart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings/engagement-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                METAL
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?metal=14K%2520White%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    White Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?metal=14K%2520Yellow%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Yellow Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?metal=14K%2520Rose%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Rose Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings?metal=Platinum" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Platinum
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gifts */}
                <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/engagement-rings/preset-rings" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            PRESET LAB DIAMOND RINGS
                        </Link>
                    </h4>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings/preset-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                STYLE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=solitaire" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Solitaire
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=halo" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Halo
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=vintage" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Vintage
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=side-stone" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Side Stone
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=three-stone" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Three Stone
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=pave" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Pave
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=hidden-halo" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Hidden Halo
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=fancy-color-diamonds" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Fancy Color Diamonds
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=toi-et-moi" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Toi Et Moi
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/style?menustyle=luxe" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Luxe
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings/preset-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                SHAPE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?style=style-round" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Round
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?style=style-princess" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Princess
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?style=style-oval" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Oval
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?style=style-cushion" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Cushion
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?style=style-emerald" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Emerald
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings/preset-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                METAL
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?metal=14K%2520Yellow%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    White Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?metal=14K%2520White%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Yellow Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?metal=14K%2520Rose%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Rose Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/preset-rings?metal=Platinum" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Platinum
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/diamond" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            DIAMONDS
                        </Link>
                    </h4>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/diamond?menudiamond=lab-diamonds" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                LAB DIAMONDS
                            </Link>
                        </h5>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/diamond?menudiamond=lab-diamond" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                SHAPE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=round" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Round
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=princess" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Princess
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=oval" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Oval
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=cushion" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Cushion
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=emerald" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Emerald
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=pear" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Pear
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=asscher" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Asscher
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=marquise" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Marquise
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=radiant" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Radiant
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=heart" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Heart
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/shapes?menushape=others" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Shop All
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/diamond?menudiamond=colored-lab-diamond" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                FANCY COLORED DIAMONDS
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond?menudiamond=colored-lab-diamond" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Search Fancy Colored Diamonds
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings/engagement-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                CREATE YOUR ENGAGEMENT RING
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-rings/engagement-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Setting
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond?menudiamond=natural-diamond" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Natural Diamond
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond?menudiamond=lab-diamond" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Lab Diamond
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond?menudiamond=featured-deals" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Start With A Featured Deal Diamond
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* About Us */}
                <div style={columnStyle}>
                    <div style={responsiveStyles.menuSection}>
                        <h4 style={responsiveStyles.menuHeading}>
                            <Link to="/wedding/womens-wedding-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                WEDDING BANDS
                            </Link>
                        </h4>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/wedding/womens-wedding-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                WOMENS BANDS
                            </Link>
                        </h5>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/wedding/womens-metal-wedding-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                STYLE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-metal-wedding-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Metal Bands
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-anniversary-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Anniversary Bands
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-eternity-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Eternity Bands
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-diamond-wedding-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Diamond Bands
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-wedding-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/wedding/womens-wedding-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                METAL
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-wedding-rings?metal=14K%2520White%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    White Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-wedding-rings?metal=14K%2520Yellow%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Yellow Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-wedding-rings?metal=14K%2520Rose%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Rose Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-wedding-rings?metal=Platinum" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Platinum
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/womens-wedding-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/wedding/mens-wedding-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                MENS BANDS STYLE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/mens-metal-wedding-bands" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Metal Bands
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/mens-diamond-wedding-bands" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Diamond Bands
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/mens-wedding-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/wedding/mens-wedding-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                METAL
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/mens-wedding-rings?metal=14K%2520White%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    White Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/mens-wedding-rings?metal=14K%2520Yellow%2520Gold" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Yellow Gold
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/mens-wedding-rings?metal=Platinum" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Platinum
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/wedding/mens-wedding-rings" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div style={responsiveStyles.gridContainer}>
                {/* Fine Jewelry */}
                <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/jewelry-list" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            FINE JEWELRY
                        </Link>
                    </h4>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/jewelry-list?category=earrings-1" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                EARRINGS
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=earrings-1&subcategory=studs-2" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Studs
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=earrings-1&subcategory=hoops-3" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Hoops
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=earrings-1&subcategory=halo-4" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Halo
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=earrings-1&subcategory=fashion-5" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Fashion
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=earrings-1&subcategory=gemstone-8" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Gemstone
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/jewelry-list?category=necklaces-32" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                NECKLACES
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=necklaces-32&subcategory=halo-33" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Halo
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=necklaces-32&subcategory=solitaire-34" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Solitaire
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=necklaces-32&subcategory=tennis-35" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Tennis
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=necklaces-32&subcategory=fashion-36" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Fashion
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=necklaces-32&subcategory=gemstone-37" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Gemstone
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/jewelry-list?category=rings-22" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                RINGS
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=rings-22&subcategory=anniversary-23" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Anniversary
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=rings-22&subcategory=eternity-24" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Eternity
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=rings-22&subcategory=stackable-25" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Stackable
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=rings-22&subcategory=fashion-26" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Fashion
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=rings-22&subcategory=gemstone-27" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Gemstone
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Shop All
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/jewelry-list?category=bracelets-13" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                BRACELETS
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=bracelets-13&subcategory=tennis-14" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Tennis
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=bracelets-13&subcategory=fashion-18" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Fashion
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings/rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                CREATE YOUR OWN JEWELRY
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=rings-22&subcategory=create-your-own-30" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Create Your Own Ring
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=earrings-1&subcategory=create-your-own-11" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Create Your Own Earrings
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/jewelry-list?category=necklaces-32&subcategory=create-your-own-42" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Create Your Own Necklace
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gifts */}
                <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/collections/jewelry-gifts" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            GIFTS
                        </Link>
                    </h4>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/collections/jewelry-gifts" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                CATEGORY
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/collections/diamond-ring-gifts" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Rings
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/collections/necklace-gifts" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Necklaces
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/collections/earring-gifts" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Earrings
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/collections/bracelet-gifts" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Bracelets
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/collections/jewelry-gifts" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/recipient" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                RECIPIENT
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/for-her" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    For Her
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/for-mom" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    For Mom
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/for-daughter" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    For Daughter
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/for-wife" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    For Wife
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/occasion" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                OCCASION
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/holidays" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Holidays
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/birthdays" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Birthdays
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/anniversary" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Anniversary
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/valentines-day" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Valentine's Day
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/price" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                PRICE
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/under-350" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    under $350
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/under-500" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    under $500
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/under-1000" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    under $1,000
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/shop-all" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    SHOP ALL
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                </div>

                {/* Education */}
                {/* <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/education" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            EDUCATION
                        </Link>
                    </h4>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/diamond" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                DIAMOND
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/4-cs" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    4 C's
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/cut" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Cut
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/clarity" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Clarity
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/carat" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Carat
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/color" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Color
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/lab-diamonds" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Lab Diamonds
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/diamond-shapes" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Diamond Shapes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/engagement-rings" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                ENGAGEMENT RINGS
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-ring-101" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Engagement Ring 101
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/budgeting" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Budgeting
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/ring-size-guide" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Ring Size Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/wedding-bands" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                WEDDING BANDS
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/womens-styles" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Women's Styles
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/mens-styles" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Men's Styles
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/matching-bands-guide" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Matching Bands Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={responsiveStyles.menuSection}>
                        <h5 style={responsiveStyles.menuSubheading}>
                            <Link to="/fine-jewelry" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                FINE JEWELRY
                            </Link>
                        </h5>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/precious-metals" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Precious Metals
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/earrings-guide" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Earrings Guide
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/necklaces-guide" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Necklaces Guide
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/bracelets-guide" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Bracelets Guide
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/gemstones-education" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Gemstones Education
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div> */}

                {/* About Us */}
                {/* <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/about-us" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            ABOUT US
                        </Link>
                    </h4>
                    <ul style={{...responsiveStyles.menuList, ...responsiveStyles.menuSection}}>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/our-story" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                OUR STORY
                            </Link>
                        </li>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/gemologists" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                GEMOLOGISTS
                            </Link>
                        </li>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/contact-us" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                CONTACT US
                            </Link>
                        </li>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/reviews" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                REVIEWS
                            </Link>
                        </li>
                        <ul style={responsiveStyles.innerList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/customer-stories" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Customer Stories
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/in-the-news" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    In the News
                                </Link>
                            </li>
                        </ul>
                    </ul>

                    <h4 style={{...responsiveStyles.menuHeading, marginTop: '2rem'}}>
                        <Link to="/shop-with-confidence" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            SHOP WITH CONFIDENCE
                        </Link>
                    </h4>
                    <ul style={responsiveStyles.menuList}>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/easy-financing" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                Easy Financing
                            </Link>
                        </li>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/home-preview" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                Home Preview
                            </Link>
                        </li>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/free-shipping" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                Free Shipping
                            </Link>
                        </li>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/free-returns" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                Free Returns
                            </Link>
                        </li>
                        <li style={responsiveStyles.menuItem}>
                            <Link to="/lifetime-warranty" 
                                  style={responsiveStyles.link}
                                  onMouseEnter={handleLinkHover}
                                  onMouseLeave={handleLinkHoverOut}>
                                Lifetime Warranty
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>

            {/* Third Row */}
            <div style={responsiveStyles.gridContainer}>
                {/* The Luxe Collection */}
                {/* <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/luxe" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            The Luxe Collection
                        </Link>
                    </h4>
                    <div style={responsiveStyles.menuSection}>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/engagement-wedding" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Engagement & Wedding
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/haute" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Haute
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div> */}

                {/* Collections */}
                {/* <div style={columnStyle}>
                    <h4 style={responsiveStyles.menuHeading}>
                        <Link to="/collections" 
                              style={responsiveStyles.link}
                              onMouseEnter={handleLinkHover}
                              onMouseLeave={handleLinkHoverOut}>
                            COLLECTIONS
                        </Link>
                    </h4>
                    <div style={responsiveStyles.menuSection}>
                        <ul style={responsiveStyles.menuList}>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/toi-et-moi" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Toi Et Moi
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/celestia" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Celestia
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/hint-of-blue" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Hint Of Blue
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/galleria" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Galleria
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/platinum" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    Platinum
                                </Link>
                            </li>
                            <li style={responsiveStyles.menuItem}>
                                <Link to="/the-ceramic-series" 
                                      style={responsiveStyles.link}
                                      onMouseEnter={handleLinkHover}
                                      onMouseLeave={handleLinkHoverOut}>
                                    The Ceramic Series
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Sitemap;