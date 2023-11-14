import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";

export const CartPage = () => {
  const { purchaseList, removePurchase, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const calculateTotal = () => {
    return purchaseList
      ?.reduce((total, item) => total + item.price * item.amount, 0)
      ?.toFixed(2);
  };

  const handlePrint = () => {
    print();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col" align="center">
              Amount
            </th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {purchaseList?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => decreaseAmount(item.id)}
                >
                  -
                </Button>
                <Button variant="outlined">
                  <b>{item.amount}</b>
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => increaseAmount(item.id)}
                >
                  +
                </Button>
              </td>
              <td>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removePurchase(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}

          <tr key={"totalPrice"}>
            <td></td>
            <td>
              <b>Total: </b>
              <span>${calculateTotal()}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-1">
        <Button
          variant="contained"
          onClick={handlePrint}
          disabled={purchaseList < 1}
        >
          Buy
        </Button>
      </div>
    </>
  );
};
