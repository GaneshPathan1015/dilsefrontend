import React from 'react';
import { Link } from 'react-router-dom';

const Gemstones = () => {
    // Main styles object
    const styles = {
        // Global
        page: {
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            lineHeight: '1.6',
            color: '#333',
            backgroundColor: '#fff'
        },
        
        // Hero Section
        hero: {
            backgroundImage: 'url("/images/gemstone/edu-gemstone-banner-desk_2x_5340143f-b3b2-430b-8b6e-f668c1c99dbe_4096x.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            width: '100%',
            minHeight: '400px',
            color: '#fff',
            textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        heroTitle: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
        },
        heroSubtitle: {
            fontSize: '1.2rem',
            maxWidth: '600px'
        },

        // Content Section
        content: {
            paddingTop: '3rem'
        },
        container: {
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px'
        },

        // Top Navigation
        topNav: {
            display: 'flex',
            gap: '10px',
            fontWeight: 'bold',
            marginBottom: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        navLink: {
            textDecoration: 'none',
            color: '#999',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
        },
        navLinkActive: {
            color: '#000',
            fontWeight: 'bold'
        },
        navSeparator: {
            color: '#bbb'
        },

        // Layout
        layout: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 -15px'
        },
        sidebarCol: {
            width: '100%',
            padding: '0 15px'
        },
        mainCol: {
            width: '100%',
            padding: '0 15px'
        },

        // Sidebar
        sidebarContainer: {
            position: 'sticky',
            top: '20px'
        },
        sidebar: {
            borderLeft: '3px solid #707070',
            paddingLeft: '0',
            marginTop: '10px',
            background: '#fff',
            listStyle: 'none'
        },
        sidebarItem: {
            listStyle: 'none',
            padding: '12px 15px 12px 20px',
            color: '#999',
            cursor: 'pointer',
            borderBottom: '1px solid #f0f0f0',
            transition: 'all 0.3s ease',
            fontSize: '18px'
        },
        sidebarItemActive: {
            fontWeight: 'bold',
            color: '#000',
            background: '#f8f9fa'
        },

        // Main Content
        mainContent: {
            borderBottom: '1px solid #e0e0e0',
            padding: '30px 0',
            marginBottom: '20px'
        },
        contentTitle: {
            fontSize: '2rem',
            marginBottom: '20px',
            color: '#333'
        },
        contentSubtitle: {
            color: '#666',
            fontSize: '1.2rem',
            fontWeight: 'normal'
        },
        details: {
            display: 'flex',
            gap: '30px',
            alignItems: 'flex-start',
            marginBottom: '25px'
        },
        detailsText: {
            flex: '2',
            lineHeight: '1.7',
            color: '#555',
            fontSize: '1rem',
            marginBottom: '0'
        },
        gemstoneImage: {
            flex: '1',
            maxWidth: '220px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        },

        // Related Posts
        relatedPosts: {
            marginTop: '30px',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '8px'
        },
        relatedTitle: {
            fontSize: '1.3rem',
            marginBottom: '15px',
            color: '#333',
            borderBottom: '2px solid #e0e0e0',
            paddingBottom: '10px'
        },
        relatedList: {
            listStyle: 'none',
            padding: '0',
            margin: '0'
        },
        relatedItem: {
            marginBottom: '8px',
            background: '#fff',
            padding: '12px 15px',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            borderLeft: '3px solid transparent'
        },
        relatedLink: {
            textDecoration: 'none',
            color: '#14344a',
            fontWeight: '500',
            display: 'block'
        }
    };

    // Event handlers for hover effects
    const handleRelatedHover = (e) => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.borderLeft = '3px solid #14344a';
        e.currentTarget.style.transform = 'translateX(5px)';
    };

    const handleRelatedHoverOut = (e) => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.borderLeft = '3px solid transparent';
        e.currentTarget.style.transform = 'translateX(0)';
    };

    const handleNavHover = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.style.color = '#000';
        }
    };

    const handleNavHoverOut = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.style.color = '#999';
        }
    };

    const handleSidebarHover = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.style.background = '#f8f9fa';
            e.currentTarget.style.color = '#333';
        }
    };

    const handleSidebarHoverOut = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            e.currentTarget.style.background = '';
            e.currentTarget.style.color = '#999';
        }
    };

    // Responsive adjustments
    const responsiveStyles = { ...styles };
    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 576;

    if (isMobile) {
        responsiveStyles.hero.minHeight = '300px';
        responsiveStyles.hero.padding = '30px 15px';
        responsiveStyles.heroTitle.fontSize = '2rem';
        responsiveStyles.heroSubtitle.fontSize = '1rem';
        
        responsiveStyles.topNav.justifyContent = 'flex-start';
        responsiveStyles.topNav.overflowX = 'auto';
        responsiveStyles.topNav.paddingBottom = '10px';
        
        responsiveStyles.sidebarContainer.position = 'relative';
        responsiveStyles.sidebarContainer.marginBottom = '30px';
        
        responsiveStyles.sidebar.borderLeft = 'none';
        responsiveStyles.sidebar.borderTop = '2px solid #ccc';
        responsiveStyles.sidebar.display = 'flex';
        responsiveStyles.sidebar.justifyContent = 'space-around';
        responsiveStyles.sidebar.paddingTop = '10px';
        responsiveStyles.sidebar.paddingLeft = '0';
        
        responsiveStyles.sidebarItem.borderBottom = 'none';
        responsiveStyles.sidebarItem.borderLeft = 'none';
        responsiveStyles.sidebarItem.padding = '8px 12px';
        responsiveStyles.sidebarItem.textAlign = 'center';
        responsiveStyles.sidebarItem.flex = '1';
        
        responsiveStyles.sidebarItemActive.borderLeft = 'none';
        responsiveStyles.sidebarItemActive.borderBottom = '3px solid #000';
        
        responsiveStyles.details.flexDirection = 'column';
        responsiveStyles.details.gap = '20px';
        
        responsiveStyles.gemstoneImage.maxWidth = '100%';
        responsiveStyles.gemstoneImage.order = '-1';
        
        responsiveStyles.contentTitle.fontSize = '1.7rem';
    }

    if (isSmallMobile) {
        responsiveStyles.heroTitle.fontSize = '1.8rem';
        responsiveStyles.contentTitle.fontSize = '1.5rem';
        responsiveStyles.detailsText.fontSize = '0.9rem';
        responsiveStyles.relatedPosts.padding = '15px';
        responsiveStyles.sidebar.flexDirection = 'column';
    }

    if (!isMobile) {
        responsiveStyles.sidebarCol.width = '25%';
        responsiveStyles.mainCol.width = '75%';
    }

    return (
        <div style={responsiveStyles.page}>
            {/* Hero Section */}
            <section style={responsiveStyles.hero}>
                <h1 style={responsiveStyles.heroTitle}>GEMSTONE EDUCATION</h1>
                <span style={responsiveStyles.heroSubtitle}>
                    Be informed about the different gemstones and what they signify along
                    with which month they align with.
                </span>
            </section>

            {/* Content Section */}
            <section style={responsiveStyles.content}>
                <div style={responsiveStyles.container}>
                    {/* Top Navigation */}
                    <nav style={responsiveStyles.topNav}>
                        <Link 
                            to="/engagement-ring-style" 
                            style={responsiveStyles.navLink}
                            onMouseEnter={handleNavHover}
                            onMouseLeave={handleNavHoverOut}
                        >ENGAGEMENT RINGS</Link><span style={responsiveStyles.navSeparator}>|</span>
                        <Link 
                            to="/diamonds" 
                            style={responsiveStyles.navLink}
                            onMouseEnter={handleNavHover}
                            onMouseLeave={handleNavHoverOut}
                        >DIAMONDS</Link><span style={responsiveStyles.navSeparator}>|</span>
                        <Link 
                            to="/wedding-band-styles" 
                            style={responsiveStyles.navLink}
                            onMouseEnter={handleNavHover}
                            onMouseLeave={handleNavHoverOut}
                        >WEDDING BANDS</Link><span style={responsiveStyles.navSeparator}>|</span>
                        <Link 
                            to="/fine-jewelry-earrings" 
                            style={responsiveStyles.navLink}
                            onMouseEnter={handleNavHover}
                            onMouseLeave={handleNavHoverOut}
                        >FINE JEWELRY</Link><span style={responsiveStyles.navSeparator}>|</span>
                        <Link 
                            to="#" 
                            style={{...responsiveStyles.navLink, ...responsiveStyles.navLinkActive}}
                            className="active"
                        >GEMSTONE</Link>
                    </nav>

                    <div style={responsiveStyles.layout}>
                        {/* Sidebar */}
                        <div style={responsiveStyles.sidebarCol}>
                            <div style={responsiveStyles.sidebarContainer}>
                                <ul style={responsiveStyles.sidebar}>
                                    <li 
                                        style={{...responsiveStyles.sidebarItem, ...responsiveStyles.sidebarItemActive}}
                                        className="active"
                                    >TYPES</li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div style={responsiveStyles.mainCol}>
                            {/* January - Garnet */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Garnet <span style={responsiveStyles.contentSubtitle}>(January)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Garnet, the birthstone for January, presents a spectrum of colors
                                        ranging from rich red to gentle, earthy tones. It carries symbolism
                                        tied to strength and good fortune and has been historically referred
                                        to as the "Gem of Faith," believed to bring luck to wearers. Garnet
                                        also promotes serenity and harmonious connections, earning its place
                                        as January's birthstone. It is linked to the pomegranate and its
                                        symbolism of renewal and fertility, making it a fitting choice for
                                        the year's outset.
                                    </p>
                                    <img src="/images/gemstone/1.webp" alt="Garnet gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Garnet Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Garnet Value And Worth</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Garnet Grading</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* February - Amethyst */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Amethyst <span style={responsiveStyles.contentSubtitle}>(February)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        The February birthstone, the majestic amethyst gemstone, boasts a fascinating history. Linked to Saint Valentine's amethyst ring, featuring Cupid's image, its name originates from the Greek "amethystos," meaning "not intoxicated," which signifies its protective attributes and wine-like color spectrum. From soft lilac to deep plum, Amethyst's shades result from distinct cuts. As a type of quartz composed of silicon dioxide, it forms within volcanic rocks. It is believed to bestow tranquility, alleviate stress, harmonize emotions, and dispel negativity, establishing it as a potent spiritual gemstone.
                                    </p>
                                    <img src="/images/gemstone/2.webp" alt="Amethyst gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>The Meaning of Amethyst</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Amethyst Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>How much is Amethyst worth?</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* March - Aquamarine */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Aquamarine <span style={responsiveStyles.contentSubtitle}>(March)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Aquamarine gemstone, adored for its captivating blue shade, carries unique importance as the March birthstone, aligning beautifully with the season of rebirth. Its calm and soothing color conjures images of serene tropical oceans and cloudless daytime skies, making it a versatile choice to enhance any ensemble. With roots in the Latin words "aqua" and "marina," signifying seawater, this gem has historical ties to maritime symbolism, thought to protect sailors from danger. Furthermore, it carries tales of enriching marital happiness, enhancing its enduring charm.
                                    </p>
                                    <img src="/images/gemstone/3.webp" alt="Aquamarine gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Aquamarine Meaning</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>What is Aquamarine?</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Aquamarine Grading</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* April - Diamond */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Diamond <span style={responsiveStyles.contentSubtitle}>(April)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        The April birthstone is the diamond, a mesmerizing gem with a rich historical legacy. Initially unearthed in India 2,500 years ago, diamonds carried profound significance for Indian monarchs. Although India was the exclusive source in the past, contemporary diamond mining extends to many other locations. Lab-created diamonds faithfully replicate the natural formation process, reflecting the admirable qualities of April-born individuals, including courage, perseverance, and boundless enthusiasm. These exquisite gems symbolize romance, elegance, tranquility, artistic flair, and humanitarianism.
                                    </p>
                                    <img src="/images/gemstone/4.jpg" alt="Diamond gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>This Is The Most Expensive Diamond Cut, and Exactly Why It Costs More</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Diamond Clarity</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Diamond: April's Birthstone</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* May - Emerald */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Emerald <span style={responsiveStyles.contentSubtitle}>(May)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        The Emerald gemstone, renowned for its vibrant green hue, enchants with its exquisite beauty and rarity. This May birthstone is a versatile selection for fine jewelry. They boast an illustrious history, tracing back to ancient Egypt around 330 BC, with some believed to have existed for nearly 3 billion years. Beyond their historical importance, emeralds symbolize loyalty, new beginnings, peace, vitality, prosperity, and security. Their calming green shade is associated with stress relief, relief from eye strain, and evoking spring rejuvenation.
                                    </p>
                                    <img src="/images/gemstone/5.webp" alt="Emerald gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Natural Emerald Grading</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Emerald Gemstone</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Emerald Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* June - Pearl */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Pearl <span style={responsiveStyles.contentSubtitle}>(June)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        The Pearl gemstone, considered to be June's birthstone, has a rich history symbolizing purity, loyalty, and integrity, often adorning royalty. Discovering a natural pearl is an exceedingly rare event, necessitating the opening of approximately 10,000 wild oysters, with only a select few meeting the standards for jewelry. The pearl gemstone's exquisite luster is attributed to its unique crystalline structure. A pearl ring, signifying loyalty, integrity, and wisdom, holds deep sentimental value in relationships.
                                    </p>
                                    <img src="/images/gemstone/6.webp" alt="Pearl gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Why Pearl Pendants Are Perfect for Daily Wear</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Guide To Pearl Necklaces</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* July - Ruby */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Ruby <span style={responsiveStyles.contentSubtitle}>(July)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        The July birthstone, Ruby, is a highly coveted gem celebrated for its vibrant red color, symbolizing the essence of life. Over the ages, ruby gemstones have been linked to vitality and resilience, cherished by Burmese soldiers for safeguarding purposes, and held in high regard across Medieval Europe for their perceived associations with well-being, intellect, prosperity, and love. These precious stones boast a rich history. Rubies remain potent symbols of affluence, vitality, wisdom, ardor, and bravery, often adorning the armor of ancient warriors for their protective attributes.
                                    </p>
                                    <img src="/images/gemstone/7.webp" alt="Ruby gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Natural Ruby Grading and Ruby Color Chart</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Ruby Gemstone</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Ruby Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* August - Peridot */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Peridot <span style={responsiveStyles.contentSubtitle}>(August)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        There are three August birthstones: the classic Peridot gemstone, the ancient Sardonyx, and the more recent addition, Spinel. Peridot stands out as the favorite, renowned for its lush green color, spanning from earthy brown-green to the coveted yellow-green hue. This age-old gem, consisting of olivine minerals, originates deep within the Earth's mantle, symbolizing strength, equilibrium, and inner tranquility. As a result, it remains a beloved selection among gem enthusiasts and those with spiritual inclinations, with references to its historical significance even present in the Holy Bible.
                                    </p>
                                    <img src="/images/gemstone/8.webp" alt="Peridot gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>How is Peridot Valued?</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Peridot Grading</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Peridot Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* September - Sapphire */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Sapphire <span style={responsiveStyles.contentSubtitle}>(September)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        The September birthstone, sapphire, has been adored by royalty and the elite for its exquisite rarity and beauty. While sapphire gemstones come in a wide range of colors, the deep blue shades are particularly cherished. Throughout history, sapphires have symbolized royalty, with the ancient Greeks believing in their protective qualities. These gemstones, associated with nobility, truth, and fidelity, have held great significance as representations of heaven and have been attributed to various medicinal properties in different cultures.
                                    </p>
                                    <img src="/images/gemstone/9.webp" alt="Sapphire gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>How Much Do Sapphires Cost</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Natural Sapphire Grading</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>How Sapphires Are Valued</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* October - Opal */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Opal <span style={responsiveStyles.contentSubtitle}>(October)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Opal, the October birthstone, forms when silicon dioxide and water interact within volcanic rocks. Opal gemstones are renowned for their mesmerizing play of rainbow colors when in motion, symbolizing gentleness, compassion, and serenity. The term "opal" finds its origins in the Sanskrit word "Upala," signifying a "precious stone." Opals have held diverse cultural meanings, from love and hope to invisibility in folklore. Opal gemstones boast a fascinating history, even intertwining with a folktale involving a pelican and the discovery of fire.
                                    </p>
                                    <img src="/images/gemstone/10.webp" alt="Opal gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Opal Cost</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Opal Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Opal Value and Worth</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* November - Citrine */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Citrine <span style={responsiveStyles.contentSubtitle}>(November)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Citrine, the November birthstone, is a part of the quartz family, boasting a distinctive yellow hue often tinged with brown, red, or orange tones, earning its name from the French word for lemon. While historically revered for its protective qualities, most modern citrine gemstones are heat-treated amethyst. With a robust Mohs scale rating of seven, citrine makes durable jewelry, and its warm, versatile shades lend themselves well to various designs, making it a popular choice for everyday and special occasions.
                                    </p>
                                    <img src="/images/gemstone/11.jpg" alt="Citrine gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Yellow Sapphire Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Citrine Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Fall Wedding Colors and Jewelry Inspirations</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* December - Tanzanite */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Tanzanite <span style={responsiveStyles.contentSubtitle}>(December)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Tanzanite, recognized as the December birthstone, is a remarkable and scarce blue gem unearthed in Tanzania in 1967. Initially perceived as a cost-effective sapphire substitute, it has become a favored colored gemstone. According to legend, tanzanite's origins trace back to a lightning strike on Mt. Kilimanjaro, a phenomenon that transmuted ordinary brown crystals into the vivid violet-blue treasures we now adore. Its trichroic quality, showcasing various hues like blue, brown, and purple from distinct viewpoints, has led to its association with spiritual enlightenment and equilibrium.
                                    </p>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Tanzanite Gemstone</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Tanzanite Color</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Tanzanite Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* April - Moissanite */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Moissanite <span style={responsiveStyles.contentSubtitle}>(April)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Moissanite is considered to be the April birthstone. It is a rare mineral composed of silicon carbide and was initially discovered within an Arizona crater formed by a meteor in the late 1800s. Named after Dr. Moissan, this gemstone boasts exceptional hardness and colorless brilliance, making it a popular choice for jewelry like moissanite engagement rings. Due to its unique celestial origin, it's often associated with unbreakable love, robust health, mental clarity, and spiritual connection.
                                    </p>
                                    <img src="/images/gemstone/13.jpg" alt="Moissanite gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>How Much Does Moissanite Cost?</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Moissanite Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Moissanite Origin & Formation</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* January & May - Tsavorite */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Tsavorite <span style={responsiveStyles.contentSubtitle}>(January & May)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Tsavorite is considered to be a January birthstone and a May birthstone. This striking green gemstone bears a remarkable resemblance to emeralds but boasts greater brilliance and durability. It derives its lush green hue from vanadium and chromium oxide. This rare gemstone is known for its small size, with stones exceeding 2.5 carats considered exceptionally valuable. Tsavorite enhances fertility, supports bodily functions, and promotes emotional healing. Its metaphysical properties include strengthening the heart chakra, boosting vitality, and sharpening intuition.
                                    </p>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>When Did Tsavorite Become Popular?</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Tsavorite Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Tsavorite Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* October - Tourmaline */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Tourmaline <span style={responsiveStyles.contentSubtitle}>(October)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Pink tourmaline, one of its many vibrant hues, has a rich history rooted in its origins from the Sinhalese word "toramalli," denoting a colorful stone. Initially mistaken for rubies, pink tourmaline gained distinction as a unique mineral species in the early 1800s. It holds significance as an October birthstone and an emblem of emotional well-being, love, and enduring friendships. Notably durable, it graces jewelry pieces, from pendants to engagement rings, making it a timeless and meaningful choice.
                                    </p>
                                    <img src="/images/gemstone/15.webp" alt="Tourmaline gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Gemstone Treatments & Care</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Pink Tourmaline Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* December - Blue Topaz */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Blue Topaz <span style={responsiveStyles.contentSubtitle}>(December)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Topaz is a precious gem with a range of hues, including gold, amber, pink, red, and colorless. Blue topaz, in particular, has held a special place for its beauty and significance. It is cherished as a December birthstone and a symbol of tranquility, spiritual connection, and inner peace. December's association with blue topaz may be due to its serene nature and icy blue color. The word "Topaz" has Greek and Sanskrit origins, and it's been revered since ancient times, even mentioned in the Old Testament.
                                    </p>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Topaz Value & Worth</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Blue Topaz History</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>London Blue Topaz</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* June - Alexandrite */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Alexandrite <span style={responsiveStyles.contentSubtitle}>(June)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Alexandrite, a gem discovered in 1831 by Czar Alexander II, showcases chameleon-like colors, shifting from bright green in daylight to purple-red in incandescent light. Symbolizing good fortune, luck, and abundance, wearing this rare stone is believed to invite prosperity and intelligence. With a controversial history rooted in Imperial Russia, where it became the official gemstone of the Tsardom, alexandrite is considered the June birthstone. It is believed to encourage romance while offering a beacon of hope and strength in times of despair.
                                    </p>
                                    <img src="/images/gemstone/16.webp" alt="Alexandrite gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Gemstone Treatments & Care</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About the June Birthstone</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* November - Topaz */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Topaz <span style={responsiveStyles.contentSubtitle}>(November)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        The November birthstone topaz has a deep historical significance associated with wisdom and well-being. Throughout history, it adorned clergy and nobility, believed to fortify mental resilience and provide protection against various ailments. The Topaz gemstone forms within fractures in igneous rocks, often influenced by fluorine content. Remarkably, topaz displays a diverse range of colors, spanning browns, blues, pinks, reds, and greens, and some even exhibit pleochroism, showcasing varying hues when viewed from different crystal orientations.
                                    </p>
                                    <img src="/images/gemstone/15.webp" alt="Topaz gemstone" style={responsiveStyles.gemstoneImage}/>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>London Blue Topaz</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Topaz Origin and Formation</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Topaz Value & Worth</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* December - Turquoise */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Turquoise <span style={responsiveStyles.contentSubtitle}>(December)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Turquoise, a cherished gemstone for centuries, boasts a rich history spanning Central America, ancient Egyptian tombs, and Native American artistry. Highly valued specimens often hail from present-day Iran. Its unique allure lies in the captivating turquoise blue or subtly green hue derived from its copper-based phosphate composition. Unlike standalone minerals, turquoise forms within volcanic rock cavities, creating intriguing dark inclusions and coveted veined patterns. As a December birthstone, turquoise gemstones embody symbols of luck and prosperity.
                                    </p>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Gemstone Treatments & Care</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Turquoise Gemstone Guide</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* June - Moonstone */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Moonstone <span style={responsiveStyles.contentSubtitle}>(June)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Moonstone is a captivating gemstone composed of sodium potassium aluminum silicate. What sets it apart is its mesmerizing adularescence - an optical phenomenon causing a radiant, color-shifting glow. Cabochon-cut moonstones showcase a transition from white to pale blue sheen, with their elevated domes accentuating this unique trait. As a June birthstone, alongside pearl and alexandrite, moonstone is a sought-after choice for jewelry, renowned for its modern pearl-like allure. Its price can vary depending on quality, making it accessible for birthstone-themed rings and pendants.
                                    </p>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Gemstone Treatments & Care</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About Birthstones</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* August - Sardonyx */}
                            <div style={responsiveStyles.mainContent}>
                                <h1 style={responsiveStyles.contentTitle}>Sardonyx <span style={responsiveStyles.contentSubtitle}>(August)</span></h1>
                                <div style={responsiveStyles.details}>
                                    <p style={responsiveStyles.detailsText}>
                                        Sardonyx, the original August birthstone, boasts a rich history dating back 4,000 years to Ancient Egypt. The stone's name fuses "sard," originating from the ancient city Sardis, and "onyx," meaning "nail or claw" in Greek. With its reddish zebra-striped appearance, sardonyx combines layers of sard and onyx. It has been revered across cultures, symbolizing strength and unity, and it serves as a talisman for protection with Mars-themed carvings for warriors. It also represents love for couples and those seeking healing benefits.
                                    </p>
                                </div>
                                <div style={responsiveStyles.relatedPosts}>
                                    <h2 style={responsiveStyles.relatedTitle}>RELATED POSTS</h2>
                                    <ul style={responsiveStyles.relatedList}>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>Gemstone Treatments & Care</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About the August Birthstone</a></li>
                                        <li 
                                            style={responsiveStyles.relatedItem}
                                            onMouseEnter={handleRelatedHover}
                                            onMouseLeave={handleRelatedHoverOut}
                                        ><a style={responsiveStyles.relatedLink}>All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gemstones;