import { Card } from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const PurchasesPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <h1>Purchases: </h1>
      <hr />
      {products?.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </>
  );
};
