import React from "react";
import { Link } from "react-router-dom";

const ProductsList = props => {
  console.log(props.products);
  if (!props.products) return <div></div>;
  return props.products
    .filter(product => {
      return product.title.toLowerCase().includes(props.search);
    })
    .map(product => {
      // console.log(product.images[0]);
      const path = product.images[0];
      console.log(path);
      return (
        <div className="product-card" key={product._id}>
          <div className="product-image">
            <img src={path} alt={product.title} />
          </div>
          <div className="product-info">
            {/* [product.type] */}
            <Link
              to={`/products/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              {product.title}
            </Link>
            <h5>{product.price}€</h5>
            <button onClick={() => props.addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      );
    });
};

export default ProductsList;
