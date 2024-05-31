import React from "react";
import "./Home.css";
import Categories from "./components/Categories";
import { Product } from "../../types";
import productImage from "../../assets/images/image-removebg-preview(1).png";
import ProductCard from "../../components/costumComponents/cards/productCard/ProductCard";
type Props = {};

const product: Product = {
  id: 1,
  name: "Man Hoodie",
  price: 20.99,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: productImage,
  categoryId: 1,
  subCategoryId: 1,
};

const Home = (props: Props) => {
  return (
    <div className="container">
      <div className="topContainer">
        <Categories />
      </div>
      <div className="bottomContainer">
        <div className="rightContainer">
          <div className="topRightContainer"></div>
          <div className="bottomRightContainer"></div>
        </div>
        <div className="leftContainer">
          <div className="topLeftContainer">
            <ProductCard product={product} />
          </div>
          <div className="bottomLeftContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
