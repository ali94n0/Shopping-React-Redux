import { useCart, useCartAction } from "../providers/CartProvider";
import "./cartPage.css";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartAction();
  const totalOriginalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart.length) {
    return (
      <main>
        <p>no item in cart!</p>
      </main>
    );
  }
  return (
    <main className="cartContainer">
      <section className="cartCenter">
        <section className="cartItemList">
          <table>
            <tr>
              <th>image</th>
              <th>name</th>
              <th>total price</th>
              <th>change</th>
            </tr>
            {cart.map((item) => (
              <tr className="cartItem" key={item._id}>
                <td>
                  <div className="itemImg">
                    <img src={item.image} alt={item.name} />
                  </div>
                </td>
                <td>
                  <div>{item.name}</div>
                </td>
                <td>
                  <div>{item.offPrice * item.quantity} $</div>
                </td>
                <td>
                  <button
                    className={item.quantity > 1 ? "btn dec" : "btn remove"}
                    onClick={() => decHandler(item)}
                  >
                    {item.quantity > 1 ? "-" : <BiTrash />}
                  </button>
                  <button className="btn qnty ">{item.quantity}</button>
                  <button className="btn inc " onClick={() => incHandler(item)}>
                    +
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </section>
        <section className="cartSummery">
          <h2>cart summery</h2>
          <div className="priceSummery">
            <div>
              <p>Original price:</p>
              <p>{totalOriginalPrice} $</p>
            </div>
            <div>
              <p>Discount:</p>
              <p>{totalOriginalPrice - total} $</p>
            </div>
            <div>
              <p>Total price:</p>
              <p>{total} $</p>
            </div>
          </div>
          <Link to={"/signup?redirect=checkout"}>
            <button className="btn primary">Check Out</button>
          </Link>
        </section>
      </section>
    </main>
  );
};

export default CartPage;
