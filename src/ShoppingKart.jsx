import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PurchasesPage } from "./pages/PurchasesPage";
import { CartPage } from "./pages/CartPage";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider.jsx";

export const ShoppingKart = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<PurchasesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
};
