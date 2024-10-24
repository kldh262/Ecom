import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import ApiRoutes from "../utils/ApiRoutes";
import { useSearchDetails } from "../context/searchDetails";

export default function Details() {
  const { search } = useSearchDetails();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(ApiRoutes.products.all);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (typeof search === "string") {
      const filtered = products.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search]);

  return (
    <div className="flex justify-center items-center p-2 h-full">
      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((prod, i) => (
            <Card key={i} product={prod} />
          ))}
        </div>
      ) : (
        <div>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
}