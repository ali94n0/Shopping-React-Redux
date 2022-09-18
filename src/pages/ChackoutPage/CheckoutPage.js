import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import "./checkout.css";

const ChackeoutPage = () => {
  const auth = useAuth();
  const { cart, total } = useCart();
  console.log(auth);

  if (!cart.length)
    return (
      <main className="checkoutContainer">
        <section className="checkoutCenter">
          <Link to={"/"}>Go Shopping?</Link>
        </section>
      </main>
    );
  return (
    <main className="checkoutContainer">
      <section className="checkoutCenter">
        {auth ? (
          <>
            <section className="accountDetails">
              <h3>Account Details:</h3>
              <div>
                <p>Name : {auth.name}</p>
                <p>Email : {auth.email}</p>
                <p>Phone : {auth.phoneNumber}</p>
              </div>
            </section>
            <section className="cartDetails">
              <h3>cart Details:</h3>

              {cart.map((c) => (
                <div>
                  <p>
                    {c.name} * {c.quantity}
                  </p>
                  <p>{c.offPrice} $</p>
                </div>
              ))}
              <hr />
              <div>
                <p>Total :</p>
                <p>{total} $</p>
              </div>
            </section>
          </>
        ) : (
          <Link to={"/signin"}>please login to your account!</Link>
        )}
      </section>
    </main>
  );
};

export default ChackeoutPage;
