import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PurchasesPage } from "./pages/PurchasesPage";
import { CartPage } from "./pages/CartPage";
import { ProductsProvider } from "./context/ProductsProvider";

export const ShoppingKart = () => {
  return (
    <ProductsProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PurchasesPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </div>
    </ProductsProvider>
  );
};
