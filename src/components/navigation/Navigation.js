import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
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
          </li>
        </ul>
        <div>Shopping Center</div>
      </nav>
    </header>
  );
};

export default Navigation;
