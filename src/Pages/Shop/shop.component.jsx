import React from "react";

import CollectionOverview from "../../Components/collections-overwiew/collections-overwiew.component";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
