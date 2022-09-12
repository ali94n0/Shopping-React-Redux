import * as data from "../db/data";
import { useCartAction } from "../providers/CartProvider";

const HomePage = () => {
  const dispatch = useCartAction();
  const clickHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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
              <button
                className="btn primary"
                onClick={() => clickHandler(product)}
              >
                Add To Cart
              </button>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
