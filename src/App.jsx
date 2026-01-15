import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./pages/scrolltop/ScrollToTop";
import Footer from "./pages/footer/footer";

// All your page imports
import Home from "./pages/home/home";
import ReviewList from "./pages/review/ReviewList";
import ProductReviewSystem from "./pages/review/ProductReviewSystem";
import ReviewForm from "./pages/review/ReviewForm";
import ReviewItem from "./pages/review/ReviewItem";
import ReplyList from "./pages/review/ReplyList";
import HomePreview from "./pages/homePreview/HomePreview";
import Contact from "./pages/contact/contact";
import Engagement from "./pages/engagement/engagement";
import About from "./pages/about/about";
import Diamond from "./pages/diamond/diamond";
import Terms from "./pages/terms-conditions/terms";
import Policy from "./pages/policy/policy";
import Weddingbrands from "./pages/wedding-brands/weddingBrands";
import RingStyle from "./pages/engagemnet-ring-style/ringStyle";
import DiamondDetails from "./pages/diamond-detail/diamondDetails/diamondDetails";
import CartPage from "./cart/CartPage";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
import ResetPassword from "./pages/resetpassword/reset";
import ResetPasswordForm from "./pages/resetpassword/ResetPasswordForm";
import Profile from "./pages/profile/profile";
import Checkout from "./pages/checkout/checkout";
import ThankYou from "./pages/order-success/thankyou";
import PaymentFailed from "./pages/payment_failed/PaymentFailed";
import OrderDetails from "./pages/order_details/OrderDetails";
import JewelryList from "./pages/jewellary_list/JewelryList";
import JewelryDetailsPage from "./pages/jewellary-details/JewellaryDetails";
import MegaMenu from "./pages/mega-menu/megaMenu";
import Luxe from "./pages/Luxe/luxe";
import Reserve from "./pages/reserve-collections/reserve";
import Signature from "./pages/w-signature/signature";
import EngagementDetails from "./pages/engagement-details/engDetails";
import EngagementList from "./pages/engagement-list/engagementList";
import WeddingList from "./pages/wedding-brands/WeddingList";
import CompleteRing from "./pages/completeRing/completeRing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WhiteClarityNav from "./pages/header/WhiteClarityNav";
import PrivateRoute from "./routes/PrivateRoute";
import CollectionsRouter from "./pages/collectionsRouter/CollectionsRouter";
import PageRouter from "./pages/collectionsRouter/PageRouter";
import GiftDetails from "./pages/giftDetails/giftDetails";
import JewelryCollections from "./pages/highJewelry/JewelryCollections";
import BookAppointment from "./pages/appointmentModal/BookAppointment";
import EnquiryForm from "./pages/Enquiry/EnquiryForm";
import PaymentSuccess from "./pages/payment/PaymentSuccess";

// Footer pages
import RadianceRewards from "./pages/footerpages/company/RadianceRewards";
import Press from "./pages/footerpages/company/Press";
import Factsheet from "./pages/footerpages/company/Factsheet";
import Mediaassets from "./pages/footerpages/company/Mediaassets";
import Reviews from "./pages/footerpages/company/Reviews";
import Affiliates from "./pages/footerpages/company/Affiliates";
import SiteMap from "./pages/footerpages/company/Sitemap";
import MonthlyPaymentOption from "./pages/footerpages/company/MonthlyPaymentOption";

// Education
import DiamondFooter from "./pages/footerpages/education/DiamondFooter";
import ClarityPlusDiamonds from "./pages/footerpages/education/ClarityPlusDiamonds";
import Jewelry from "./pages/footerpages/education/jewelry/Jewelry";
import OurPolicy from "./pages/footerpages/education/policy/OurPolicy";
import Gemstones from "./pages/footerpages/education/gemstones/Gemstones";
import LabGrownDiamonds from "./pages/footerpages/education/labGrownDiamonds/LabGrownDiamonds";
import Metal from "./pages/footerpages/education/Metal";
import Blog from "./pages/footerpages/education/blog/Blog";
import BlogDetail from "./pages/footerpages/education/blog/BlogDetail";
import WeddingBandStyle from "./pages/footerpages/education/WeddingBandStyle";

