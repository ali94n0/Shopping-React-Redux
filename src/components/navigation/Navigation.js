import { NavLink } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import "./navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  let totalQnty = 0;
  cart.forEach((item) => {
    totalQnty = totalQnty + item.quantity;
  });
  const userLogin = useAuth();

  return (
    <header>
      <nav>
        <ul>
          <div className="logo">Shopping Center</div>
          <li>
            <NavLink
              to={"/"}
              className={(NavData) => (NavData.isActive ? "activeLink" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to={"/cart"}
              className={(NavData) => (NavData.isActive ? "activeLink" : "")}
            >
              Cart
            </NavLink>
            {cart.length > 0 && <span>{totalQnty}</span>}
          </li>
          <li>
            <NavLink
              to={userLogin ? "/profile" : "/signin"}
              className={(NavData) => (NavData.isActive ? "activeLink" : "")}
            >
              {userLogin ? "Profile" : "Login/Signin"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
