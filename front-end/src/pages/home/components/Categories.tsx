import React, { useState } from "react";
import "./Categories.css";
import { Category, categories, SubCategory } from "./data";

type Props = {};

const Categories: React.FC<Props> = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <div className="categories-container">
      {categories.map((category: Category) => (
        <div
          key={category.id}
          className="category"
          onMouseEnter={() => setHoveredCategory(category.id)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <div className="category-name">{category.name}</div>
          {hoveredCategory === category.id && (
            <div className="subcategories">
              {category.subCategories.map((subCategory: SubCategory) => (
                <div key={subCategory.id} className="subcategory">
                  <div className="subcategoryName">{subCategory.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
