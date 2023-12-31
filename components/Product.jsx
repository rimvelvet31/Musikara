import React from "react";
import Link from "next/link";

import { urlFor } from "@/lib/client";

const Product = ({
  product: { image, name, slug, price, description, category },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">&#8369;{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
