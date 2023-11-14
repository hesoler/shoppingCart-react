import { Card } from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const PurchasesPage = () => {
  const { products } = useContext(ProductContext);
  const { addPurchase, removePurchase } = useContext(CartContext);

  const handleAdd = (purchase) => {
    addPurchase(purchase);
  };
  const handleRemove = (id) => {
    removePurchase(id);
  };

  return (
    <>
      <h1>Purchases: </h1>
      <hr />
      {products?.map((product) => {
        return (
          <Card
            key={product.id}
            {...product}
            handleAdd={() => {
              handleAdd(product);
            }}
            handleRemove={() => {
              handleRemove(product.id);
            }}
          />
        );
      })}
    </>
  );
};
