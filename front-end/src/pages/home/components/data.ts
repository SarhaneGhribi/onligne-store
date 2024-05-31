// Define the type for a subcategory
interface SubCategory {
  id: number;
  name: string;
}

// Define the type for a category
interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

// Create the categories array with type annotations
const categories: Category[] = [
  {
    id: 1,
    name: "Clothes",
    subCategories: [
      { id: 1, name: "Men" },
      { id: 2, name: "Women" },
      { id: 3, name: "Kids" },
      { id: 4, name: "Accessories" },
    ],
  },
  {
    id: 2,
    name: "Phones",
    subCategories: [
      { id: 1, name: "Smartphones" },
      { id: 2, name: "Feature Phones" },
      { id: 3, name: "Accessories" },
      { id: 4, name: "Tablets" },
    ],
  },
  {
    id: 3,
    name: "Cars",
    subCategories: [
      { id: 1, name: "Sedans" },
      { id: 2, name: "SUVs" },
      { id: 3, name: "Trucks" },
      { id: 4, name: "Electric" },
    ],
  },
  {
    id: 4,
    name: "Houses",
    subCategories: [
      { id: 1, name: "Apartments" },
      { id: 2, name: "Villas" },
      { id: 3, name: "Townhouses" },
      { id: 4, name: "Land" },
    ],
  },
];

export { categories };
export type { SubCategory, Category };
