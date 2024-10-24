import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiRoutes from "../utils/ApiRoutes";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(ApiRoutes.products.one(id));
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  return (
    <div >
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-white-900">
          Product Information
        </h3>
      </div>
      <div class="mt-6 border-t border-white-100">
        <dl class="divide-y divide-white-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white-900">
              Product name
            </dt>
            <dd class="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              {product.name}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white-900">
              Details
            </dt>
            <dd class="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              {product.details}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-white-900">Price</dt>
            <dd class="mt-1 text-sm leading-6 text-white-700 sm:col-span-2 sm:mt-0">
              {product.price}$
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Product;
