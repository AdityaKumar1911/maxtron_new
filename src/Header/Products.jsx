// src/Products.js
import React from "react";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: " Maxtron M1",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1pro_v2.webp",
    },
    {
      id: 2,
      name: "Maxtron M2",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1air_v2.webp",
    },
    {
      id: 3,
      name: "Maxtron M3",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1x_v2.webp",
    },
    {
      id: 4,
      name: "Maxtron M4",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_motorcycle_rx.webp",
    },
    // {
    //   id: 5,
    //   name: "Roadster",
    //   image:
    //     "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_motorcycle_r.webp",
    // },
    // {
    //   id: 6,
    //   name: "Roadster Pro",
    //   image:
    //     "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_motorcycle_rp.webp",
    // },
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
