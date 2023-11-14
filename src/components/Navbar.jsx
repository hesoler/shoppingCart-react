import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const Navbar = () => {
  const { purchaseList } = useContext(CartContext);

  return (
    <nav id="navBar" className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand">Cart</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Purchases
              </NavLink>
            </li>
          </ul>
          <NavLink to={"/cart"}>
            <Badge badgeContent={purchaseList?.length} color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
