import { useParams } from "react-router-dom";
import GiftList from "../gift/GiftList";
import SaleList from "../sale/SaleList";
import CollectionList from "../collection/CollectionList";
import PageNotFound from "../PageNotFound/PageNotFound";

const giftSlugs = [
  "jewelry-gifts",
  "diamond-ring-gifts",
  "necklace-gifts",
  "earring-gifts",
  "bracelet-gifts",
  "gifts-under-500",
  "gifts-under-1000",
  "gifts-under-1500",
  "bouquet",
  "toi-et-moi-collection",
  "vine-collection",
  "incredible-value",
  "jewelry-gift-sets",
  "ready-to-ship-diamond-jewelry-gifts",
  "jewelry-gifts-for-him",
  "caratcasa-gift-card",
  // ... more gift slugs
];

const saleSlugs = [
  "diamond-jewelry-sale",
  "ring-sale",
  "necklace-sale",
  "bracelet-sale",
  // ... more sale slugs
];

const collectionSlugs = [
  "cassatt",
  "the-fulton-collection",
  "the-seraphine-collection",
  "the-windsor-collection",
  "the-bond-collection",
  "bouquet",
  "vine-collection",
  // ... more sale slugs
];

const CollectionsRouter = () => {
  const { slug } = useParams();

  if (saleSlugs.includes(slug)) {
    return <SaleList />;
  }

  if (giftSlugs.includes(slug)) {
    return <GiftList />;
  }

  if (collectionSlugs.includes(slug)) {
    return <CollectionList />;
  }

  // fallback if slug doesn't exist
  return <PageNotFound />;
};

export default CollectionsRouter;