// Customer care
import Idme from "./pages/footerpages/customercare/Idme";
import Insurance from "./pages/footerpages/customercare/Insurance";
import Financing from "./pages/footerpages/customercare/Financing";
import ExtendedWarranty from "./pages/footerpages/customercare/ExtendedWarranty";
import Appointment from "./pages/footerpages/customercare/Appointment";

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* <HeaderWrapper /> */}
      <WhiteClarityNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/inquiry" element={<EnquiryForm />} />
          {/* 🌟 Review Routes */}
          <Route path="/review-list" element={<ReviewList />} />
          <Route
            path="/product-review-system"
            element={<ProductReviewSystem />}
          />
          <Route path="/review-form" element={<ReviewForm />} />
          <Route path="/review-item/:id" element={<ReviewItem />} />
          <Route path="/review/:id/replies" element={<ReplyList />} />
          <Route path="/home-preview" element={<HomePreview />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/diamond" element={<Diamond />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/wedding-brands" element={<Weddingbrands />} />
          <Route path="/engagement-ring-style" element={<RingStyle />} />
          <Route path="/diamond-details/:id" element={<DiamondDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordForm />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/paymnet-failed" element={<PaymentFailed />} />
          <Route path="/order-details/:orderId" element={<OrderDetails />} />
          <Route path="/jewelry-list" element={<JewelryList />} />
          <Route path="/engagement-rings/:slug?" element={<EngagementList />} />
          <Route path="/wedding/:slug?" element={<WeddingList />} />
          <Route path="/collections/:slug" element={<CollectionsRouter />} />
          <Route
            path="/jewellary-details/:id"
            element={<JewelryDetailsPage />}
          />
          <Route path="/product/:slug?" element={<CompleteRing />} />
          <Route
            path="/engagment-details/:productId"
            element={<EngagementDetails />}
          />
          <Route path="/page/:slug" element={<PageRouter />} />

          {/* <Route path="/page/:slug" element={<JewelryCollections />} /> */}
          <Route path="/products/:productSlug" element={<GiftDetails />} />
          <Route path="/megamenu" element={<MegaMenu />} />
          {/* <Route path="/luxe" element={<Luxe />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/signature" element={<Signature />} /> */}
          {/* 404 page */}
          <Route path="*" element={<PageNotFound />} />
          {/* Footer pages start*/}
          <Route path="/press" element={<Press />} />
          <Route path="/fact-sheet" element={<Factsheet />} />
          <Route path="/media-assets" element={<Mediaassets />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/site-map" element={<SiteMap />} />
          <Route
            path="/monthly-payment-option"
            element={<MonthlyPaymentOption />}
          />
          <Route
            path="/radiance-rewards-program"
            element={<RadianceRewards />}
          />

          {/* footer Education */}
          <Route path="/diamonds" element={<DiamondFooter />} />
          <Route
            path="/clarity-plus-diamonds"
            element={<ClarityPlusDiamonds />}
          />
          <Route path="/fine-jewelry-earrings" element={<Jewelry />} />
          <Route path="/our-policies" element={<OurPolicy />} />
          <Route path="/gemstones-types-guide" element={<Gemstones />} />
          <Route path="/lab-diamonds" element={<LabGrownDiamonds />} />
          <Route path="/metal" element={<Metal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/wedding-band-styles" element={<WeddingBandStyle />} />

          {/* Customer care */}
          <Route path="/id-me" element={<Idme />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/financing" element={<Financing />} />
          <Route
            path="/jewelry-protection-plan"
            element={<ExtendedWarranty />}
          />
          <Route path="/book-an-appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
