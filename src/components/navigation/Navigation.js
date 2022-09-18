import { useEffect, useState } from "react";
import { BiCart, BiLogIn, BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import { useProductsAction } from "../../providers/pruductsProvider";
import getAllProducts from "../../services/getAllProducts";
import "./navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const setProducts = useProductsAction();
  const [searchProduct, setSearchProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const userLogin = useAuth();
  let totalQnty = 0;
  cart.forEach((item) => {
    totalQnty = totalQnty + item.quantity;
  });
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setAllProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);

  const changeHandler = (e) => {
    setSearchProduct(e.target.value);
    const searched = e.target.value;
    if (searched !== "") {
      const filteredProducts = allProduct.filter((c) =>
        c.name.toLowerCase().includes(searched.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProduct);
    }
  };

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
        <div className="searchBox">
          <input
            type={"text"}
            placeholder={"Search your product ..."}
            onChange={changeHandler}
            value={searchProduct}
          ></input>
        </div>
        <ul>
          <li>
            <NavLink
              to={"/cart"}
              className={(NavData) => (NavData.isActive ? "activeLink" : "")}
            >
              <BiCart className="reactIcon" />
            </NavLink>
            {cart.length > 0 && <span>{totalQnty}</span>}
          </li>
          <li>
            <NavLink
              to={userLogin ? "/profile" : "/signin"}
              className={(NavData) => (NavData.isActive ? "activeLink" : "")}
            >
              {userLogin ? (
                <BiUserCircle className="reactIcon" />
              ) : (
                <BiLogIn className="reactIcon" />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
