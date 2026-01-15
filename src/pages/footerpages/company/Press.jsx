import React, { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import Info from "../Info";

const blogs = [
  {
    logo: "/footerpress/RCFA.avif",
    title: "Kandi Burruss Wore Christian Siriano To The 'Othello' Opening Night Party",
    date: "March 2025",
    link: "https://www.redcarpet-fashionawards.com/2025/03/24/kandi-burruss-wore-christian-siriano-to-the-othello-opening-night-party/"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Justin Theroux and Nicole Brydon Bloom Got Married with Custom Wedding Rings. This Is How They Designed Them (Exclusive).",
    date: "March 2025",
    link: "https://people.com/justin-theroux-nicole-brydon-bloom-custom-wedding-rings-details-exclusive-11700582"
  },
  {
    logo: "/footerpress/Wedding_Forward_480x.avif",
    title: "Engagement Ring Trends 2025: From Classic Revivals to Modern Twists",
    date: "March 2025",
    link: "https://www.weddingforward.com/engagement-ring-trends-2025/"
  },
  {
    logo: "/footerpress/VOGUE_LOGO_480x.svg",
    title: "Justin Theroux and Nicole Brydon Bloom Are Married! Inside Their Laid-Back Beach Wedding in Mexico",
    date: "March 2025",
    link: "https://www.vogue.com/slideshow/justin-theroux-and-nicole-brydon-bloom-wedding"
  },
  {
    logo: "/footerpress/byrdie-logo_daf90b2d-b418-4953-a509-9c80c600d6d9_480x.avif",
    title: "Brooches Have Entered a New Era—Here's How You Can Style Them in 2025",
    date: "March 2025",
    link: "https://www.byrdie.com/brooches-fashion-trend-11695955"
  },
  {
    logo: "/footerpress/Yahoo_Life_480x.avif",
    title: "The Best Luxury Jewelry For Every Sign From The Dilse Jewels",
    date: "March 2025",
    link: "https://creators.yahoo.com/lifestyle/story/the-best-luxury-jewelry-for-every-sign-from-with-clarity-160123041.html"
  },
  {
    logo: "/footerpress/jck_in_svg_480x.svg",
    title: "JCK Special Report- Lab Grown Diamonds - The Dilse Jewels's Timely New Brooch Collection",
    date: "March 2025",
    link: "https://www.jckonline.com/editorial-article/with-clarity-brooch-collection/"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "How to Choose a Coordinated Wedding Wardrobe With Your Partner",
    date: "March 2025",
    link: "https://www.brides.com/choosing-coordinated-wedding-wardrobe-partner-tips-11686866"
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title: "What Is an East-West Engagement Ring? Your Complete Guide",
    date: "March 2025",
    link: "https://www.theknot.com/content/east-west-engagement-rings"
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "The Best Lab-Grown Diamond Tennis Bracelets That Add Sparkle And Shine To Your Wrist",
    date: "February 2025",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-lab-grown-diamond-tennis-bracelet/"
  },
  {
    logo: "/footerpress/the_vou_480x.avif",
    title: "The Five Wedding Band Styles for Men to Find Your Best Match",
    date: "February 2025",
    link: "https://thevou.com/blog/wedding-band-styles-men/"
  },
  {
    logo: "/footerpress/bespokebride_345x.avif",
    title: "First Valentine's Day Gifts for Newlyweds: The Ultimate Guide to Romantic & Meaningful Surprises",
    date: "February 2025",
    link: "https://www.bespoke-bride.com/2025/02/08/first-valentines-day-gifts-for-newlyweds-the-ultimate-guide-to-romantic-meaningful-surprises"
  },
  {
    logo: "/footerpress/instyle_seeklogo_345x.avif",
    title: "Why Celebrities Love Two-Stone Engagement Rings",
    date: "February 2025",
    link: "https://www.instyle.com/celebrity-two-stone-engagement-rings-8785246"
  },
  {
    logo: "/footerpress/Us_e89a27e2-f01a-497f-a032-107ede9a563a_480x.avif",
    title: "Keltie Knight Takes a Tumble on 2025 Grammys Red Carpet 1 Year After Diamond Ring Debacle",
    date: "February 2025",
    link: "https://www.usmagazine.com/entertainment/news/keltie-knight-falls-at-2025-grammys-after-losing-diamond-last-year/"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Valentine's Day Gifts We ❤",
    date: "February 2025",
    link: "https://www.people.com/featured/editorial/people-valentines-gift-guide"
  },
  {
    logo: "/footerpress/Vogue_India_345x.avif",
    title: "The perfect gifts for the ones who love the finer details",
    date: "February 2025",
    link: "https://www.vogue.in/content/the-perfect-gifts-for-the-ones-who-love-the-finer-details"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "See Reporter Keltie Knight Tumble on the 2025 Grammys Red Carpet One Year After Losing Diamond from Wedding Ring",
    date: "February 2025",
    link: "https://people.com/reporter-keltie-knight-shares-video-of-grammys-2025-red-carpet-fall-one-year-after-losing-ring-watch-8784634"
  },
  {
    logo: "/footerpress/E_News_345x.avif",
    title: "Keltie Knight Recovers Like a Champ After Grammys Red Carpet Tumble",
    date: "February 2025",
    link: "https://www.eonline.com/news/1412894/grammys-2025-e-s-keltie-knight-has-the-best-reaction-after-falling-on-the-red-carpet?cmpid=rss-syndicate-genericrss-us-red_carpet"
  },
  {
    logo: "/footerpress/Yahoo_Life_480x.avif",
    title: "Valentine's Day 2025 gift ideas: 24 things I own that any woman would love: Skincare, jewelry, PJs and more",
    date: "February 2025",
    link: "https://ca.style.yahoo.com/valentines-day-2025-gift-ideas-24-things-i-own-that-any-woman-would-love-skincare-jewelry-pjs-and-more-120036141.html"
  },
  {
    logo: "/footerpress/fashionista_345x.avif",
    title: "Heart-Shaped Jewelry Is Trending Just in Time for Valentine's Day",
    date: "JANUARY 2025",
    link: "https://fashionista.com/2025/01/shop-heart-shaped-jewelry-valentines-day-2025#&gid=ci02f2beef80002609&pid=with-clarity-petite-heart-necklace"
  },
  {
    logo: "/footerpress/the_hollywood_reporter_480x.avif",
    title: "Best Jewelry Gifts Valentine's Day 2025: Rings, Necklaces, Earrings",
    date: "JANUARY 2025",
    link: "https://www.hollywoodreporter.com/lifestyle/shopping/best-jewelry-gifts-1236053591/"
  },
  {
    logo: "/footerpress/bustle_345x.avif",
    title: "The 7 Engagement Ring Trends You'll Be Seeing Everywhere In 2025",
    date: "JANUARY 2025",
    link: "https://www.bustle.com/style/engagement-ring-trends-2025"
  },
  {
    logo: "/footerpress/love-inc-logo_89ab4835-87db-4da4-ae9e-dd65f76dc5be_480x.avif",
    title: "Zendaya's Engagement Ring Details (Plus Shop Similar Styles!)",
    date: "JANUARY 2025",
    link: "https://loveincmag.com/zendayas-engagement-ring-details-plus-shop-similar-styles/"
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Engagement Ring Trends You're Going to See Everywhere in 2025",
    date: "JANUARY 2025",
    link: "https://www.theknot.com/content/engagement-ring-trends"
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "Your Sparkling Guide To Valentine's Day Jewelry Gifts!",
    date: "JANUARY 2025",
    link: "https://fashionweekdaily.com/valentines-day-our-romantic-glamorous-jewelry-gift-guide/"
  },
  {
    logo: "/footerpress/who-what-wear-vector-logo_3ad229c8-62bd-474d-a4ed-5a6130568c02_480x.avif",
    title: "38 Elevated Valentine's Day Gift Ideas",
    date: "JANUARY 2025",
    link: "https://www.whowhatwear.com/fashion/shopping/valentines-day-elevated-gifts"
  },
  {
    logo: "/footerpress/medium_480x.avif",
    title: "Spread Love & Give Love: The Ultimate Valentine's Day Gift Guide",
    date: "JANUARY 2025",
    link: "https://medium.com/the-new-york-exclusive/spread-love-give-love-the-ultimate-valentines-day-gift-guide-1aaaef1fec6e"
  },
  {
    logo: "/footerpress/The_Zoe_report.2_a13fb26e-5fa7-4273-b653-aed297cfd3f6_480x.avif",
    title: "East-West Engagement Rings Are On The Rise, Thanks To Zendaya",
    date: "JANUARY 2025",
    link: "https://www.thezoereport.com/fashion/east-west-engagement-rings"
  },
  {
    logo: "/footerpress/top_wedding_site_480x.avif",
    title: "Winter Wedding Must-Haves: From Sparkling Accessories to Cozy Details",
    date: "JANUARY 2025",
    link: "https://www.topweddingsites.com/wedding-blog/wedding-ideas/winter-wedding-must-haves-from-sparkling-accessories-to-cozy-details"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "The 22 Best Bridesmaid Proposal Gifts for Your Bridal Party",
    date: "JANUARY 2025",
    link: "https://www.brides.com/gallery/bridesmaid-proposal-gift-ideas"
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "The 40 best Valentine's Day gifts to shop for everyone in 2025",
    date: "JANUARY 2025",
    link: "https://nypost.com/shopping/best-valentines-day-gifts-ideas-for-everyone-2025/"
  },
  {
    logo: "/footerpress/love-inc-logo_89ab4835-87db-4da4-ae9e-dd65f76dc5be_480x.avif",
    title: "Get the Scoop on Chloë Grace Moretz's Engagement Ring and Shop Similar Styles",
    date: "JANUARY 2025",
    link: "https://loveincmag.com/get-the-scoop-on-chloe-grace-moretzs-engagement-ring-and-shop-similar-styles/"
  },
  {
    logo: "/footerpress/Parade_480x.avif",
    title: "Brianna LaPaglia on the Golden Globes Red Carpet",
    date: "JANUARY 2025",
    link: "https://parade.com/news/brianna-lapaglia-busty-display-risqu%C3%A9-gown-golden-globes-2025-red-carpet-breakup-zach-bryan-exclusive"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Melissa McCarthy Attends the 2025 Golden Globes",
    date: "JANUARY 2025",
    link: "https://people.com/golden-globes-2025-melissa-mccarthy-wears-huge-cape-ben-falcone-date-night-8769471"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Brianna LaPaglia Hits Golden Globes 2025 Red Carpet",
    date: "JANUARY 2025",
    link: "https://people.com/golden-globes-2025-brianna-lapaglia-wears-ultimate-revenge-dress-post-zach-bryan-split-8769411"
  },
  {
    logo: "/footerpress/sports_illustrated_seeklogo_345x.avif",
    title: "Molly Sims Was the Picture of Elegance in Pink Cape Gown, 18K Yellow Gold Ring at the Golden Globes",
    date: "JANUARY 2025",
    link: "https://swimsuit.si.com/fashion/molly-sims-elegance-pink-cape-gown-18k-yellow-gold-ring-golden-globes"
  },
  {
    logo: "/footerpress/sports_illustrated_seeklogo_345x.avif",
    title: "Brianna LaPaglia Is a Metallic Goddess in a Plunging Corset Strapless Gown at the Golden Globes",
    date: "JANUARY 2025",
    link: "https://swimsuit.si.com/fashion/brianna-lapaglia-metallic-plunging-corset-strapless-gown-golden-globes"
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Golden Globes 2025 Red Carpet Photos",
    date: "JANUARY 2025",
    link: "https://www.justjared.com/2025/01/05/golden-globes-2025-red-carpet-photos-see-every-celeb-who-attended-full-guest-list-revealed/"
  },
  {
    logo: "/footerpress/ok_logo_black_345x.avif",
    title: "See what all your favorite celebs are up to celebrating the new year of 2025",
    date: "JANUARY 2025",
    link: "https://okmagazine.com/p/ok-celeb-photos-see-what-all-your-favorite-celebs-are-up-to-this-new-year-2025/"
  },
  {
    logo: "/footerpress/L_OFFICIEL_idHUSMNWYZ_0_345x.avif",
    title: "The Best Dressed Stars from the 2025 Golden Globe Awards",
    date: "JANUARY 2025",
    link: "https://www.lofficielusa.com/fashion/best-dressed-celebrities-actors-nominees-golden-globes-2025"
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Inside W Magazine's Best Performances Party: See Photos of Angelina Jolie, Nicole Kidman, & More Partying with Celeb Friends!",
    date: "JANUARY 2025",
    link: "https://www.justjared.com/2025/01/05/inside-w-magazines-best-performances-party-see-photos-of-angelina-jolie-nicole-kidman-more-partying-with-celeb-friends/"
  },
  {
    logo: "/footerpress/instyle_seeklogo_345x.avif",
    title: "Demi Moore Made This Divisive Millennial Trend Look So Chic",
    date: "JANUARY 2025",
    link: "https://www.instyle.com/demi-moore-peplum-dress-w-magazine-party-8769341"
  },
  {
    logo: "/footerpress/ok_logo_black_345x.avif",
    title: "Angelina Jolie & More Stars Shine At Golden Globes Pre-Party",
    date: "JANUARY 2025",
    link: "https://okmagazine.com/p/angelina-jolie-demi-moore-sabrina-carpenter-golden-globes-party-photos/"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "The 38 Best Classic Engagement Rings for the Timeless Bride",
    date: "JANUARY 2025",
    link: "https://www.brides.com/gallery/classic-engagement-rings"
  },
  {
    logo: "/footerpress/cnn_underscored_logo_480x.avif",
    title: "The 85 best Cyber Monday clothing sales 2024",
    date: "DECEMBER 2024",
    link: "https://www.cnn.com/cnn-underscored/deals/cyber-monday-clothing-deals-2024"
  },
  {
    logo: "/footerpress/the_hollywood_reporter_480x.avif",
    title: "The Best Cyber Monday Deals on Celebrity-Loved Jewelry Brands 2024",
    date: "DECEMBER 2024",
    link: "https://www.hollywoodreporter.com/lifestyle/shopping/best-black-friday-cyber-monday-jewelry-sales-deals-1236074803/"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "The 55 Best Cyber Monday Fashion Deals for Brides and Wedding Guests",
    date: "NOVEMBER 2024",
    link: "https://www.brides.com/best-wedding-fashion-deals-2024-8749282"
  },
  {
    logo: "/footerpress/cnn_underscored_logo_480x.avif",
    title: "The Best Cyber Monday Deals on Celebrity-Loved Jewelry Brands 2024",
    date: "NOVEMBER 2024",
    link: "https://www.cnn.com/cnn-underscored/deals/black-friday-clothing-deals-2024"
  },
  {
    logo: "/footerpress/the_skimm_480x.avif",
    title: "Our Comprehensive Cheat Sheet for Black Friday & Cyber Monday Sales",
    date: "NOVEMBER 2024",
    link: "https://www.theskimm.com/shopping/best-black-friday-cyber-monday-cheat-sheet-2024"
  },
  {
    logo: "/footerpress/cnn_underscored_logo_480x.avif",
    title: "Need gifting inspiration? Here are 17 presents our editors are giving their friends and family",
    date: "NOVEMBER 2024",
    link: "https://www.cnn.com/cnn-underscored/gifts/family-holiday-gift-wants"
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "'Matlock' Actress Skye P. Marshall Has Date Night with Husband Edwin Hodge at International Emmy Awards Event",
    date: "NOVEMBER 2024",
    link: "https://www.justjared.com/2024/11/26/matlock-actress-skye-p-marshall-has-date-night-with-husband-edwin-hodge-at-international-emmy-awards-event/"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "20 Sweet Gifts for Your Child's Significant Other",
    date: "NOVEMBER 2024",
    link: "https://www.brides.com/gift-ideas-boyfriends-and-girlfriends-3570043#toc-with-clarity-classic-round-diamond-four-prong-stud-earrings"
  },
  {
    logo: "/footerpress/who-what-wear-vector-logo_3ad229c8-62bd-474d-a4ed-5a6130568c02_480x.avif",
    title: "I'ma Shopping Director—These Are the Black Friday Deals I Care About Most",
    date: "NOVEMBER 2024",
    link: "https://www.whowhatwear.com/live/news/best-black-friday-fashion-deals-2024"
  },
  {
    logo: "/footerpress/RCFA.avif",
    title: "VivaLas Vegas! amfAR's Inaugural Gala in Sin City Turns into a Celeb Dance Party",
    date: "NOVEMBER 2024",
    link: "https://www.vogue.com/slideshow/amfar-las-vegas-2024"
  },
  {
    logo: "/footerpress/The_Zoe_report.2_a13fb26e-5fa7-4273-b653-aed297cfd3f6_480x.avif",
    title: "The Best 2024 Black Friday Fashion Sales",
    date: "NOVEMBER 2024",
    link: "https://www.thezoereport.com/fashion/2024-black-friday-sales"
  },
  {
    logo: "/footerpress/love-inc-logo_89ab4835-87db-4da4-ae9e-dd65f76dc5be_480x.avif",
    title: "Best Black Friday Wedding Deals to Score Serious Savings",
    date: "NOVEMBER 2024",
    link: "https://loveincmag.com/black-friday-wedding-deals/"
  },
  {
    logo: "/footerpress/the_PR_net_a16c8d52-4d75-45cb-98d8-f4de0536c6fa_480x.avif",
    title: "The Ultimate Holiday Gift Guide: Elegant Finds for Every Style'",
    date: "NOVEMBER 2024",
    link: "https://theprnet.com/journals/holiday-gift-guide-elegant-style"
  },
  {
    logo: "/footerpress/CLogo_7c571e09-8b6f-4015-ac23-0a1d66d0282b_480x.avif",
    title: "Holiday Gift Guide 2024: For Him",
    date: "NOVEMBER 2024",
    link: "https://magazinec.com/gift-guides/holiday-gift-guide-2024-for-him/"
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "Best early Black Friday deals on diamond rings for 2024",
    date: "NOVEMBER 2024",
    link: "https://nypost.com/shopping/diamond-rings-sales/"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Lab-Grown Diamond Earrings To Give Or Receive",
    date: "NOVEMBER 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/lab-grown-diamond-earrings/"
  },
  {
    logo: "/footerpress/RCFA.avif",
    title: "19 Best Places to Buy Engagement Rings of 2024",
    date: "NOVEMBER 2024",
    link: "https://www.brides.com/best-places-to-buy-engagement-rings-online-4801812"
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "101+ early Black Friday 2024 deals worth shopping before Thanksgiving",
    date: "NOVEMBER 2024",
    link: "https://nypost.com/shopping/best-early-black-friday-deals-2024-11-27/"
  },
  {
    logo: "/footerpress/rock_an_roll_480x.avif",
    title: "Why Lab-Grown Diamonds are Shaping the Future of Engagement Rings",
    date: "NOVEMBER 2024",
    link: "https://www.rocknrollbride.com/2024/11/why-lab-grown-diamonds-are-shaping-the-future-of-engagement-rings/"
  },
  {
    logo: "/footerpress/byrdie-logo_daf90b2d-b418-4953-a509-9c80c600d6d9_480x.avif",
    title: "55 Editor-Approved Christmas Gifts to Shop This Season",
    date: "NOVEMBER 2024",
    link: "https://www.byrdie.com/best-christmas-gifts-6666180"
  },
  {
    logo: "/footerpress/who-what-wear-vector-logo_3ad229c8-62bd-474d-a4ed-5a6130568c02_480x.avif",
    title: "62 Fashionable Gift Ideas, Including Bags, Jewelry, and Coats",
    date: "NOVEMBER 2024",
    link: "https://www.whowhatwear.com/fashion/shopping/fashionable-gifts"
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Cyber Monday & Black Friday Engagement Ring Sales to Shop in 2024",
    date: "NOVEMBER 2024",
    link: "https://www.theknot.com/content/wedding-engagement-ring-sale"
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "33 Taylor Swift Inspired Engagement Rings Based on Her Eras",
    date: "NOVEMBER 2024",
    link: "https://www.theknot.com/content/taylor-swift-inspired-engagement-rings"
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Your Guide to Cluster Engagement Rings",
    date: "NOVEMBER 2024",
    link: "https://www.theknot.com/content/cluster-engagement-rings"
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "The Best Jewelry Gifts To Add Sparkle And Shine To The Occasion",
    date: "OCTOBER 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-jewelry-gifts/"
  },
  {
    logo: "/footerpress/Paper_c71ba5a2-88cc-4bdb-8439-3849fbaf6e19_480x.avif",
    title: "Coolest Person in the Room: Amelia Dimol denberg",
    date: "OCTOBER 2024",
    link: "https://www.papermag.com/amelia-dimoldenberg#rebelltitem9"
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "Affordable Engagement Rings: Best Places To Shop In October 2024",
    date: "OCTOBER 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/2024/10/18/affordable-engagement-rings/"
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "Best Lab-Grown Diamonds 2024 | Expert Reviewed",
    date: "OCTOBER 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-lab-grown-diamonds/"
  },
  {
    logo: "/footerpress/jck_in_svg_480x.svg",
    title: "Oct. 4 Diamond Shavings: Your Friday Web Roundup",
    date: "OCTOBER 2024",
    link: "https://www.jckonline.com/editorial-article/oct-4-diamond-shavings-2/"
  },
  {
    logo: "/footerpress/PRESS_LOGO_480x.avif",
    title: "The 53 Best Bridal Party Gifts, Curated by Brides' Editors",
    date: "OCTOBER 2024",
    link: "https://www.brides.com/gallery/unique-bridesmaids-gifts-brides"
  },
  {
    logo: "/footerpress/wwd_480x.avif",
    title: "EXCLUSIVE: Jewelry Label The Dilse Jewels Names Marie Audier as First CEO",
    date: "SEPTEMBER 2024",
    link: "https://wwd.com/business-news/human-resources/with-clarity-marie-audier-ceo-1236660737/"
  },
  {
    logo: "/footerpress/wwd_480x.avif",
    title: "Molly Sims Recalls the 'Heavy' Burden of Her ₹30 Million Diamond-encrusted Swimsuit for Sports Illustrated on 'Watch What Happens Live",
    date: "SEPTEMBER 2024",
    link: "https://wwd.com/pop-culture/celebrity-news/molly-sims-30-million-dollar-bikini-wwhl-interview-1236629537/"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Jenna Bush Hager Lost a Stone from Her Engagement Ring",
    date: "SEPTEMBER 2024",
    link: "https://people.com/jenna-bush-hager-lost-a-stone-from-her-engagement-ring-8713432"
  },
  {
    logo: "/footerpress/Us_e89a27e2-f01a-497f-a032-107ede9a563a_480x.avif",
    title: "E! News' Host Keltie Knight Breaks Down Her Emmys Red Carpet Beauty Routine",
    date: "SEPTEMBER 2024",
    link: "https://www.usmagazine.com/shop-with-us/news/keltie-knight-e-news-host-emmys-red-carpet-beauty-routine/"
  },
  {
    logo: "/footerpress/5_cosmopolitan_1_480x.avif",
    title: "70 Splurge-y, Luxury Gifts for Women Who (Seem to) Have It All",
    date: "SEPTEMBER 2024",
    link: "https://www.cosmopolitan.com/lifestyle/g1738/luxury-gifts-women/"
  },
  {
    logo: "/footerpress/the_PR_net_a16c8d52-4d75-45cb-98d8-f4de0536c6fa_480x.avif",
    title: "Fall Fashion Heroes: Pieces to Embrace the New Season",
    date: "AUGUST 2024",
    link: "https://theprnet.com/journals/fall-fashion-heroes"
  },
  {
    logo: "/footerpress/Vesture_Debate_9ef6066a-6bd9-4faa-8255-0d3ccd585fc6_480x.avif",
    title: "The Bouquet Collection From The Dilse Jewels",
    date: "AUGUST 2024",
    link: "https://www.vesturedebate.com/blogs/with-clarity-the-bouquet-collection"
  },
  {
    logo: "/footerpress/forbes_f074f74b-d0a6-4eeb-bafb-7da6a80c7512_480x.avif",
    title: "The Best Places To Buy Engagement Rings, According To Gem Experts",
    date: "AUGUST 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-places-to-buy-engagement-rings/"
  },
  {
    logo: "/footerpress/RCFA.avif",
    title: "Menswear Midweek Red Carpet Roundup",
    date: "AUGUST 2024",
    link: "https://www.redcarpet-fashionawards.com/2024/08/14/menswear-midweek-red-carpet-roundup-8/"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Lab-Grown Diamonds, Picked By A Gem Expert",
    date: "AUGUST 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-lab-grown-diamonds/"
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Justin Baldoni & Wife Emily at 'It Ends With Us' NYC Premiere",
    date: "AUGUST 2024",
    link: "https://www.justjared.com/2024/08/06/justin-baldoni-wife-emily-share-red-carpet-kisses-at-it-ends-with-us-nyc-premiere/"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "Justin Baldoni and Wife Emily Wearing Coordinating Flower Accessories for Red Carpet Date Night atthe It Ends with Us Premiere",
    date: "AUGUST 2024",
    link: "https://people.com/justin-baldoni-wife-emily-at-it-ends-with-us-premiere-8691211"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Nothing Is More Timeless Than A BIG Diamond Engagement Ring",
    date: "JULY 2024",
    link: "https://www.weddingchicks.com/bride-style-ideas/with-clarity-big-diamond-rings/"
  },
  {
    logo: "/footerpress/WeddingVibe-logo-magenta_a5247aea-e7a7-4cd6-aadd-c3c275cb4d24_345x.avif",
    title: "Your Ultimate Guide to Hidden Halos",
    date: "JULY 2024",
    link: "https://weddingvibe.com/blog/your-ultimate-guide-to-hidden-halos/"
  },
  {
    logo: "/footerpress/Emmaline_345x.avif",
    title: "Three Stone Engagement Rings for the Modern Bride",
    date: "JULY 2024",
    link: "https://emmalinebride.com/planning/three-stone-rings/"
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "Where to buy the bestlab-grown engagement rings and jewelry in 2024",
    date: "JULY 2024",
    link: "https://nypost.com/shopping/best-lab-grown-diamonds/"
  },
  {
    logo: "/footerpress/Mimoni_345x.webp",
    title: "The Symbolism of Flowers in Jewelry: What Your Accessories Say About You",
    date: "JULY 2024",
    link: "https://mimoni.com/blog/the-symbolism-of-flowers-in-jewelry-what-your-accessories-say-about-you"
  },
  {
    logo: "/footerpress/PRESS_LOGO_480x.avif",
    title: "The 13 Best Places to Buy Lab Grown Diamonds in 2024",
    date: "JULY 2024",
    link: "https://www.brides.com/best-places-to-buy-lab-grown-diamond-jewelry-5199790"
  },
  {
    logo: "/footerpress/Emmaline_345x.avif",
    title: "Uncover The Reserve: The Dilse Jewels Limited Collection of Engagement Rings and High Jewelry",
    date: "JULY 2024",
    link: "https://emmalinebride.com/engagement/reserve-engagement-rings/"
  },
  {
    logo: "/footerpress/Purewow_345x.svg",
    title: "The 31 Best Jewelry Gifts to Give This Year",
    date: "JULY 2024",
    link: "https://www.purewow.com/fashion/best-jewelry-gifts"
  },
  {
    logo: "/footerpress/StyleCaster_77577ce5-b1c1-4f60-92b6-72f198ff6552_345x.avif",
    title: "Most Legit Places To Buy Engagement Rings Online",
    date: "JUNE 2024",
    link: "https://stylecaster.com/lists/best-places-to-buy-engagement-ring/"
  },
  {
    logo: "/footerpress/StyleCaster_77577ce5-b1c1-4f60-92b6-72f198ff6552_345x.avif",
    title: "The Only Online Jewelers You Should be Buying Diamonds From, According to the Pros",
    date: "JUNE 2024",
    link: "https://stylecaster.com/lists/best-places-to-buy-diamonds/best-for-engagement-rings-marrow-fine/"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Diamond Essentials That Every Girl Needs In Her Collection",
    date: "MAY 2024",
    link: "https://www.weddingchicks.com/bride-style-ideas/with-clarity-diamond-essentials/?permit=161860901"
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Kate Upton, Chrissy Teigen, Hunter McGrady & Gayle King Celebrate Sports Illustrated Swimsuit Issue & 60th Anniversary",
    date: "MAY 2024",
    link: "https://www.justjared.com/photo-gallery/5041770/sports-illustrated-swimsuit-models-celebrate-new-issue-01/"
  },
  {
    logo: "/footerpress/Us_e89a27e2-f01a-497f-a032-107ede9a563a_480x.avif",
    title: "The Best Red Carpet Looks From the 'Sports Illustrated Swimsuit' 2024 Launch Party",
    date: "MAY 2024",
    link: "https://www.usmagazine.com/stylish/pictures/the-best-looks-at-the-2024-sports-illustrated-swimsuit-launch-party/"
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "Mother's Day 2024: Your Glamour Guide To Chic Jewelry Gifts",
    date: "MAY 2024",
    link: "https://fashionweekdaily.com/mothers-day-2024-your-glamorous-chic-guide-to-jewelry-gifts/"
  },
  {
    logo: "/footerpress/CityLifestyle_Darien_New_Canaan_Lifestyle_CT_Black1_1_345x.avif",
    title: "May 2024 Issue",
    date: "MAY 2024",
    link: "https://citylifestyle.com/dariennewcanaan/issues/2024-05"
  },
  {
    logo: "/footerpress/Glamour_6a7ffd0a-1e2e-445e-9381-b77c5c8f0e6d_345x.webp",
    title: "Met Gala 2024 Red Carpet Looks featuring The Dilse Jewels",
    date: "MAY 2024",
    link: "https://www.glamour.com/gallery/met-gala-2024-red-carpet-fashion-outfits-and-looks"
  },
  {
    logo: "/footerpress/jck_in_svg_345x.svg",
    title: "Met Gala 2024 Red Carpet: See All The Divine Looks",
    date: "MAY 2024",
    link: "https://www.jckonline.com/editorial-article/2024-met-gala-jewelry-garden/"
  },
  {
    logo: "/footerpress/5_cosmopolitan_1_345x.avif",
    title: "Tony Nominee Maleah Joi Moon in The Dilse Jewels at The Met Gala",
    date: "MAY 2024",
    link: "https://www.cosmopolitan.com/entertainment/celebs/a60702852/maleah-joi-moon-met-gala-2024/"
  },
  {
    logo: "/footerpress/12_MiamiLiving_345x.avif",
    title: "Introducing The Reserve: The Dilse Jewels's High Jewelry Collection",
    date: "MAY 2024",
    link: "https://www.google.com/url?q=https://www.miamilivingmagazine.com/post/immerse-yourself-into-the-world-of-the-reserve-with-clarity-introduces-high-jewelry-collection&sa=D&source=docs&ust=1715633139591484&usg=AOvVaw0F_134wQS7797jIZ35Ym68"
  },
  {
    logo: "/footerpress/style_Meets_345x.webp",
    title: "Personalized Mother's Gifts She Will Adore",
    date: "MAY 2024",
    link: "https://stylemeetsstory.com/personalized-mothers-day-gifts/"
  },
  {
    logo: "/footerpress/wwd_345x.avif",
    title: "Why Younger Shoppers Are Turning to Heritage Jewelry Like Signet Rings and Tennis Bracelets",
    date: "April 2024",
    link: "https://wwd.com/accessories-news/jewelry/heritage-jewelry-younger-shoppers-trend-1236332335/"
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "Sustainable & Chic Brands to Love For Earth Day",
    date: "April 2024",
    link: "https://fashionweekdaily.com/sustainable-chic-brands-to-love-for-earth-day-and-beyond/"
  },
  {
    logo: "/footerpress/Website_Daily_Logo_3D_480x.avif",
    title: "The Dilse Jewels's latest collection spotlight: The Reserve",
    date: "April 2024",
    link: "https://fashionweekdaily.com/victorias-secret-kicks-off-summer-with-gigi-emrata-more-rebeca-minkoff-joins-rhony-plus-jean-paul-gaultiers-new-collaboration/"
  },
  {
    logo: "/footerpress/PRESS_LOGO_345x.avif",
    title: "The Best Engagement Ring Style for Your Partner's Personality",
    date: "April 2024",
    link: "https://www.brides.com/best-engagement-ring-style-personality-8553194"
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "What to expect from an Engagement Ring Appointment at The Dilse Jewels",
    date: "April 2024",
    link: "https://weddingsparrow.com/article/what-to-expect-from-an-engagement-ring-appointment-at-with-clarity"
  },
  {
    logo: "/footerpress/12_MiamiLiving_345x.avif",
    title: "Introducing The World of The Reserve",
    date: "April 2024",
    link: "https://digital.miamilivingmagazine.com/i/1519053-max-verstappen/231?"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The 22 Best Mother's Day Gifts",
    date: "April 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/2024/04/12/mothers-day-jewelry-gifts/?sh=5b6a5c99733e"
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Vy Le dressed in head to toe The Dilse Jewels at The Sympathizer Premiere",
    date: "April 2024",
    link: "https://www.justjared.com/2024/04/09/robert-downey-jr-wears-sheer-shirt-to-the-sympathizer-premiere-alongside-sandra-oh/"
  },
  {
    logo: "/footerpress/national_jewelry_345x.avif",
    title: "The Dilse Jewels Partners With NFL on Wedding Bands",
    date: "April 2024",
    link: "https://nationaljeweler.com/articles/12805-with-clarity-partners-with-nfl-on-wedding-bands"
  },
  {
    logo: "/footerpress/wwd_345x.avif",
    title: "NFL Releases Wedding Bands Collection With Fine JewelryLabel The Dilse Jewels",
    date: "April 2024",
    link: "https://wwd.com/menswear-news/mens-accessories/nfl-wedding-bands-collection-with-clarity-1236298507/"
  },
  {
    logo: "/footerpress/southernBride_LOGO_345x.svg",
    title: "Vintage Inspired Engagement Rings from The Dilse Jewels",
    date: "April 2024",
    link: "https://www.southernbride.com/blog/fashion/with-clarity-vintage-inspired-engagement-rings/"
  },
  {
    logo: "/footerpress/forbes-logo_345x.avif",
    title: "Fine Jewelry Brand, The Dilse Jewels, Launches NYC Storefront",
    date: "April 2024",
    link: "https://www.forbes.com/sites/brinsnelling/2024/04/01/fine-jewelry-brand-with-clarity-launches-nyc-storefront/?sh=364c24895c74"
  },
  {
    logo: "/footerpress/jck_in_svg_345x.svg",
    title: "The Dilse Jewels Expands to In-Person Shopping With NYC Boutique",
    date: "April 2024",
    link: "https://www.jckonline.com/editorial-article/with-clarity-soho-boutique/"
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "18 Best Places to Buy Engagement Rings",
    date: "March 2024",
    link: "https://greenweddingshoes.com/try-on-engagement-rings-at-home-with-clarity-home-preview-program/"
  },
  {
    logo: "/footerpress/Bridal_Guide_345x.avif",
    title: "Sustainable Rings We Love from The Dilse Jewels",
    date: "March 2024",
    link: "https://www.bridalguide.com/dresses/complete-your-bridal-style/wedding-jewelry-accessories/sustainable-engagement-rings-we-love"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Everything You Need To Know: Home Preview",
    date: "March 2024",
    link: "https://greenweddingshoes.com/try-on-engagement-rings-at-home-with-clarity-home-preview-program/"
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "Eternity Bands for Every Spring 2024 Trend",
    date: "March 2024",
    link: "https://www.weddingchicks.com/engagement-ideas-rings/with-clarity-eternity-band-trends/"
  },
  {
    logo: "/footerpress/Wedding_Forward_345x.avif",
    title: "Determining Your Engagement Ring Width",
    date: "March 2024",
    link: "https://weddingsparrow.com/article/how-wide-should-my-engagement-ring-band-be-"
  },
  {
    logo: "/footerpress/RCFA.avif",
    title: "Lab vs. Natural | Find Your Right Pick",
    date: "March 2024",
    link: "https://www.weddingforward.com/lab-diamond-vs-natural-diamond-engagement-rings/"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Lab Grown Diamonds featuring The Dilse Jewels",
    date: "March 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-lab-grown-diamonds/?sh=71002846a7bf"
  },
  {
    logo: "/footerpress/harpers-bazaar-vector-logo_345x.avif",
    title: "Red Carpet Looks in The Dilse Jewels",
    date: "February 2024",
    link: "https://www.harpersbazaar.com/celebrity/red-carpet-dresses/g46946241/red-carpet-2024-sag-awards/?slide=76"
  },
  {
    logo: "/footerpress/Just_Jared_345x.avif",
    title: "Kelly Curran seen in The Dilse Jewels at the 2024 SAG Awards",
    date: "February 2024",
    link: "https://www.justjared.com/2024/02/24/sag-awards-2024-red-carpet-photos-see-every-celeb-who-attended-the-event/"
  },
  {
    logo: "/footerpress/wedding_sparrow_2_345x.avif",
    title: "Our Ten Favorite Sets of Studs from The Dilse Jewels",
    date: "February 2024",
    link: "https://weddingsparrow.com/article/sparkle-sustainably-top-10-lab-grown-diamond-studs-that-redefine-elegance"
  },
  {
    logo: "/footerpress/southernBride_LOGO_345x.svg",
    title: "Your Guide to Choosing The Perfect Diamond for Your Engagement Ring",
    date: "February 2024",
    link: "https://www.southernbride.com/blog/fashion/choosing-the-perfect-diamond-for-your-engagement-ring/"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_345x.svg",
    title: "Art Deco-Inspired Engagement Rings",
    date: "February 2024",
    link: "https://www.weddingchicks.com/engagement-ideas-rings/with-clarity-art-deco/"
  },
  {
    logo: "/footerpress/StyleCaster_77577ce5-b1c1-4f60-92b6-72f198ff6552_345x.avif",
    title: "22 Best Valentine's Day Gifts For Your Partner, Your Galentine — Or Yourself",
    date: "February 2024",
    link: "https://stylecaster.com/fashion/shopping-guides/570454/valentines-day-gifts/"
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "The Best Places to Buy Engagement Rings with Jewelry Expert Tips",
    date: "February 2024",
    link: "https://nypost.com/article/best-engagement-rings-online/#best-place-to-buy-traditional-engagement-rings"
  },
  {
    logo: "/footerpress/Woman_s_World_345x.avif",
    title: "Valentine's Day Gift Ideas for Everyone in Your Life",
    date: "February 2024",
    link: "https://www.womansworld.com/posts/shopping/valentines-day-gift-ideas"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "People Exclusive: Keltie Knight debuts new The Dilse Jewels Ring at the 2024 Grammys",
    date: "February 2024",
    link: "https://people.com/grammys-2024-keltie-knight-shows-off-replacement-ring-after-losing-diamond-on-red-carpet-photos-8558543"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The 15 Best Places To Buy Engagement Rings",
    date: "JANUARY 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-places-to-buy-engagement-rings/?sh=155ff7eb3319"
  },
  {
    logo: "/footerpress/People_b26b1406-28d9-47e9-90ab-e94ce0d72b99_480x.webp",
    title: "The 2024 Grammy Awards: A Full Recap",
    date: "February 2024",
    link: "https://people.com/2024-grammys-full-recap-8558511"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Engagement Rings To Match Your Style and Budget",
    date: "January 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-engagement-rings/?sh=212660d550ff"
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "Valentine's Day Gift Guide 2024: The Best Travel-Friendly Earrings",
    date: "January 2024",
    link: "https://www.forbes.com/sites/robinraven/2024/01/27/valentines-day-gift-guide-2024-the-best-travel-friendly-earrings/?sh=5f05097fb345"
  },
  {
    logo: "/footerpress/City_lifestyle_480x.svg",
    title: "Jen Birn's 'My Favorite Things'",
    date: "January 2024",
    link: "https://citylifestyle.com/articles/favorite-5-things-locals-only-and-1"
  },
  {
    logo: "/footerpress/wedding_sparrow_2_480x.avif",
    title: "5 Myths About Lab-Grown Diamond Engagement Rings",
    date: "January 2024",
    link: "https://weddingsparrow.com/article/5-myths-about-labgrown-diamond-engagement-rings"
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title: "The Top Valentine's Day Engagement Ring and Wedding Band Sales of 2024",
    date: "January 2024",
    link: "https://www.theknot.com/content/valentines-day-wedding-engagement-ring-sale"
  },
  {
    logo: "/footerpress/Marie_claire_480x.svg",
    title: "Engagement Rings You Want to Bookmark",
    date: "January 2024",
    link: "https://www.marieclaire.com/fashion/best-engagement-ring-brands/"
  },
  {
    logo: "/footerpress/jck_in_svg_480x.svg",
    title: "From Our Founder: How I Got Here",
    date: "January 2024",
    link: "https://www.jckonline.com/editorial-article/how-i-got-here-anubh-shah/"
  },
  {
    logo: "/footerpress/5_cosmopolitan_1_480x.avif",
    title: "46 Personalized Valentine's Day Gifts: The Dilse Jewels Nameplate Necklaces",
    date: "JANUARY 2024",
    link: "https://www.cosmopolitan.com/style-beauty/fashion/g38573545/personalized-valentines-day-gifts/"
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "Valentine's Day Gift Guide 2024: The Best Lab-Grown Diamond Bracelets",
    date: "JANUARY 2024",
    link: "https://www.google.com/url?q=https://www.forbes.com/sites/tiffanyleigh/2024/01/11/valentines-day-gift-guide-2024-the-best-lab-grown-diamond-bracelets/?sh%3D7b9d35fb1dbb&sa=D&source=editors&ust=1706016249823386&usg=AOvVaw1Poph_pUmDMveubT4qM6OL"
  },
  {
    logo: "/footerpress/GH_LOGO_WHITE_345x.avif",
    title: "Wedding Anniversary Gifts to Celebrate 25 Years",
    date: "JANUARY2024",
    link: "https://www.goodhousekeeping.com/holidays/gift-ideas/g46043821/25-year-anniversary-gift-ideas/"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The 15 Best Places To Buy Engagement Rings",
    date: "JANUARY 2024",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-places-to-buy-engagement-rings/?sh=155ff7eb3319"
  },
  {
    logo: "/footerpress/12_MiamiLiving_480x.avif",
    title: "Timeless Jewelry for EveryOccasion",
    date: "DECEMBER 2023",
    link: "https://www.miamilivingmagazine.com/post/with-clarity-crafting-timeless-jewelry-for-every-occasion"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x (2).svg",
    title: "10 Anniversary Rings for Your Milestone Memories",
    date: "DECEMBER 2023",
    link: "https://www.weddingchicks.com/engagement-ideas-rings/with-clarity-anniversary-bands/"
  },
  {
    logo: "/footerpress/Purewow_345x.svg",
    title: "31 Best Jewelry Gifts for the Holiday Season",
    date: "DECEMBER 2023",
    link: "https://www.purewow.com/fashion/best-jewelry-gifts"
  },
  {
    logo: "/footerpress/trend_hunter_345x.svg",
    title: "Our Blue Topaz Collection",
    date: "DECEMBER 2023",
    link: "https://www.trendhunter.com/trends/with-clarity"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x (3).svg",
    title: "Add a Pop of Color: Vibrant Engagement Rings",
    date: "DECEMBER 2023",
    link: "https://www.weddingchicks.com/engagement-ideas-rings/vibrant-colorful-engagement-rings/"
  },
  {
    logo: "/footerpress/green_wedding_shoes_ImgID1_480x.avif",
    title: "Lab Grown Diamonds: Breaking Down the Benefits",
    date: "December 2023",
    link: "https://www.google.com/url?q=https://greenweddingshoes.com/with-clarity-lab-grown-diamond-engagement-rings/&sa=D&source=editors&ust=1702881743065579&usg=AOvVaw2Iloo0MlVTIzrrOQEU_nX3"
  },
  {
    logo: "/footerpress/southernBride_LOGO_480x.svg",
    title: "Introducing The Elegance Collection: Embracing Minimalism",
    date: "December 2023",
    link: "https://www.southernbride.com/blog/fashion/with-clarity-the-elegance-of-southern-simplicity/"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x.svg",
    title: "All about The Dilse Jewels: Who We Are",
    date: "November 2023",
    link: "https://www.weddingchicks.com/engagement-ideas-rings/trust-with-clarity/"
  },
  {
    logo: "/footerpress/NEW_YORK_POST_480x.avif",
    title: "The Shopping Continues: Extended Cyber Monday Sales",
    date: "November 2023",
    link: "https://nypost.com/shopping/best-extended-cyber-monday-deals-sales-11-28-2023/"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "Bachelorette Gift Ideas for the Bride-to-Be",
    date: "November 2023",
    link: "https://www.brides.com/best-bachelorette-gift-ideas-7969549"
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "Top Engagement Rings Sales for Black Friday and Cyber Monday",
    date: "November 2023",
    link: "https://www.theknot.com/content/wedding-engagement-ring-sale"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "Best Places to Buy Diamond Jewelry",
    date: "November 2023",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-place-to-buy-diamonds/?sh=4d2020fc60a9"
  },
  {
    logo: "/footerpress/Martha_Stewart_06a5c6c5-3548-4702-b4c3-37df2f584328_480x (4).svg",
    title: "The Most Unique and Amazing Engagement Rings",
    date: "March 2023",
    link: "https://www.weddingchicks.com/engagement-ideas-rings/the-most-unique-and-amazing-engagement-rings/"
  },
  {
    logo: "/footerpress/sheFind_LOGO_345x.svg",
    title: "The Dilse Jewels Has The Largest Selection of Lab Diamonds And Some of Our Engagement Rings and Earrings Made With Them.",
    date: "January 2023",
    link: "https://www.shefinds.com/with-clarity-lab-grown-diamonds/"
  },
  {
    logo: "/footerpress/theknot_LOGO_480x.svg",
    title: "31 Must-Have Oval Engagement Rings",
    date: "January 2023",
    link: "https://www.theknot.com/content/oval-engagement-rings"
  },
  {
    logo: "/footerpress/southernBride_LOGO_480x.svg",
    title: "Current Engagement Ring Trends and Bespoke Designs In 2023",
    date: "January 2023",
    link: "https://www.southernbride.com/blog/fashion/with-clarity-engagement-ring-trends-2023/"
  },
  {
    logo: "/footerpress/forbesVetted_LOGO_480x.svg",
    title: "The Best Places To Find Affordable Engagement Rings",
    date: "January 2023",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/2023/08/14/affordable-engagement-rings/?sh=1f649b51739b"
  },
  {
    logo: "/footerpress/LabGrownCarats_LOGO_345x.svg",
    title: "Top selects of our bestselling lab diamond jewelry gifts for under $1000.",
    date: "November 2022",
    link: "/press/lab-diamond-gifts-under-1000"
  },
  {
    logo: "/footerpress/cnn_underscored_logo_345x.avif",
    title: "Mentioned as one of the best places to buy engagement rings, especially for our easy to buy preset collection.",
    date: "November 2022",
    link: "https://edition.cnn.com/cnn-underscored/fashion/best-engagement-rings"
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "The Dilse Jewels is ranked as the #1 Best Overall Place to Buy Engagement Rings Online.",
    date: "October 2022",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-places-to-buy-engagement-rings/?sh=5d5d18fc3319"
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title: "View our top rated anniversary, diamond and eternity bands. Ranked as one of the best gifts for a milestone anniversary.",
    date: "June 2022",
    link: "https://www.theknot.com/content/10-year-anniversary-gift-ideas"
  },
  {
    logo: "/footerpress/VOGUE_LOGO_345x.svg",
    title: "Our gorgeous rose gold jewelry pieces and most loved styles, highlighted in Vogue.",
    date: "May 2022",
    link: "https://www.vogue.com/article/rose-gold-jewelry"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "Our Poise Basket Peridot Ring made the list of best colored engagement rings.",
    date: "April 2022",
    link: "https://www.brides.com/gallery/colored-engagement-ring-meanings"
  },
  {
    logo: "/footerpress/BI_new_345x.avif",
    title: "The Dilse Jewels featured in The Lead's top 50 breakout brands in the fashion, beauty and lifestyle space.",
    date: "March 2022",
    link: "https://www.businessinsider.com/50-dtc-breakout-brands-in-fashion-beauty-lifestyle-the-lead-2022?IR=T"
  },
  {
    logo: "/footerpress/cnn_underscored_logo_345x.avif",
    title: "Planning to propose? Here are 23 expert-approved rings worth buying",
    date: "May 2021",
    link: "https://edition.cnn.com/2021/05/18/cnn-underscored/best-engagement-rings/index.html"
  },
  {
    logo: "/footerpress/nice_ice-logo_345x.avif",
    title: "The Dilse Jewels Diamond Reviews 2021 Discover Spectacular Sparkle",
    date: "March 2021",
    link: "https://niceice.com/online-diamond-vendors/with-clarity-diamond-reviews-custom-engagement-rings/"
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "Meet The Dilse Jewels, The Online Jewelry Brand That Let's You Try On Before You Buy",
    date: "March 2021",
    link: "https://www.forbes.com/sites/tanyaakim/2021/03/01/meet-with-clarity-the-online-jewelry-brand-that-lets-you-try-on-before-you-buy/?sh=573b2eec30fc"
  },
  {
    logo: "/footerpress/zeo_logo_345x.webp",
    title: "The Rare-Cut Diamond Trend Designers Say Will Rise In 2021",
    date: "Feb 2021",
    link: "https://www.thezoereport.com/fashion/rare-cut-diamond-trend-designers-say-will-rise-2021"
  },
  {
    logo: "/footerpress/forbes-logo_480x.avif",
    title: "Where To Buy An Engagement Ring Online",
    date: "Feb 2021",
    link: "https://www.forbes.com/sites/forbes-personal-shopper/article/best-places-to-buy-engagement-rings/?sh=37bd9eb03319"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "28 Men's Diamond Wedding Bands We Love",
    date: "Feb 2021",
    link: "https://www.brides.com/diamond-wedding-bands-for-men-5101283"
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title: "Beautiful Royal Engagement Rings Throughout History, Plus Lookalikes You Can Buy Now",
    date: "Jan 2021",
    link: "https://www.theknot.com/content/royal-engagement-rings"
  },
  {
    logo: "/footerpress/Wedding_Wire_345x.avif",
    title: "27 Minimalist Engagement Rings for Your Understated Other Half",
    date: "Jan 2021",
    link: "https://www.weddingwire.com/wedding-ideas/minimalist-engagement-rings"
  },
  {
    logo: "/footerpress/The_Lead_345x.webp",
    title: "The Foremost 50 of 2020",
    date: "Jan 2021",
    link: "https://the-lead.co/the-foremost-50-2020/"
  },
  {
    logo: "/footerpress/zeo_logo_345x.webp",
    title: "Demystifying Lab-Grown Diamonds: 2 Experts On The Essential Facts & Common Myths",
    date: "December 2020",
    link: "https://www.thezoereport.com/p/demystifying-lab-grown-diamonds-2-experts-on-the-essential-facts-common-myths-49025282"
  },
  {
    logo: "/footerpress/Stylecaster_345x.webp",
    title: "5 2021 Jewelry Trends To Invest In, From Pendants To Pearls",
    date: "December 2020",
    link: "https://stylecaster.com/2021-jewelry-trends/"
  },
  {
    logo: "/footerpress/The_Knot_480x.webp",
    title: "How COVID Revamped the Online Engagement Ring Shopping Experience",
    date: "December 2020",
    link: "https://www.theknot.com/content/covid-engagement-ring-shopping"
  },
  {
    logo: "/footerpress/Refinery_29_345x.webp",
    title: "8 Engagement Ring Trends That Will Be Big In 2021, According to Experts",
    date: "December 2020",
    link: "https://www.refinery29.com/en-us/2020/12/10228664/engagement-ring-trends-2021"
  },
  {
    logo: "/footerpress/Rolling_Stone_345x.webp",
    title: "The Latest Pandemic Trend: Getting Engaged",
    date: "December 2020",
    link: "https://www.rollingstone.com/product-recommendations/lifestyle/best-place-to-buy-engagement-rings-online-1089986/"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "The Complete Guide to Lab-Grown Diamond Engagement Rings",
    date: "December 2020",
    link: "https://www.brides.com/lab-grown-diamond-engagement-rings-5089858"
  },
  {
    logo: "/footerpress/zeo_logo_345x.webp",
    title: "Winter's Top Earrings Trends Have The Approval Of The Industry's Coolest Designers",
    date: "Nov 2020",
    link: "https://www.thezoereport.com/p/winters-top-earrings-trends-have-the-approval-of-the-industrys-coolest-designers-43176810"
  },
  {
    logo: "/footerpress/brides-logo_480x.avif",
    title: "24 Show-Stopping Flower Engagement Rings",
    date: "Nov 2020",
    link: "https://www.brides.com/flower-wedding-rings-5085826"
  },
  {
    logo: "/footerpress/She_Finds_345x.avif",
    title: "9 Engagement Ring Trends That Are IN For 2021",
    date: "Nov 2020",
    link: "https://www.shefinds.com/collections/9-engagement-ring-trends-that-are-in-for-2021/#slide-1"
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title: "How to Choose the Right Wedding Band for the Groom",
    date: "June 2020",
    link: "https://www.marthastewart.com/7942358/how-choose-grooms-wedding-band"
  },
  {
    logo: "/footerpress/medium_CP_BTSS_Podcast_cover_345x.avif",
    title: "Sharing the story of working together and building The Dilse Jewels.",
    date: "April 2020",
    link: "https://betweenthespreadsheets.transistor.fm/episodes/slisha-kankariya-anubh-shah-from-with-clairty"
  },
  {
    logo: "/footerpress/Financial-Times-Logo_new_345x.avif",
    title: "The Dilse Jewels ranks at #13 fastest growing company in 2020.",
    date: "April 2020",
    link: "https://www.ft.com/americas-fastest-growing-companies-2020"
  },
  {
    logo: "/footerpress/Hustlr_new_345x.avif",
    title: "Slisha & Anubh from The Dilse Jewels talk about scaling and growing fast.",
    date: "March 2020",
    link: "https://www.hustlr.com/podcast/slisha-and-anub-from-with-clarity-talks/"
  },
  {
    logo: "/footerpress/Ruffled_new_345x.webp",
    title: "Sharing how Lab Diamond Engagement Rings are the next big thing.",
    date: "December 2019",
    link: "https://ruffledblog.com/lab-grown-diamond-engagement-ring-with-clarity/"
  },
  {
    logo: "/footerpress/The_Adult_Man-logo_345x.avif",
    title: "Proposals are hard to mess up if you follow a few guidelines",
    date: "November 2019",
    link: "https://www.theadultman.com/love-and-lust/how-to-propose/"
  },
  {
    logo: "/footerpress/Digitail_360-logo_345x.avif",
    title: "The Dilse Jewels's unique approach drives massive growth",
    date: "November 2019",
    link: "https://www.digitalcommerce360.com/2019/11/04/with-claritys-unique-approach-drives-massive-growth/"
  },
  {
    logo: "/footerpress/CNYB-logo_345x.webp",
    title: "The Dilse Jewels is ranked as the 3rd fastest growing company in Surat on Crain's Fast 50 list.",
    date: "November 2019",
    link: "https://www.crainsnewyork.com/awards/2019-fast-50"
  },
  {
    logo: "/footerpress/Inc._magazine_logo_345x.webp",
    title: "These startups came up with unique business models--and they turned out to be wildly lucrative.",
    date: "November 2019",
    link: "https://www.inc.com/kevin-j-ryan/innovative-business-models-2019-inc-5000.html"
  },
  {
    logo: "/footerpress/Digiday-logo_345x.webp",
    title: "How The Dilse Jewels and other brands are 'on a mission to DTC-ify engagement and wedding rings.'",
    date: "November 2019",
    link: "https://digiday.com/marketing/geared-millennials-lifestyle-engagement-wedding-rings-gone-dtc/"
  },
  {
    logo: "/footerpress/cosmopolitan-logo_345x.avif",
    title: "Our two tips to a great Christmas proposal: Make sure to find time when the two of you can be alone together; and...don't lose the ring.",
    date: "November 2019",
    link: "https://www.cosmopolitan.com/sex-love/a29786633/christmas-proposal-ideas/"
  },
  {
    logo: "/footerpress/AE_345x.avif",
    title: "Our tips on making sure customers are top priority every time.",
    date: "August 2019",
    link: "https://www.americanexpress.com/en-us/business/trends-and-insights/articles/4-tips-for-handling-difficult-customer-service-conversations/"
  },
  {
    logo: "/footerpress/CMS-Wire-logo_345x.avif",
    title: "Building a brand with strength from the inside out. What we've learned along the way",
    date: "August 2019",
    link: "https://www.cmswire.com/digital-marketing/why-brand-awareness-matters/"
  },
  {
    logo: "/footerpress/Inc._magazine_logo_345x.webp",
    title: "We're thrilled that our team made it to #3 on the 10 hottest companies in NYC",
    date: "August 2019",
    link: "https://www.inc.com/christine-lagorio-chafkin/new-york-city-fast-growing-companies-2019-inc5000.html"
  },
  {
    logo: "/footerpress/BI_new_2b9200fc-dbf8-4adc-8941-ba0b7df45a7a_345x.avif",
    title: "The smartest and most stress-free way to shop for her engagement ring online.",
    date: "August 2019",
    link: "https://www.businessinsider.in/home/the-best-places-to-buy-engagement-rings-online/articleshow/70730177.cms"
  },
  {
    logo: "/footerpress/inc-image_345x.avif",
    title: "The Dilse Jewels was named #18 on the INC 5000 list of fastest growing companies in The India.",
    date: "August 2019",
    link: "https://www.inc.com/profile/with-clarity"
  },
  {
    logo: "/footerpress/forbes_1_345x.webp",
    title: "The Dilse Jewels: The Warby Parker Of Engagement Rings",
    date: "July 2019",
    link: "https://www.forbes.com/sites/joresablount/2019/07/07/with-clarity-the-warby-parker-of-engagement-rings/?sh=7350f97a68e4"
  },
  {
    logo: "/footerpress/Yahoo_345x.webp",
    title: "Startup taking the stress out of engagement ring shopping",
    date: "May 2019",
    link: "https://finance.yahoo.com/video/startup-taking-stress-engagement-ring-123419559.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cud2l0aGNsYXJpdHkuY29tLw&guce_referrer_sig=AQAAAEcTGycotGu7GQhFUn_7rdtaFhGa2TcdIUn0VexwsrlL3gqCODHH63SiezAXvvB-6gNwqfek66JbwXTwBwGDGU1sumi_p_CMK7ZR-TPiJEoR8tJ0LwgkBDeA5Us9lt79dmH-eWkT9GWcqTSYSfaROfzIsddzfbOvMaUQLVfspHr_"
  },
  {
    logo: "/footerpress/createthefuture_345x.avif",
    title: "The Dilse Jewels Offers Elegant Custom-Made Engagement Rings",
    date: "May 2019",
    link: "https://www.trendhunter.com/trends/custommade-engagement-ring"
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title: "How Often Should You Take Your Engagement Ring to the Jeweler for a Tune-Up?",
    date: "May 2019",
    link: "https://www.marthastewart.com/7858974/engagement-ring-professional-tune-up-jeweler"
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title: "How to Choose a Timeless Engagement Ring",
    date: "June 2018",
    link: "https://www.marthastewart.com/7861235/engagement-rings-what-you-need-know"
  },
  {
    logo: "/footerpress/She_Finds_345x.avif",
    title: "9 Engagement Ring Trends That Are So In for 2019",
    date: "June 2018",
    link: "https://www.shefinds.com/collections/engagement-ring-trends-2019/"
  },
  {
    logo: "/footerpress/Medium-Magazine_345x.webp",
    title: "Female Disruptors: Slisha Kankariya is a hidden gem in the diamond industry",
    date: "August 2018",
    link: "https://medium.com/authority-magazine/female-disruptors-slisha-kankariya-is-a-hidden-gem-in-the-diamond-industry-8c629b7af86"
  },
  {
    logo: "/footerpress/Martha_Stewart_345x.svg",
    title: "From Start to Finish: This Is How a Custom Engagement Ring Is Made",
    date: "September 2018",
    link: "https://www.marthastewart.com/7859683/how-custom-engagement-rings-are-made"
  },
  {
    logo: "/footerpress/The-Yes-Girls_2_345x.avif",
    title: "Friday 'Rocks'! Featuring Four Mine",
    date: "March 2018",
    link: "https://theyesgirls.com/friday-rocks-featuring-four-mine/"
  },
  {
    logo: "/footerpress/StarTribune_345x.avif",
    title: "The Dilse Jewels offers a quick way to try rings at home comfortably before you make your purchase.",
    date: "September 2017",
    link: "https://www.startribune.com/want-to-try-before-you-buy-these-online-retailers-let-you/442904543/"
  },
  {
    logo: "/footerpress/Bravo_345x.avif",
    title: "Instead of bothering a jeweler to let you try on every single ring they have on display, you can use an at-home service that mails ring options to you.",
    date: "September 2017",
    link: "https://www.bravotv.com/"
  },
  {
    logo: "/footerpress/Fox_345x.avif",
    title: "Shop with ease for an engagement ring online. Try it at home before you buy.",
    date: "September 2017",
    link: "https://www.fox2detroit.com/news/want-to-try-before-you-buy-these-online-retailers-will-let-you"
  },
  {
    logo: "/footerpress/Credit_345x.avif",
    title: "Every piece is handcrafted with care in their Surat City studio, so you can be sure that you're only getting the highest quality.",
    date: "May 2017",
    link: "https://www.creditdonkey.com/buy-engagement-ring.html"
  },
  {
    logo: "/footerpress/She_Finds_345x.avif",
    title: "12 Engagement rings trends that will be huge this season.",
    date: "July 2016",
    link: "https://www.shefinds.com/7-engagement-photos-ideas-that-arent-lame/"
  },
  {
    logo: "/footerpress/Tc_345x.png",
    title: "The Dilse Jewels is a venture backed company growing rapidly.",
    date: "June 2016",
    link: "https://techcrunch.com/2016/06/08/underrepresented-founders-apply-for-include-office-hours-with-pejman-mar-and-ffvc/"
  },
  {
    logo: "/footerpress/Glamour_345x.avif",
    title: "We share advice on how to keep your ring sparkling and new now and forever.",
    date: "June 2016",
    link: "https://www.glamour.com/story/how-to-clean-engagement-ring"
  },
  {
    logo: "/footerpress/June_345x.avif",
    title: "Our gorgeous engagement ring and wedding bands featured at a local Surat wedding.",
    date: "April 2016",
    link: "https://junebugweddings.com/wedding-blog/rainy-rustic-catskills-wedding-handsome-hollow/"
  },
  {
    logo: "/footerpress/Your-Tango_345x.avif",
    title: "This box is a great way to get going with engagement ring shopping.",
    date: "February 2016",
    link: "https://www.yourtango.com/love"
  },
  {
    logo: "/footerpress/twp_345x.avif",
    title: "Going online gives shoppers more options to choose from and comparison shop.",
    date: "December 2015",
    link: "https://www.washingtonpost.com/news/get-there/wp/2015/12/14/the-features-that-make-an-engagement-ring-so-expensive-and-what-to-do-about-it/"
  },
  {
    logo: "/footerpress/Tech-co_345x.avif",
    title: "The Dilse Jewels is the only online jeweler that provides all of the benefits of in-store shopping, at home.",
    date: "October 2015",
    link: "https://tech.co/news"
  },
  {
    logo: "/footerpress/Popsugar_345x.webp",
    title: "The Dilse Jewels shares how to showcase your engagement ring once he's popped question.",
    date: "August 2015",
    link: "https://www.popsugar.com/love/photo-gallery/38142804/image/38142831/8-Dont-ZoomYoull-compromise-photo-quality-using-zoom"
  },
  {
    logo: "/footerpress/AW_345x.avif",
    title: "The Dilse Jewels eliminates the uncertainty of shopping online with it's at Home Preview for engagement rings.",
    date: "June 2015",
    link: "https://www.alleywatch.com/2015/06/here-are-the-latest-startups-to-make-the-er-accelerator-top-10-list/"
  },
  {
    logo: "/footerpress/WH_345x.avif",
    title: "The Dilse Jewels is featured as a top bolg for wedding and engagement ring advice.",
    date: "June 2015",
    link: "https://wallethub.com/blog/best-wedding-blog/13814?user=fourmine"
  },
  {
    logo: "/footerpress/B_345x.webp",
    title: "The Dilse Jewels offers expertise on the entire engagement ring process from start to finish.",
    date: "May 2015",
    link: "https://www.bustle.com/articles/81480-is-he-going-to-propose-3-signs-you-and-your-partner-will-get-engaged-because-they"
  },
  {
    logo: "/footerpress/E_345x.webp",
    title: "Ecommerce is the new way to shop and work. The Dilse Jewels brings technology to the forefront in every experience.",
    date: "March 2015",
    link: "https://www.entrepreneur.com/living/the-best-places-to-work-arent-in-the-office/243615"
  },
  {
    logo: "/footerpress/BI_new_2b9200fc-dbf8-4adc-8941-ba0b7df45a7a_345x.avif",
    title: "The Dilse Jewels shares how to save on your diamond when shopping online.",
    date: "February 2015",
    link: "https://www.businessinsider.com/12-money-saving-tricks-to-know-before-buying-an-engagement-ring-2015-2?IR=T"
  },
  {
    logo: "/footerpress/Time_345x.webp",
    title: "The Dilse Jewels shares our tips on how to obtain the most value when purchasing a diamond ring.",
    date: "February 2015",
    link: "https://www.cnet.com/personal-finance/banking/"
  },
  {
    logo: "/footerpress/WB_345x.avif",
    title: "Engagement ring buying tips from former diamond cutter and third-generation jeweler Anubh Shah.",
    date: "",
    link: "https://www.wisebread.com/12-money-saving-tricks-to-know-before-buying-an-engagement-ring"
  },
];

const Press = () => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const menuItems = [
    {
      name: "PRESS COVERAGE",
      link: "/press-coverage"
    },
    {
      name: "FACT SHEET",
      link: "/fact-sheet"
    },
    {
      name: "MEDIA ASSETS",
      link: "/media-assets"
    },
    {
      name: "CONTACT US",
      link: "/contact"
    },
  ];

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 15px"
    },
    mainSection: {
      margin: "3rem 0"
    },
    heading: {
      fontWeight: "bold",
      marginBottom: "1rem",
      fontSize: "2rem",
      textAlign: isMobile ? "center" : "left"
    },
    subheading: {
      color: "#6c757d",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      textAlign: isMobile ? "center" : "left"
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      marginTop: isMobile ? "1rem" : "0"
    },
    menuDesktop: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #dee2e6",
      paddingBottom: "0.5rem",
      marginBottom: "2rem"
    },
    menuItem: {
      textDecoration: "none",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#154360",
      letterSpacing: "1px",
      fontSize: "0.875rem",
      transition: "color 0.3s ease"
    },
    menuItemHover: {
      color: "#0d6efd"
    },
    menuMobileItem: {
      border: "1px solid #dee2e6",
      padding: "0.75rem",
      cursor: "pointer",
      marginBottom: "0.5rem",
      borderRadius: "4px"
    },
    pressItem: {
      backgroundColor: "#d7ebed",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
      transition: "transform 0.2s ease, box-shadow 0.2s ease"
    },
    pressItemHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    },
    pressLink: {
      textDecoration: "none",
      color: "inherit",
      display: "block"
    },
    pressLogo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: isMobile ? "10px" : "0",
      width: isMobile ? "100%" : "25%",
      textAlign: isMobile ? "center" : "left"
    },
    pressLogoImg: {
      maxWidth: "100%",
      height: "auto",
      maxHeight: "60px",
      objectFit: "contain"
    },
    pressContent: {
      width: isMobile ? "100%" : "75%",
      paddingLeft: isMobile ? "0" : "1rem"
    },
    pressTitle: {
      fontSize: isMobile ? "18px" : "20px",
      color: "#1c3d5a",
      marginBottom: isMobile ? "10px" : "30px",
      wordBreak: "break-word",
      lineHeight: "1.4",
      fontWeight: "500"
    },
    pressDate: {
      fontSize: isMobile ? "16px" : "20px",
      lineHeight: "28px",
      color: "#555",
      fontWeight: "400"
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.mainSection}>
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h2 style={styles.heading}>In the news</h2>
              <p style={styles.subheading}>
                We're getting noticed! Check out what others have to say <br style={{ display: isMobile ? "none" : "block" }} />
                about The Dilse Jewels.
              </p>
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-6 text-center">
              <img
                src="/footerpress/pressMain.webp"
                alt="In the news"
                style={styles.image}
              />
            </div>
          </div>
        </div>

        <div style={styles.container}>
          {/* Desktop View */}
          <div style={{ display: isMobile ? "none" : "flex", ...styles.menuDesktop }}>
            {menuItems.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                style={styles.menuItem}
                className="menu-link"
                onMouseEnter={(e) => {
                  e.target.style.color = styles.menuItemHover.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = styles.menuItem.color;
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile View */}
          <div style={{ display: isMobile ? "block" : "none" }}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                style={styles.menuMobileItem}
                onClick={() => setOpen(open === index ? null : index)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to={item.link}
                    style={styles.menuItem}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.name}
                  </Link>
                  <span style={{ color: "#154360" }}>{open === index ? "▲" : "▼"}</span>
                </div>

                <Collapse in={open === index}>
                  <div style={{ marginTop: "0.5rem", color: "#6c757d" }}>
                    <Link
                      to={item.link}
                      style={{ color: "#6c757d", textDecoration: "none" }}
                    >
                      Learn more about {item.name.toLowerCase()}
                    </Link>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.container}>
          <div className="row">
            {blogs.map((blog, index) => (
              <div key={index} className="col-12">
                <Link
                  to={blog.link}
                  style={styles.pressLink}
                >
                  <div
                    style={styles.pressItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = styles.pressItemHover.transform;
                      e.currentTarget.style.boxShadow = styles.pressItemHover.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={styles.pressLogo}>
                      <img
                        src={blog.logo}
                        alt={blog.title}
                        style={styles.pressLogoImg}
                        onError={(e) => {
                          e.target.src = "/fallback-logo.png";
                        }}
                      />
                    </div>

                    <div style={styles.pressContent}>
                      <div style={styles.pressTitle}>{blog.title}</div>
                      {blog.date && <div style={styles.pressDate}>{blog.date}</div>}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
};

export default Press;