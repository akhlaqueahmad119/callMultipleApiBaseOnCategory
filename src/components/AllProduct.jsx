import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import DropDown from "./DropDown";

const AllProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedCategories([]);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        let data = [];
        if (selectedCategories.length === 0) {
          const response = await fetch("https://fakestoreapi.com/products");
          if (response.status !== 200) {
            throw new Error(`Failed to fetch all products`);
          }
          data = await response.json();
        } else {
          const allData = await Promise.all(
            selectedCategories.map(async (category) => {
              const response = await fetch(
                `https://fakestoreapi.com/products/category/${category}`
              );
              if (response.status !== 200) {
                throw new Error(`Failed to fetch category: ${category}`);
              }
              return response.json();
            })
          );
          data = allData.flat();
        }

        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories]);

  return (
    <div>
      <DropDown
        setSelectedCategories={setSelectedCategories}
        selectedCategories={selectedCategories}
        // setSearchParams={setSearchParams}
      />
      <h1>All Products</h1>
      <Cart allProducts={allProducts} loading={loading} />
    </div>
  );
};

export default AllProduct;
