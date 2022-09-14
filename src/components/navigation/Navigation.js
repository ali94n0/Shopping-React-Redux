import { NavLink } from "react-router-dom";
import { useCart } from "../../providers/CartProvider";
import "./navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  let totalQnty = 0;
  cart.forEach((item) => {
    totalQnty = totalQnty + item.quantity;
  });

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={(NavData) => (NavData.isActive ? "activeLink" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className={(NavData) => (NavData.isActive ? "activeLink" : "")}
            >
              Cart
            </NavLink>
            {cart.length > 0 && <span>{totalQnty}</span>}
          </li>
        </ul>
        <div>Shopping Center</div>
      </nav>
    </header>
  );
};

export default Navigation;
