import * as data from "../db/data";
import { useCart, useCartAction } from "../providers/CartProvider";
import { toast } from "react-toastify";
import { checkInCart } from "../utils/checkInCart";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useCartAction();
  const { cart } = useCart();
  const clickHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart`);
  };
  return (
    <main className="container">
      <section className="productsList">
        {data.products.map((product) => (
          <section key={product.id} className="product">
            <div className="productImg">
              <img src={product.image} alt={product.name}></img>
            </div>
            <div className="productDesc">
              <p>{product.name}</p>
              <p>$ {product.price}</p>
              {/* <button
                className="btn primary"
                onClick={() => clickHandler(product)}
              >
                Add To Cart
              </button> */}
              {checkInCart(cart, product) ? (
                <Link to={"/cart"}>In Cart</Link>
              ) : (
                <button
                  className="btn primary"
                  onClick={() => clickHandler(product)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
