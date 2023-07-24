import React from "react";

import { Product, FooterBanner, HeroBanner } from "@/components";
import { client } from "@/lib/client";

const Home = ({ products, bannerData }) => {
  const acousticGuitars = products.filter(
    (product) => product.category === "Acoustic Guitars"
  );

  const electricGuitars = products.filter(
    (product) => product.category === "Electric Guitars"
  );

  const basses = products.filter((product) => product.category === "Basses");

  const keyboards = products.filter(
    (product) => product.category === "Keyboards"
  );

  const drums = products.filter((product) => product.category === "Drums");

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div>
        <div className="products-heading">
          <h2>Acoustic Guitars</h2>
        </div>

        <div className="products-container">
          {acousticGuitars?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <div className="products-heading">
          <h2>Electric Guitars</h2>
        </div>

        <div className="products-container">
          {electricGuitars?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <div className="products-heading">
          <h2>Basses</h2>
        </div>

        <div className="products-container">
          {basses?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <div className="products-heading">
          <h2>Keyboards</h2>
        </div>

        <div className="products-container">
          {keyboards?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <div className="products-heading">
          <h2>Drums</h2>
        </div>

        <div className="products-container">
          {drums?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const productQuery = "*[_type == 'product']";
  const products = await client.fetch(productQuery);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
