import { useParams } from "react-router-dom";
import Signature from "../w-signature/signature";
import JewelryCollections from "../highJewelry/JewelryCollections";
import Reserve from "../reserve-collections/reserve";
import PageNotFound from "../PageNotFound/PageNotFound";


// Main router
const PageRouter = () => {
  const { slug } = useParams();

  // 🔹 High Jewelry collections
  if (slug === "luxe-collection-engagement-rings-and-wedding-bands") {
    return <JewelryCollections />;
  }

  if (slug === "the-reserve-collection") {
    return <Reserve />;
  }

  if (slug === "the-w-signature-solitaire-engagement-rings") {
    return <Signature />;
  }

  // 🔹 Fallback
  return <PageNotFound />;
};

export default PageRouter;
