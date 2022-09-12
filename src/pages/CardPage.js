import { useCart } from "../providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart } = useCart();

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
              <tr className="cartItem" key={item.id}>
                <td>
                  <div className="itemImg">
                    <img src={item.image} alt={item.name} />
                  </div>
                </td>
                <td>
                  <div>{item.name}</div>
                </td>
                <td>
                  <div>{item.price * item.quantity}</div>
                </td>
                <td>
                  <button className="btn">remove</button>
                  <button className="btn ">{item.quantity}</button>
                  <button className="btn ">add</button>
                </td>
              </tr>
            ))}
          </table>
        </section>
        <section className="cartSummery">cart summery is here.</section>
      </section>
    </main>
  );
};

export default CartPage;
