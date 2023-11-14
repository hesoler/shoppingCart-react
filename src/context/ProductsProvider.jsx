import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import PropTypes from "prop-types";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
