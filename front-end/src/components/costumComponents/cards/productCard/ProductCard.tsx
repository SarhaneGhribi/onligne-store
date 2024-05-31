import React from "react";
import { Product } from "../../../../types";
import "./ProductCard.css";
type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-size">S M L XL</div>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <button className="add-to-cart-button">ADD TO CART</button>
    </div>
  );
};

export default ProductCard;
