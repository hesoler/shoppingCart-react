import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="navBar" className="navbar navbar-expand-lg bg-light">
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
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
